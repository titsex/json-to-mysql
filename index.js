const mysql = require('mysql2');
const fs = require('fs');


var connect = mysql.createConnection({ host: "", user: "", database: "", password: "" });
var jsonfile = JSON.parse(fs.readFileSync(`path`, "utf-8"))


connect.connect();
console.log(`The connection completed successfully.`)


jsonfile.forEach(item => {
    var sql = `INSERT table(column) VALUES(values)`;

    connect.execute(sql, function(err) {
        console.log(err)
    })
});