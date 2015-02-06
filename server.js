var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var port = 9001;

app.listen(port);

var messages = [];

app.use(bodyParser.json());

app.use(function(req, res, next){
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST');
	res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	next();
})

app.get('/', function(req, res){
	res.send(JSON.stringify(messages));
});

app.post('/', function(req, res){
	req.body.createdAt = new Date();
	messages.push(req.body);
	res.send(JSON.stringify(messages));
});































// var express = require('express');
// var bodyParser = require('body-parser')
// var app = express();

// var port = 9001;

// var messages = [];

// app.use(bodyParser());

// app.use(function(req, res, next){
	// res.setHeader('Access-Control-Allow-Origin', '*');
	// res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST');
	// res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	// next();
// })

// app.get('/', function(req, res){
// 	res.type('application/json');
// 	res.setHeader('Access-Control-Allow-Origin', '*');
// 	res.send(JSON.stringify(messages));
// })

// app.post('/', function(req, res){
// 	req.body.createdAt = new Date();
// 	messages.push(req.body);
// 	res.status(200).end();
// })

// app.options('/', function(req, res) {
// 	res.send();
// })

// app.listen(port, function(){
// 	console.log('Now listening on port: ' + port);
// });



// var http = require('http');


// http.createServer(function(req, res){
// 	console.log(req.method);

// 	if(req.method === 'GET'){
// 		res.writeHead(200, {
// 			'Connection':'close',
// 			'Content-type': 'application/json',
// 			'Access-Control-Allow-Origin': '*'
// 		});
// 		res.end(JSON.stringify(messages));
// 	} else if(req.method === 'POST'){
// 		var postData = '';
// 		req.on('data', function(chunk){
// 			postData += chunk;
// 		});
// 		req.on('end', function(){
// 			postData = JSON.parse(postData);
// 			postData.createdAt = new Date();
// 			messages.push(postData);
// 			res.writeHead(200, {
// 				'Connection':'close',
// 				'Content-type': 'application/json',
// 				'Access-Control-Allow-Origin': '*'
// 			});
// 			res.end(JSON.stringify(postData));
// 		})
// 	} else if(req.method === 'OPTIONS'){
// 			res.writeHead(200, {
// 				'Connection':'close',
// 				'Content-type': 'application/json',
// 				'Access-Control-Allow-Origin': '*',
// 				'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
// 				'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
// 			});
// 			res.end();		
// 	}

// }).listen(port);