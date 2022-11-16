const https = require('https');
const fs = require('fs');
const http = require('http');


const url = 'https://jsonplaceholder.typicode.com/users';


https.get(url, (res) => {
    let data = '';
    res.on('data', (chunk) => {
        data += chunk;
    });

    res.on('end', () => {
        fs.writeFile('users.json', data, (err) => {
            if (err) {
                console.log(err);
            }
            console.log('File saved');
            fs.readFile('users.json', 'utf8', (err, data) => {
                if (err) {
                    console.log(err);
                }
                http.createServer((req, res) => {
                    fs.readFile('users.json', (err, data) => {
                        res.writeHead(200, { 'Content-Type': 'text/html' });
                        data = JSON.parse(data);
                        let table = '<table border="1"> <tr> <th>id</th> <th>name</th> <th>username</th> </tr>';
                        for (let i = 0; i < data.length; i++) {
                            table += '<tr>';
                            table += '<td>' + data[i].id + '</td>';
                            table += '<td>' + data[i].name + '</td>';
                            table += '<td>' + data[i].username + '</td>';
                            table += '</tr>';
                        }
                        res.write(table);
                        return res.end();
                    });
                }
                ).listen(8081);  
            });
            
        });
    });
}
).on('error', (err) => {
    console.log('Error: ' + err.message);
});
