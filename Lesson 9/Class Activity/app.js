const https = require('https');
const fs = require('fs');


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
                console.log(data);
            });
        });
    });
}
).on('error', (err) => {
    console.log('Error: ' + err.message);
});
