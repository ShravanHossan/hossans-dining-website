const express = require('express');
const port = process.env.PORT || 8080;
const hbs = require('hbs');
const http = require('http');
const https = require('https');
var app = express();
app.use(express.static('public'));
app.set('view engine', 'hbs');
app.get('/', (res,req) => {
    res.render("index.hbs")
});
const httpServer = http.createServer(app);
const httpsServer = https.createServer(app);
httpServer.listen(port, () => {
    console.log('HTTP Server running on port 8080');
});