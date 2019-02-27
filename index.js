//setup
var express = require('express');
var app = express(); //store express in app variable
var request = require('request');
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/client'));
app.set("view engine","ejs");

//routes
app.get("/",function(req,res){
   res.render("landing", {
      pageName:'home'
   });
});

app.get("/about",function(req,res){
   res.render("about", {
      pageName: 'about'
   });
   
});

app.get("/menu",function(req,res){
   res.render("menu", {
   pageName: 'menu'
   });
});

app.get("/gallery",function(req,res){
   res.render("gallery",{
   pageName: 'gallery'
   });
});

app.get("/contact",function(req,res){
   res.render("contact",{
      pageName:'contact'
   });
});


//listen to requests
app.listen(process.env.PORT, process.env.IP, function(){
    console.log('server has started...');
});