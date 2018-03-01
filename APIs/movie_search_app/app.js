var express = require("express");
var app = express();
var request = require("request");
var searchString = "";

app.set("view engine", "ejs");

app.get("/results", function(req, res){
    request("http://omdbapi.com/?apikey=c1ea26d0&s=" + req.query.searchString, function(error, response, body){
        var data = JSON.parse(body);
            res.render("results", {data: data} );
    });
});

app.get("/", function(req, res){
    res.render("search");
    
});

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Movie App started!");
});