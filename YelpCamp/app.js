var express = require("express"),
 app        = express(),
 bodyParser = require("body-parser"),
 mongoose   = require("mongoose")
 ;

mongoose.connect("mongodb://localhost/yelp-camp");
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
 
//SCHEMA setup
var campgroundSchema = new mongoose.Schema({
    name: String,
    image: String
});
var Campground = mongoose.model("Campground", campgroundSchema);
// Campground.create(
//     {
//         name: "Hermit Island", 
//         image: "https://i2.wp.com/biofriendlyplanet.com/wp-content/uploads/2016/04/Campsite-overlooking-lake-e1460563393213.jpg?fit=560%2C372"
//     }, function(err, campground){
//         if(err){
//             console.log(err);
//         } else {
//             console.log("Created campground: ");
//             console.log(campground);
//         }
//     });
// var campgrounds =[
//       {
//           name: "Salmon Creek", 
//           image: "https://i2.wp.com/biofriendlyplanet.com/wp-content/uploads/2016/04/Campsite-overlooking-lake-e1460563393213.jpg?fit=560%2C372"
          
//       },
//       {name: "Granite Hill", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSpILr76eRQ8cpeqTE0e7dmb3e_OwA_fCkz6XOvMGTCV2wgflU"},
//       {name: "Hermit Island", image: "https://i2.wp.com/biofriendlyplanet.com/wp-content/uploads/2016/04/Campsite-overlooking-lake-e1460563393213.jpg?fit=560%2C372"}
//     ];
    

app.get("/", function(req, res) {
    res.render('landing');
});

app.get("/campgrounds", function(req, res){
//   get all campgrounds from DB
    Campground.find({}, function(err, allCampgrounds){
     if(err){
         console.log(err);
     } else {
        res.render("campgrounds", {campgrounds:allCampgrounds});
     }
    });
});

app.post("/campgrounds", function(req, res){
    // get data from form and add to campgrounds array, redirect to campgrounds page
    // res.send("post");
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = {name: name, image: image};
    // create new campground and save to DB
    // campgrounds.push(newCampground);
    Campground.create(newCampground, function(err, newlyCreated) {
        if(err){
            console.log(err);
        } else {
            res.redirect("/campgrounds");
        }
    });
  
});

app.get("/campgrounds/new", function(req, res) {
    res.render("new.ejs");
})

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("YelpCamp server started");
});
