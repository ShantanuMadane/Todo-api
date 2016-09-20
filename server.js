var express=require('express');
var bodyParser=require('body-parser');
var app=express();
var PORT=process.env.PORT || 5000;
// var todos=[{
// 	id:1,
// 	description:"Meet friends at 7pm",
// 	completed:false
// },{ id:2,
// 	description:"Rave All Night",
// 	completed:false
// },
// {   id:3,
// 	description:"Work at Office",
// 	completed:true
// }
// ];
var todos=[];
var todoNextId=1;
app.use(bodyParser.json());

app.get('/',function(req,res){
res.send(" TODO API ROOT");
});
//GET todos
app.get('/todos',function(req,res){
 res.json(todos); 
});
//GET todos/:id
app.get('/todos/:id',function(req,res){

var id=parseInt(req.params.id,10);
var matchedelement;
for(var i=0;i<todos.length;i++){
	if(id===todos[i].id){
        matchedelement=todos[i];
	}
}
if(matchedelement){
res.json(matchedelement);
}
else{
res.status(404).send();
}
});
// POST TODOS
app.post('/todos',function(req,res){
	var body=req.body;
	console.log('description:'+body.description);
	//Push
	body.id=todoNextId;
	todoNextId++;
	todos.push(body);

	res.json(body);

});

app.listen(PORT,function(req,res){
console.log("APP LISTENING ON PORT:"+PORT);
});
