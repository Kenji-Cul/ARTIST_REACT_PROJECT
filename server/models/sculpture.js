const mongoose = require("mongoose");

const sculptureSchema = new mongoose.Schema({
     price: String,
     name: String,
     paintingType: String,
     img: {
        data: Buffer,
        contentType: String
   }
});

const Sculpture = mongoose.model("Sculpture", sculptureSchema);

module.exports = Sculpture;