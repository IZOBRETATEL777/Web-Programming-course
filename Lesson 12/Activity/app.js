var express = require('express');
var app = express();
var path = require('path');
var mysql = require('mysql2');
var bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const { body, validationResult } = require('express-validator');

app.use('/public', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

var conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "12345678",
    database: "node_form2"
});

conn.connect((err) => {
    if (err) throw err;
})

var message = "";
var valid = "";

var obj = {};


app.get('/submit', (req, res) => {
    res.render('submit', { message: message, valid: valid });
})

app.post('/submit',
    body('name').isLength({ min: 3, max: 15 }).withMessage('Name should have minimum 3 chars, maximum 15 chars'),
    body('surname').isLength({ min: 3, max: 15 }).withMessage('Surname should have minimum 3 chars, maximum 15 chars'),
    body('age').isInt.withMessage('Age should be a number'),
    body('password').matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/, "i").withMessage('Password should contain at least 1 digit, 1 uppercase, min 8 chars'),
    body('password2').equals('password').withMessage('Passwords do not match'),

    (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.render('submit', { valid: errors.array(), message: message });
        } else {
            let successMessage = "Record successfullly submitted to database!";
            // encrypt password
            bcrypt.hash(req.body.password, 10, function (err, hash) {
                if (err) throw err;
                let sql = `INSERT INTO form (name, surname, age, password) VALUES (?, ?, ?, ?)`;
                conn.query(sql, [req.body.name, req.body.surname, req.body.age, hash], function (err, result) {
                    if (err) throw err;
                    console.log("one record has been inserted!");
                    res.render('submit', { message: successMessage, valid: valid });
                });
            });
        }

    });

app.get('/login', (req, res) => {
    res.render('login', { message: message, valid: valid });
})

app.post('/login', (req, res) => {
    let sql = `SELECT * FROM form WHERE name = ?`;
    conn.query(sql, [req.body.name], function (err, result) {
        if (err) throw err;
        if (result.length > 0) {
            bcrypt.compare(req.body.password, result[0].password, function (err, response) {
                if (response) {
                    res.render('index', { user: result[0] });
                } else {
                    res.render('login', { message: "Wrong password" });
                }
            });
        } else {
            res.render('login', { message: "User not found" });
        }
    });
});


app.listen(3000);
console.log("running server!");