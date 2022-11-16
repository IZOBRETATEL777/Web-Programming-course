// TASK : To insert FORM data into MySQL database.
var express = require('express');
var app = express();
var path = require('path');
var mysql = require('mysql2');
var bodyParser = require('body-parser');

/* use bodyParser.urlencoded middleware to parse body data from url.
   A new body object containing the parsed data is populated on 
   the request object after the middleware (i.e. req.body). 
   This object will contain key-value pairs, where the value can be 
   a string or array (when extended is false), or any type (when extended is true).
*/
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: false}));

var conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "12345678",
    database: "node_form"
});

conn.connect((err) => {
    if (err) throw err;
})


var message = "";

var obj = {};  //empty object, to pull DB query results
app.get('/', (req, res) => {
        // if(err) throw err;
        conn.query("SELECT * FROM form", function(err, result){
            if (err) throw err;
            else{
                obj = result;
                res.render('index', {obj});
            }
        })
});

app.get('/submit', (req, res) => {
    //res.sendFile(path.join(__dirname + '/index.html'));
    res.render('submit', { message: message });
})

app.post('/submit', (req, res) => {
    let name = req.body.name;
    let email = req.body.email;
    let username = req.body.username;
    // create a string to send/render in submit.ejs file!
    let successMessage = "Record successfullly submitted to database!";
    let sql = `INSERT INTO form (name, email, username) VALUES (?, ?, ?)`;
    conn.query(sql, [name, email, username], function(err, result){
        if(err) throw err;
        console.log("one record has been inserted!");       
        res.render('submit', { message: successMessage });
    });
});


app.listen(3000);
console.log('Running!');

