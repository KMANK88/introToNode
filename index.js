var express = require('express');
var app = express ();

app.get('/greeting',function(req,res){
  res.send("hello")
})
// :name --> means it is a req parameter
app.get('/greeting/:name', function(req,res){
  var yourName = req.params.name;
  res.send("Nice to meet your " + yourName);
});
//define a response that can send back your favorite color

app.get('/color/:color', function(req, res) {
  var favColor = req.params.color;
  res.send("Your favorite color is " + favColor);
});

//Changing report
app.get("/saluatations" ,function(req, res){
  res.send("hello");
})

app.listen(3000, function(){
  console.log('Listening on port 3000');
});
