// Import dotenv package
require('dotenv').config();

// Connect to database
const db = require('db');
db.connect({
    host: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD
})

module.exports = db;