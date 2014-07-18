var express = require('express');

var mainPort = process.env.PORT || 1337;

var app = express();	

app.use('/',express.static(__dirname));
app.use(express.bodyParser());


app.get('/run2accelerate', function (req, res){
	res.sendfile("run2accelerate/run2accelerate.html");	
});

app.get('/nxtplabs', function (req, res){
	res.sendfile("nxtplabs/nxtplab.html");	
});

app.listen(mainPort);
