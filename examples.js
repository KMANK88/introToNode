var express = require('express');
var bodyParser = require('body-parser');
var app = express ();
var port = 3000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
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

app.post('/products', function(req,res){
// req.body is all the info coming in from the form
  var name = req.body.name ;
  var color = req.body.color;
  var price = req.body.price;
  var product = {name: name, color: color, price: price};
  res.json(product);
});

app.post('/animals4Sale', function(req,res){
  var type = req.body.type;
  var color = req.body.color;
  var price = req.body.price;
  var product = {type: type, color: color, price: price};
  res.json(product);
})

app.post('/People', function(req,res){
  var name = req.body.name;
  var alive = true;
  var person= {name: name, alive : alive};
  res.json(person);
});


app.listen(port,
   function(){
  console.log('Listening on port', port);
});
