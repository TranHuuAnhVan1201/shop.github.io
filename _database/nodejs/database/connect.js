const mysql = require('mysql')

var db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database : 'database_tgdd',
    port: '8080'
});
//connect
db.connect((err) => {
    if (err) {
        throw err
    }
});
module.exports = db;