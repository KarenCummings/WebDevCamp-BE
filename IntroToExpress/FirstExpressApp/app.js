
var express = require('express');
var app = express();

app.get("/", function( req, res ) {
    res.send("Hi there!");
});


app.get("/bye", function( req, res ) {
     res.send("Goodbye!");
 });
 
app.get("/dog", function( req, res ) {
     res.send("Meow!");
 });
 
app.get("*", function( req, res ) { // position dependen! Order of routes matters!
    res.send('You are a star!');
});
 
app.listen(process.env.PORT, process.env.IP, function() {
     console.log('Server has started');
 }); //because of Cloud9 - otherwise you could hardcode port
 