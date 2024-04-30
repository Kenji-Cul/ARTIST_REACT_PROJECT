// Load env variables
if(process.env.NODE_ENV != 'production'){
    require("dotenv").config();
    }


// Import dependencies
const express = require('express');
//const cors = require("cors");
const connectToDb = require('./config/connectToDb');


// Create an express app
const app = express();

// Configure express app
app.use(express.json());

// Connect to database
connectToDb();

// Start our server
app.listen(process.env.PORT);

