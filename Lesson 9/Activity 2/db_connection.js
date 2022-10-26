// var mysql = require('mysql2');

// var conn = mysql.createConnection({
//     host: '127.0.0.1',
//     user: 'root',
//     passsword: '12345678',
//     database: 'bhos'
// });

// conn.connect((err) => {
//     if (err) throw err;
//     console.log('connected to MySQl ')
// })  


// var http = require('http');
// var fs = require('fs');
// http.createServer((req, res) => {
//     fs.readFile("demofile.html", (err, data)=>{
//         res.writeHead(200, {'Content-Type' : 'text-html'});
//         res.write(data);
//         return res.end();
//     })
// }).listen(9000);

const https = require('https');
https.get('https://jsonplaceholder.typicode.com/posts', (resp) => {
    let data = ''
    resp.on('data', (chunk) => { data += chunk });
    resp.on('end', () => console.log(JSON.parse(data)));
})

const axios = require('axios');
(async () => {
    try {
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
        console.log(res)
    }
    catch {
        console.error('Error')
    }
})();