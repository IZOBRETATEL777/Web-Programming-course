// TASK : Validation, Sanitization of FORM fields, before posting into MySQL database.
// Multi criterias Validation. Sample :
// .matches('[0-9]').withMessage('Password Must Contain a Number')
// .matches('[A-Z]').withMessage('Password Must Contain an Uppercase Letter')
// In this project, we use 3 sanitization methods:
// trim() trims characters from input. By default (with no parameters) this method trims whitespace.
// escape() will replace certain characters (i.e. <, >, /, &, ', ") with the corresponding HTML entity.
// normalizeEmail() ensures the email address is in a safe and standard format.

var express = require('express');
var app = express();
var path = require('path');
var mysql = require('mysql');
var bodyParser = require('body-parser');

const { body, validationResult } = require('express-validator');

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: false}));

app.use('/public', express.static(__dirname + '/public'));

var conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "nodeform"
});

conn.connect((err) => {
    if (err) throw err;
})

var message = ""; //to display success message after posting to DB
var valid = "";

// READING DB: -------------------------------------------------------------
var obj = {};  //empty object, to pull DB query results
app.get('/', (req, res) => {
        //if(err) throw err;
        conn.query("SELECT * FROM form", function(err, result){
            if (err) throw err;
            else{
                obj = result;
                res.render('index', {obj});
            }
        })
});


// READING FORM: ------------------------------------------------------------
app.get('/submit', (req, res) => {
    //res.sendFile(path.join(__dirname + '/index.html'));
    res.render('submit', { message: message, valid: valid });
})

// POSTING TO DB: -----------------------------------------------------------
app.post('/submit', 
    // simple validation without custom messages
    body('name').trim().escape().isLength({min: 3}).withMessage('Name should be minimum 3 characters!'),
    body('email').isEmail().withMessage('Dont have proper email standard!'),
    body('username').trim().escape().isLength({min: 5}).withMessage('Name should be minimum 5 characters!')
        .matches('[0-9]').withMessage('Username must containt a numbers!'),
    (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()){
            // return res.status(400).json({errors: errors.array()});
            res.render('submit', { valid: errors.array(), message: message });
        } else {
            // create a string to send/render in submit.ejs file!
            let successMessage = "Record successfullly submitted to database!";
            let sql = `INSERT INTO form (name, email, username) VALUES (?, ?, ?)`;
            conn.query(sql, [req.body.name, req.body.email, req.body.username], function(err, result){
                if(err) throw err;
                console.log("one record has been inserted!");       
                res.render('submit', { message: successMessage, valid: valid });
            });
        }
});

app.listen(3000);
console.log("running server!");