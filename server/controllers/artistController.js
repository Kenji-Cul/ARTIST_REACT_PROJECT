const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
const Artist = require('../models/artist');
var path = require('path');
const { type } = require('os');
const fs = require('fs');
const mime = require('mime-types');
var ObjectID = require('mongodb').ObjectId;


async function signup(req, res) {
    try{
       
            // Get the sent in data off request body
            const name = req.body.name;
            const location = req.body.location;
            const phone = req.body.phone;
            const email = req.body.email;
            const password = req.body.password;
            const desc = null;
            const img = null;

            let user = await Artist.findOne({ email });
            if (user) {
                return res.status(400).send('User already exists.');
            } else {
                const hashedPassword = bcrypt.hashSync(password, 8);
       
                //  Create an artist with it
                const artist = await Artist.create({
                    name: name,
                    location: location,
                    phone: phone,
                    email: email,
                    password: hashedPassword,
                    description: desc,
                    img: img,
                    // img: {
                    //     data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename)),
                    //     contentType: 'image/png'
                    // }
                });
            
             //    res.sendStatus(200);
     
                // respond with the new artist
                // res.json({ artist });
                res.json({message: "Registered Successfully"});
            }

           
       
    } catch(err){
        if (err.code === 11000) {
            return res.status(400).send('User already exists.');
            // Handle the duplicate key error here (e.g., retry with different data)
          } else {
            console.error('An error occurred:', err);
          }
        res.sendStatus(400).send('Server error');
    }
}

async function login(req, res) {
    const user = await Artist.findOne({ email : req.body.email });
       try{
           const match = await bcrypt.compare(req.body.password, user.password);
           const accessToken = jwt.sign(JSON.stringify(user), process.env.SECRET);
           if(match){
                 res.send({
                    accessToken, 
                    user:{
                        id: user._id,
                        name: user.name,
                        location: user.location,
                        phone: user.phone,
                        email: user.email,
                        desc: user.description,
                        img: user.img,
                 }});
           } else {
                res.status(400).send("Invalid Credentials");
           }
       }

       catch(e){
            console.log(e);
       }
}

async function getUser(req, res){
    try{
        const userid = req.params.id;
    
        const artist = await Artist.findById(userid);
        res.json({artist});
        
    } catch(e){
        console.log(e)
        res.sendStatus(400).send('Server error');
    }
}

async function getImage(req,res){
    const { folder, image_name } = req.params;
  
    // find an image based on the downloadUrl in the folder where files are saved.
    // Please note, after uploading file successfully generate a download url 
    // appropriately so that this route can help figure out which image you 
    // are looking for.
    const file = path.join(`./${folder}`, `${image_name}`);
   
  
    // Figure out a way how stream works in your context.
    // Providing MIME type is important!
    const type = mime[path.extname(file).slice(1)] || "image/jpg" || "image/png";
    const s = fs.createReadStream(file);
    s.on("open", () => {
      res.set("Content-Type", type);
      s.pipe(res);
    });
    s.on("error", (err) => {
      // Handle Error
    });
}

 

async function updateUser(req, res) {
    try{
        const userid = req.params.id;
        const {
         desc, 
         myfile,
         name,
         username,
         location,
         number,
     } = req.body;
     
    
         // Find and update the record
      
     
        //  console.log(username)
        //  console.log(desc)
        //  console.log(location)
        //  console.log(number)
        //  console.log(name)
        //  console.log(myfile)
    

        if(name.length === 0 && myfile.length === 0 && desc !== null && username !== null && location !== null && number !== null ){

            const artist = await Artist.findById(userid);
            await Artist.findByIdAndUpdate(userid,{
                description: desc,
                img: artist.img,
                name: username,
                location: location,
                phone: number,
            });
            
         } 

        //  else if(name.length !== 0 && myfile.length !== 0 && desc.length === 0 && username.length === 0 && location.length === 0 && number.length === 1 ){

        //     const artist = await Artist.findById(userid);
        //     await Artist.findByIdAndUpdate(userid,{
        //         description: desc,
        //         img: name,
        //         name: username,
        //         location: location,
        //         phone: number,
        //     });
            
        //  } 


        
         else {
            var matches = req.body.myfile.match(/^data:([A-Za-z-+/]+);base64,(.+)$/),
     response = {};
     
     if (matches.length !== 3) {
     return new Error('Invalid input string');
     }
     response.type = matches[1];
     response.data = Buffer.from(matches[2], 'base64');
     let decodedImg = response;
     let imageBuffer = decodedImg.data;
     let type = decodedImg.type;
     let extension = mime.extension(type);
     let fileName = req.body.name;
     fs.writeFileSync("./uploads/" + fileName, imageBuffer, 'utf8');

            await Artist.findByIdAndUpdate(userid,{
                description: desc,
                img: name,
                name: username,
                location: location,
                phone: number,
            });
         

        }    
         const artist = await Artist.findById(userid);
        
    
        if(artist){
            res.json({message: "Updated Successfully"});
        }
    } catch (e){
        console.log(e)
        res.sendStatus(400).send('Server error');
    }
    
}

module.exports = {
    signup,
    login,
    updateUser,
    getUser,
    getImage
}