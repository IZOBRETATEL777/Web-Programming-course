// TASK : Validation of FORM fields, before posting into MySQL database.
// Basic validation, using Express Validator

var express = require('express');
var app = express();
var path = require('path');
var mysql = require('mysql2');
var bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
// Using Express Validator
const { body, validationResult } = require('express-validator');

// to serve static files
app.use('/public', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

var conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "12345678",
    database: "node_form"
});

conn.connect((err) => {
    if (err) throw err;
})

var message = ""; //to display successs message after posting to DB
var valid = "";

// READING DB: -------------------------------------------------------------
var obj = {};  //empty object, to pull DB query results
app.get('/', (req, res) => {
        //if(err) throw err;
        conn.query("SELECT * FROM form", function(err, result){
            if (err) throw err;
            else{
                res.render('index', {obj: result});
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
    // simple validation without custom message!
    // body('name').isLength({min: 3}),
    // body('email').isEmail(),
    // body('username').isLength({ min: 5}),
    // validation with custom message!
    body('name').isLength({min: 3}).withMessage('Name should have minimum 3 chars'),
    body('email').isEmail().withMessage('Dont have email standard!'),
    body('username').isLength({ min: 5}).withMessage('Username should have minimum 5 chars'),
    (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            // return res.status(400).json({ errors: errors.array() });
            // console.log(errors.array());
            // send error messages to page as json 
            return res.status(422).json({ errors: errors.array() });
            // render error messages to template page
            res.render('submit', { valid: errors.array(), message: message });           
        }else{
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