var express = require('express')
var ejs = require('ejs')

var app = express();

app.listen(8081)

//localhost:8080
app.get('/', function(req, res){

    res.send("Day la Do An NodeJS Cua Team Dut");


});