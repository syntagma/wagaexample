var express = require('express');

var mainPort = process.env.PORT || 1337;

var app = express();	

app.use('/',express.static(__dirname));

app.get('/run2accelerate', function (req, res){
	res.sendfile("run2accelerate/run2accelerate.html");	
});

app.get('/run2accelerate-prod', function (req, res){
	res.sendfile("run2accelerate-prod/run2accelerate.html");	
});


app.get('/nxtplabs', function (req, res){
	res.sendfile("nxtplabs/nxtplab.html");	
});

app.get('/nxtplabs-stage', function (req, res){
    res.sendfile("nxtplabs-stage/nxtplab.html");
});

app.get('/argentinacorre', function (req, res){
    res.sendfile("argentinacorre/argentinacorre.html");
});

app.listen(mainPort);
