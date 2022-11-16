var mysql = require('mysql2');
var http = require('http');
var fs = require('fs');

var conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '12345678',
    database: 'bhos'
});

conn.connect((err) => {
    if (err) throw err;
    console.log('connected to MySQl ')
    var sql = "SELECT * FROM car";
    conn.query(sql, (err, data) => {
        if (err) throw err;
        console.log(data);
        fs.writeFile('cars.json', JSON.stringify(data), (err) => {
            if (err) throw err;
            console.log('Data written to file');
        });

        http.createServer((req, res) => {
            fs.readFile('cars.json', (err, data) => {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                data = JSON.parse(data);
                let table = '<table border="1"> <tr> <th>id</th> <th>brand</th> <th>model</th> </tr>';
                for (let i = 0; i < data.length; i++) {
                    table += '<tr>';
                    table += '<td>' + data[i].carId + '</td>';
                    table += '<td>' + data[i].brand + '</td>';
                    table += '<td>' + data[i].model + '</td>';
                    table += '</tr>';
                }
                res.write(table);
                return res.end();
            });
        }
        ).listen(8081);    
    });
});      
