/**
* @requires express
* @requires createServer
*/
var express = require('express');
var path =require('path');
var app = express();
var http = require('http');
var server = http.createServer(app);
var bodyParser = require('body-parser');
var port = 8585;

server.listen(port,function(){
	console.log('listen %d',port);
});

/**
*@memberof express
*/
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname,'dist')));

app.get('/',function(req,res){
	res.sendfile(__dirname + '/index.html');
});

/**
* @param {object} req
* @param {object} res
*/
app.post('/values',function(req,res){
	/** @var {object} obj*/
	var obj ={};
	console.log('body'+JSON.stringify(req.body));
	/**@return {object} return JSON object*/
	res.send(req.body);

});

app.listen(8484);