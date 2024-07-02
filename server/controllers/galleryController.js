const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
const Gallery = require('../models/gallery');
var path = require('path');
const { type } = require('os');
const fs = require('fs');
const mime = require('mime-types');
var ObjectID = require('mongodb').ObjectId;


async function createGallery(req, res){
    try {
        const userid = req.params.id;
        const {
           name,
           myfile,
           imgname,
        } = req.body;

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
     let fileName = req.body.imgname;
     fs.writeFileSync("./galleryuploads/" + fileName, imageBuffer, 'utf8');

     // Create a gallery with it
                const gallery = await Gallery.create({
                    name,
                    userid,
                    img: imgname,
                });

                res.json({gallery});
                // console.log(gallery);
               
    } catch (err) {
         console.log(err);
        res.sendStatus(400).send('Server error');
    }
}


async function getGalleryImage(req, res){
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


async function getGallery(req, res){
    try{
        const id = req.params.id;
    
        const gallery = await Gallery.find({ userid: id}).exec();
        // const gallery = await Gallery.findById(user_id);
        res.json({gallery});
        console.log(gallery);
        // console.log(user_id);
        // res.json({user_id});
        
    } catch(e){
        console.log(e)
        res.sendStatus(400).send('Server error');
    }
}



module.exports = {
    createGallery,
    getGalleryImage,
    getGallery,
}