const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
const Artist = require('../models/artist');


async function signup(req, res) {
    try{
       
            // Get the sent in data off request body
            const name = req.body.name;
            const location = req.body.location;
            const phone = req.body.phone;
            const email = req.body.email;
            const password = req.body.password;

            let user = await Artist.findOne({ email });
            if (user) return res.status(400).send('User already exists.');

            const hashedPassword = bcrypt.hashSync(password, 8);
       
           //  Create an artist with it
           const artist = await Artist.create({
               name: name,
               location: location,
               phone: phone,
               email: email,
               password: hashedPassword,
               // img: {
               //     data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename)),
               //     contentType: 'image/png'
               // }
           });
       
        //    res.sendStatus(200);

           // respond with the new artist
           res.json({ artist });
       
    } catch(err){
        console.log(err);
        res.sendStatus(400).send('Server error');
    }
}

module.exports = {
    signup,
}