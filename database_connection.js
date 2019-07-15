var mysql = require('mysql');

var connnection = mysql.createConnection({
    host: 'localhost',
    user: 'khoivu',
    password: 'Khoi1802@',
    database: 'mydb',
});

connnection.connect(function (err) {
    if (err) throw err;
    console.log("connected!");
    var sql = "SELECT * FROM customers"
    connnection.query(sql, function (err, result) {
        if (err) throw err;
        console.log(result);
    });
});