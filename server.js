const express = require('express');
const port = process.env.PORT || 8080;
const hbs = require('hbs');

var app = express();
hbs.registerPartials(__dirname + '/views/partials/');
app.use(express.static(__dirname, + '/public/'));
app.use(express.static('public'));
app.set('view engine', 'hbs');
app.get('/', (req,res) => {
    res.render("index.hbs");
});

app.listen(port, () => {
    console.log("Server is up on port 8080");
});