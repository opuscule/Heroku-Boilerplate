var express = require('express');
var app = express();
 
var hbs = require('hbs');
 
app.use(express.static('public'));
app.set('view engine', 'html');
app.engine('html', hbs.__express);
 
app.get('/', function(req, res) {
    res.render('index');
});
 
app.get('/about', function(req, res) {
    res.render('about', {title:"About Me"});
});
 
app.get('/article', function(req, res) {
    res.render('article');
});
 
app.listen(3000);