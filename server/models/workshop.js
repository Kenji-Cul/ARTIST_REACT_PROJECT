const mongoose = require("mongoose");

const workshopSchema = new mongoose.Schema({
     name: String,
     date: String,
     time: String,
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

const Workshop = mongoose.model("Workshop", workshopSchema);

module.exports = Workshop;