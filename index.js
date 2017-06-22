var express = require('express');
var app = express ();

app.get('/walmart.com',function(req,res){
  res.send("Razer Keyboard $50.00 A 50% off sale!")
})

app.get("/saluatations" ,function(req, res){
  res.send("OMG WTF BBQ")
})

app.listen(1800, function(){
  console.log('Listening on port 3000');
});
