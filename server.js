var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({extended:false}));

app.use(bodyParser.json());

app.get('/api/todos',function(req,res){
	res.json([{
		username:'suthaw',
		body:'node rocks'	
	}]);
});

app.post('/api/todos',function(req,res){
	console.log('post received');
	console.log(req.body.username);
	console.log(req.body.todo);
	res.sendStatus(201);
});

app.listen(3000,function(){
	console.log('Server listening on', 3000);
});
