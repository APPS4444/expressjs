var express = require('express')
var app = express()
app.set('view engine', 'ejs');
app.get('/', function(req,res){

 res.sendFile(__dirname + '/index1.html');
});
app.get('/', function(req,res){
    res.send('Contact page is called');
});
app.get('/profile/:name', function(req,res){
    res.send('hello apps' + req.params.name);
});
app.listen(3000);
