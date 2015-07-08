var express = require('express');
var bodyParser = require('body-parser');
var Todo = require('./models/todo');
var app = express();

app.use(bodyParser.urlencoded({extended:false}));

app.use(bodyParser.json());

app.get('/',function(req,res,netxt){
	res.sendfile('layouts/todo.html');
});

app.get('/api/todos',function(req,res,next){
	Todo
	.find()
	.sort('-date')
	.exec(function(err,todos){
		if(err) return next(err);
		res.status(200).json(todos);
	});
	
});
app.post('/api/todos',function(req,res,next){

	var todo = new Todo({
		user:req.body.user,
		todo:req.body.todoBody
	});

	todo.save(function(err,todo){
		if(err) return next(err);
		res.status(201).json(todo);
	});
});

app.put('/api/todos',function(req,res,next){
	Todo.findById(req.body.id,function(err,todo){
		if(err) return next(err);
		todo.finish = true;
		todo.save();
		res.status(200).json(todo);
	});
});

app.listen(3000,function(){
	console.log('Server listening on', 3000);
});
