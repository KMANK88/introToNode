var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var port = 2000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/instagrams',function(req,res){
  res.send("Get Shwifty!");
});

app.post('/instagrams',function(req,res){
  res.send("Take off your pants and your pannies");
})

var server = app.listen(port,function(){
  console.log("Running on port 2000");
});
