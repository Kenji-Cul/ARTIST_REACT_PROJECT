const mongoose = require("mongoose");

const paintingSchema = new mongoose.Schema({
     name: String,
     location: String,
     date: String,
     description: {
        type: String,
        minLength: 255,
        maxLength: 3000
     },
     img: {
        data: Buffer,
        contentType: String
   }
});

const Painting = mongoose.model("Painting", paintingSchema);

module.exports = Painting;