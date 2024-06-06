const mongoose = require("mongoose");


const artistSchema = new mongoose.Schema({
     name: {
          type: String,
          min: 3,
          max: 255,
          required: true,
     },
     location: {
          type: String,
          min: 100,
          max: 1000,
          required: true,
     },
     phone: {
          type: Number,
          required: true,
     },
     email: {
          type: String,
          required: true,
     },
     password: {
          type: String,
          required: true,
     },
     // img: {
     //      data: Buffer,
     //      contentType: String
     // }
});

const Artist = mongoose.model("Artist", artistSchema);



module.exports = Artist; 