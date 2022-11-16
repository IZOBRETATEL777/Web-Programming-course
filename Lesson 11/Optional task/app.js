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
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "12345678",
    database: "usa"
});

conn.connect((err) => {
    if (err) throw err;
})


var message = "";

var obj = {};  //empty object, to pull DB query results
app.get('/', (req, res) => {
    // if(err) throw err;
    conn.query("SELECT * FROM states", function (err, result) {
        if (err) throw err;
        else {
            conn.query("SELECT * FROM states", function (err, result) {
                if (err) throw err;
                else {
                    searchres = result;
                    error = searchres.length > 0 ? false : true;
                    res.render('search', { searchres, error });
                }
            });
        }
    })
});

app.post('/', (req, res) => {
    console.log(req.body);
    if (req.body.del != undefined) {
        conn.query("DELETE FROM states WHERE id = ?", [req.body.id], function (err, result) {
            if (err) throw err;
            conn.query("SELECT * FROM states", function (err, result) {
                if (err) throw err;
                else {
                    res.redirect('/');
                }
    
            });
        })
    }
    else if (req.body.edit != undefined) {
        conn.query("UPDATE states SET name = ?, join_year = ?, population = ? WHERE id = ?", [req.body.name, req.body.join_year, req.body.population, req.body.id], function (err, result) {
            if (err) throw err;
            else {
                res.redirect('/');
            }
        });
    }
    else {
        var keyword = req.body.search;
        var item = req.body.item;
        var sql = "SELECT * FROM states WHERE " + item + " LIKE '%" + keyword + "%'";
        conn.query(sql, function (err, result) {
            if (err) throw err;
            else {
                searchres = result;
                error = searchres.length > 0 ? false : true;
                res.render('search', { searchres, error });
            }

        })
    }
});


app.listen(3000);
console.log('Running!');

