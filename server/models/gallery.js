const mongoose = require("mongoose");

const gallerySchema = new mongoose.Schema({
     name: {
          type: String,
          min: 3,
          max: 255,
          required: true,
     },
     userid:  {
          type: String,
          min: 3,
          max: 255,
          required: true,
     },
     img: {
          type: String,
          required: true,
     }
});

const Gallery = mongoose.model("Gallery", gallerySchema);


module.exports = Gallery; 