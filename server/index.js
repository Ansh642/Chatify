const express = require('express');
const app = express();
const db= require('./config/database');

require("dotenv").config();
db.connect();

const PORT = process.env.PORT || 5000;

app.listen(PORT,function(req,res){
    console.log(`App listening on ${PORT}`);
});

