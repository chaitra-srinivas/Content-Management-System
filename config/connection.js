// Import dotenv package
require('dotenv').config();

const mysql = require('mysql2');

// Connect to database

mysql.createConnection({
    host: 'localhost',
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD
},
console.log('Connected to the employee_db database'));

module.exports = mysql;