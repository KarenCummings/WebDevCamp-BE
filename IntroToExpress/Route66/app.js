var express = require( 'express');
var app = express();
var speakParams = {'pig': "The pig says 'Oink'", 'cow': "The cow says 'Moo'", 'dog': "The dog says 'Woof Woof!'"};

app.get('/', function( req, res ) {
    res.send('Hi there, welcome to my assignment!');
});

app.get('/speak/:animal', function ( req, res ) {
    var animal = req.params.animal;

    if (speakParams[animal]) {
        res.send( speakParams[animal]);
    }
});

app.get('/repeat/:word/:times', function ( req, res ) {
    var repWord = req.params.word;
    var repTimes = parseInt( req.params.times, 10);
    var outString ='';
    for (var i = 0; i < repTimes; i++) {
        outString += ' ' + repWord;
    }
    res.send( outString );
});
app.get('*', function( req, res ) {
    res.send('Sorry, page not found...What are you doing with your life?');
});

app.listen(process.env.PORT, process.env.IP, function() {
     console.log('Server started');
 }); //because of Cloud9 - otherwise you could hardcode port
 