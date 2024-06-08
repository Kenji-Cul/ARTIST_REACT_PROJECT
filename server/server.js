// Load env variables
if(process.env.NODE_ENV != 'production'){
    require("dotenv").config();
    }


// Import dependencies
const express = require('express');
const cors = require("cors");
const connectToDb = require('./config/connectToDb');
const Artist = require('./models/artist');
const artistController = require('./controllers/artistController');

const secretKey = 'your-secret-key';

// Create an express app
const app = express();
app.use(cors({
    origin: true,
    credentials: true,
}
));


// Configure express app
app.use(express.json());

// Connect to database
connectToDb();

//Routing
app.post('/signup', artistController.signup)

app.post('/login', artistController.login);

app.get('/artists/:id', async (req, res) => {
    // Get id off the url
    const artistId = req.params.id;

    // Find the artist using that id
    const artist = await Artist.findById(artistId)

    // Respond with the artist
    res.json({ artist: artist})
});

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

