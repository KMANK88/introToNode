var express = require('express');
var bodyParser = require('body-parser');
var app = express();
//creating your own modual you have to be path specific
var makeDate = require('./dateMaker');
console.log(makeDate(10));
var port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/instagrams',function(req,res){
  res.send("Get Shwifty!");
});

app.post('/instagrams',function(req,res){
  res.send("From port");
})

var server = app.listen(port,function(){
  console.log("Running on port 3000");
});
