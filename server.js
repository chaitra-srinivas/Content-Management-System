const express = require('express');


// May need to move this to a different file
const inquirer = require('inquirer');
const cTable = require('console.table');

// DB Connection
const db = require('./config/connection');



const PORT = process.env.PORT || 3001;
const app = new express();

//Express middleware
app.use(express.urlencoded({extended:false}));
app.use(express.json());

// routes

// Turn on connection to db and server

app.listen(PORT,()=>{
    console.log(`Server running on ${PORT}`);
});
