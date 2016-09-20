var express=require('express');
var app=express();
var PORT=process.evn.PORT || 5000;

app.get('/',function(req,res){
res.send(" TODO API ROOT");
});
app.listen(PORT,function(req,res){
console.log("APP LISTENING ON PORT:"+PORT);
});