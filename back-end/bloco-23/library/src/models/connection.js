const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'model_database',
    password: 'password',
    port: 3000
});

module.exports = connection;