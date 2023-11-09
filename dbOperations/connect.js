require('dotenv').config();
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nodeJenkins'
});

connection.connect((err) => {
    if (err) {
        console.error(err)
        return
    }
});

module.exports = connection;