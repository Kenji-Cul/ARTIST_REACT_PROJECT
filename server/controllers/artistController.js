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
            const desc = null;
            const img = null;

            let user = await Artist.findOne({ email });
            if (user) {
                return res.status(400).send('User already exists.');
            } else {
                const hashedPassword = bcrypt.hashSync(password, 8);
       
                //  Create an artist with it
                const artist = await Artist.create({
                    name: name,
                    location: location,
                    phone: phone,
                    email: email,
                    password: hashedPassword,
                    description: desc,
                    img: img,
                    // img: {
                    //     data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename)),
                    //     contentType: 'image/png'
                    // }
                });
            
             //    res.sendStatus(200);
     
                // respond with the new artist
                res.json({ artist });
            }

           
       
    } catch(err){
        console.log(err);
        res.sendStatus(400).send('Server error');
    }
}

async function login(req, res) {
    const user = await Artist.findOne({ email : req.body.email });
       try{
           const match = await bcrypt.compare(req.body.password, user.password);
           const accessToken = jwt.sign(JSON.stringify(user), process.env.SECRET);
           if(match){
                 res.send({
                    accessToken, 
                    user:{
                        id: user._id,
                        name: user.name,
                        location: user.location,
                        phone: user.phone,
                        email: user.email
                 }});
           } else {
                res.status(400).send("Invalid Credentials");
           }
       }

       catch(e){
            console.log(e);
       }
}

module.exports = {
    signup,
    login,
}