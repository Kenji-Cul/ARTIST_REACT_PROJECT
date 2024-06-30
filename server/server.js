// Load env variables
if(process.env.NODE_ENV != 'production'){
    require("dotenv").config();
    }


// Import dependencies
const express = require('express');
var bodyParser = require('body-parser');
const cors = require("cors");
const connectToDb = require('./config/connectToDb');
const Artist = require('./models/artist');
const artistController = require('./controllers/artistController');
var multer = require('multer');
const fs = require('fs');
const mime = require('mime-types');
var path = require('path');


const secretKey = 'your-secret-key';

// Create an express app
const app = express();
app.use(cors({
    origin: true,
    credentials: true,
}
));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())


// Configure express app
app.use(express.json());

// Connect to database
connectToDb();

//Routing
app.post('/signup', artistController.signup)

app.post('/login', artistController.login);

// var upload = multer({dest: 'uploads/'});

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname + '-' + Date.now())
    }
});

// multer({
//     limits: { fieldSize: 2097152 }
//   })

var upload = multer({ storage: storage,
    limits:  { fieldSize: 2097152 }
 });

// const uploadImage = async (req, res, next) => {
//     // to declare some path to store your converted image
//     var matches = req.body.ba.match(/^data:([A-Za-z-+/]+);base64,(.+)$/),
//     response = {};
    
//     if (matches.length !== 3) {
//     return new Error('Invalid input string');
//     }
    
//     response.type = matches[1];
//     response.data = new Buffer(matches[2], 'base64');
//     let decodedImg = response;
//     let imageBuffer = decodedImg.data;
//     let type = decodedImg.type;
//     let extension = mime.extension(type);
//     let fileName = "image." + extension;
//     try {
//     fs.writeFileSync("./images/" + fileName, imageBuffer, 'utf8');
//     return res.send({"status":"success"});
//     } catch (e) {
//     next(e);
//     }
//     }

//     var uploadImg = upload.single('myfile');


app.put('/artist/:id', upload.single('myfile'), artistController.updateUser);


app.get('/artists/:id', artistController.getUser);

app.get("/:folder/:image_name", artistController.getImage);

app.put('/artists/:id', async (req, res) => {
    //  Get the id off the url
    const artistId = req.params.id;

    // Get the data off the req body
    const name = req.body.name;
    const location = req.body.location;
    const phone = req.body.phone;
    const email = req.body.email;


    // Find and update the record
    await Artist.findByIdAndUpdate(artistId, {
        name : name,
        location: location,
        phone: phone,
        email: email,
    });

    // Find updated note
    const artist = await Artist.findById(artistId);

    // Respond with it
    res.json({artist: artist});
})




// Start our server
app.listen(process.env.PORT);

