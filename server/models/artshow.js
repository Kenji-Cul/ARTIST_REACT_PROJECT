const mongoose = require("mongoose");

const artshowSchema = new mongoose.Schema({
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

const ArtShow = mongoose.model("ArtShow", artshowSchema);

module.exports = ArtShow;