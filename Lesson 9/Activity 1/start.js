// intro to Node

function multiply(x, y) {
    console.log(x * y);
}

multiply(12, 4);

// Modules in Node
// Core modules ('http', 'path', 'fs', 'os', 'util')
// Local modules 
// Third party modules


// HTTP Module

var http = require('http')
var server = http.createServer(function(req, re) {
    console.log('http server has been created!');
})
// Run the servers
// server.listen(5000);

// local modules
var myData = require('./Data.js');
var myMessageModule = require('./Message.js')
console.log(myData.firstName, myData.lastName)
console.log(myMessageModule.msg)

var myLogMudule = require('./Log.js')
myLogMudule.warning('hello');


// external module: validator
var validator = require('validator');
console.log(validator.isEmail('iss@em@.com'))
console.log(validator.isEmail('issass@ems.com'))


let fs = require('fs');

fs.readFile('notes.txt', function (err, data) {
    if (err) throw err;
    console.log(data.toString());
})


var data = "\nAnother new line for writing!";
fs.appendFileSync('notes.txt', data);

fs.appendFile('notes.txt', data, 'utf-8', function(err, daat) {
    if (err) throw err;
    console.log('data is append!')
})


// working with JSON data
var jsonData = '{"person": [{"name":"Emm", "city": "Shaki"}, {"name":"Tem", "city": "Astara"}]}'
var jsonObj = JSON.parse(jsonData);

console.log(jsonObj.person[1].city);

const jsonCont = JSON.stringify(jsonObj);
console.log(jsonCont);
fs.writeFile('output.json', jsonCont, 'utf-8', function(err) {
    if (err) {
        console.error('Error occured. Json has not been created');
    }
    console.log('JSON output file has been created')
})

// adding data to file.
const readData = fs.readFileSync('output1.json')
const myJson = JSON.parse(readData)
console.log(myJson);
myJson.person.push({'Samir': 'Baku'});
fs.writeFileSync('output1.js', JSON.stringify(myJson));


// HTTP server
/*
var http = require('http');
http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text-html'});
    res.write('<h1>simple node server</h1>')
    res.end()
}).listen(9000);
*/

// connect to mysql server
var mysql = require('mysql');
var conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root'
})
