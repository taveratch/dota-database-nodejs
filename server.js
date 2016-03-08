var fs = require('fs');
var host = "taweesoft.xyz";
var port = 5050;
var express = require('express');

var app = express();
app.use(express.static(__dirname + "/public"));

var query = require('./query.js');

app.get("/dota_database/getalldata",function(request , response){
  var callback = function(data){
    console.log("----- Get all data -----");
    response.send(data);
  };
  query.getAllData(callback);
});

app.listen(port,host);
console.log("Server running on port " + port);
