const mysql = require('mysql2');
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'discord-temp-bot',
    password: 'Abd26!2003'
})

module.exports = pool.promise();