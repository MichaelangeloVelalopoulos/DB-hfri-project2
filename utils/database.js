const mysql = require('mysql2');

/* create connection and export it */
const pool = mysql.createPool({
    host: "127.0.0.1",
    user: "root",
    password: "Mixvel01",
    database: "hfri",
});

module.exports = { pool };