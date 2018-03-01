var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/catsDB")
//add a new cat to DB
var catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String
});

var Cat = mongoose.model("Cat", catSchema); //will automatically make a collection db.Cats
// var newCat = new Cat({
//     name: "Herbie",
//     age: 1,
//     temperament: "monkey"
// });

// newCat.save(function(err, cat) {
//     if(err){
//         console.log("uh-oh")
//     } else {
//         console.log("Just saved cat to DB:");
//         console.log(cat);
//     }
//   });
// Cat.create({
//     name: "Gyoza",
//     age: 6,
//     temperament: "Fresh"
// }, function(err, cat){
//     if(err){
//         console.log("uh-oh!");
//         console.log(err);
//     } else {
//         console.log(cat);
//     }
// });

Cat.find({}, function(err, cats){
    if(err){
        console.log("uh-oh!");
        console.log(err);
    } else {
        console.log("All cats:");
        cats.forEach(function(kitty) {
            console.log( kitty.name );
        });
    }
});
//retrieve all cats from DB and log it
