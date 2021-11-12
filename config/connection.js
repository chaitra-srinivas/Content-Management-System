// Import dotenv package
require('dotenv').config();

const mysql = require('mysql2/promise');

// Connect to database
/* function connect(){
    return mysql.createConnection({
        host: 'localhost',
        database: process.env.DB_NAME,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD
    });
}
 */
// Using async await
async function connect(){
    return await mysql.createConnection({
        host: 'localhost',
        database: process.env.DB_NAME,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD
    });
}

module.exports = connect;