const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
const Gallery = require('../models/gallery');
const Artist = require('../models/artist');
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

        let artgallery = await Gallery.findOne({ name });
        if(artgallery){
            res.status(400).json({message: "Gallery already exists"});
        } else {
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
        }

        
               
    } catch (err) {
         console.log(err);
        res.sendStatus(400).send('Server error');
    }
}


async function updateGallery(req, res){
    try {
        const galleryid = req.params.id;
        const {
           name,
           myfile,
           imgname,
        } = req.body;

        // console.log(req.body);
       
        let artgallery = await Gallery.findOne({ name });
     

        if(imgname.length === 0 && myfile.length === 0 && name !== null){

            const gallery = await Gallery.findById(galleryid);
         
          if(artgallery){
            if(String(artgallery.name) === String(gallery.name)){
                await Gallery.findByIdAndUpdate(galleryid,{
                    img: gallery.img,
                    name,
                });
    
    
                res.json({message: "Gallery updated successfully"});
            } else {
                res.status(400).json({message: "Gallery already exists"});
            }
            
          } 
          
          else {
            await Gallery.findByIdAndUpdate(galleryid,{
                img: gallery.img,
                name,
            });


            res.json({message: "Gallery updated successfully"});
          }
            
        
          
         } else {

      
     
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
                       await Gallery.findByIdAndUpdate(galleryid,{
                        img: imgname,
                        name,
                    });
       
                     
                       // console.log(gallery);
                       res.json({message: "Gallery updated successfully"});
        
    }           

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



module.exports = {
    createGallery,
    getGalleryImage,
    updateGallery,
}