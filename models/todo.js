var db = require('../db');

var Todo = db.model('Todo',{
	user:{type:String,required:true},
	todo:{type:String,required:true},
	date:{type:Date,required:true,default:Date.now},
	finish:{type:Boolean,required:true,default:false}
});

module.exports = Todo;
