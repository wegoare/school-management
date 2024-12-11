// const mysql = require('mysql2');
// require('dotenv').config(); // Load environment variables

// // Create a single MySQL connection
// const db = mysql.createConnection({
//     host: process.env.DB_HOST,       // MySQL host (from environment variables)
//     user: process.env.DB_USER,       // MySQL username
//     password: process.env.DB_PASSWORD, // MySQL password
//     database: process.env.DB_NAME,   // MySQL database name
// });

// // Establish connection
// db.connect((err) => {
//     if (err) {
//         console.error('Error connecting to MySQL:', err.message || err);
//         return;
//     }
//     console.log('Connected to MySQL Database');
// });

// module.exports = db; // Export the connection


const mysql = require('mysql2');
require('dotenv').config();

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10, // Maximum number of connections in the pool
  queueLimit: 0,       // Unlimited queue length
});

const db = pool.promise(); 
pool.on('connection', () => {
    console.log('MySQL pool connected');
  });
  
  pool.on('error', (err) => {
    console.error('MySQL pool error:', err);
  });
  

module.exports = db;
