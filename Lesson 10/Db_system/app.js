const express = require('express');
const path = require('path');
const app = express();
const mysql = require('mysql2');

const hbs = require('hbs');

app.set('view engine', 'hbs');

var conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '12345678',
    database: 'bhos'
});

app.get('/', (req, res) => {
    var sql = "SELECT * FROM car";
    conn.query(sql, (err, data) => {
        if (err) throw err;
        data = JSON.parse(data);
        res.render('index', { data: data });
    });
});
