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
          type: String,
          required: true,
     },
     email: {
          type: String,
          required: true,
          unique: true,
          validate: {
               validator: function (value) {
                 return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
               },
               message: 'Invalid email address format',
             },
     },
     password: {
          type: String,
          required: true,
     },
     description: {
          type: String,
          min: 3,
          max: 1000,
     },
     img: {
          data: Buffer,
          contentType: String
     }
});

const Artist = mongoose.model("Artist", artistSchema);



module.exports = Artist; 