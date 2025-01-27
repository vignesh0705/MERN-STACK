const express = require('express');
const path = require('path'); 
const app = express();
const mdb = require('mongoose');
const dotenv = require('dotenv');  
const { config } = require('process');

configDotenv.config("mongodb+srv://vigneshvarpandi:vicky@07@mern-sece.jboex.mongodb.net/");

mdb.connect(process.env.NOMGODB_URL).then(() => {
    console.log("MongoDB connection Successfull");
}).catch((err) => {
    console.log("MongoDB connection UnSuccessfull");
})

app.get('/', (req, res) => {
    res.send('Wlcome to SECE Backend my fellow friends.');
});

app.get('/static', (req, res) => {
    console.log(__dirname);
    res.sendFile(path.join (__dirname, "index.html"));
});

app.listen(3001, () => {
    console.log('Server Stated');
});
