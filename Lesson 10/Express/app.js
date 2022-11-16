const express = require('express');
const path = require('path');
const app = express();

const hbs = require('hbs');

app.set('view engine', 'hbs');
const partialsPath = path.join(__dirname, './views/partials');
hbs.registerPartials(partialsPath);


// routes in express
// app.get('', (req, res) => {
//     res.send('Hello express!');
// });

// app.get('/about', (req, res) => {
//     res.send('About page');
// });




// app.get('/help', (req, res) => {
//     res.send([{name:'Andrew'}, {name:'Sarah'}]);
// });



console.log(__dirname);
console.log(__filename);

const publicDir = path.join(__dirname, './public');
console.log(publicDir);
// app.use(express.static(publicDir));


app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'Andrew Mead'
    });
});

// 404 page
app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Andrew Mead',
        errorMessage: 'Page not found.'
    });
});

app.listen(3000, () => {
    console.log('Server is up on port 3000.');
});