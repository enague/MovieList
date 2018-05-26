var express = require('express');
var bodyParser = require('body-parser');
var app= express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended': false}))
//helper function to get Movies from API
var getMovies = function (movieName) {
  
}

app.use(express.static('compiled'))


app.post('/movies', function(req, res) {
  var movieName = req.body.value
  //use a helper function to get data from movie API
    //res.send() the data
  getMovies(movieName)
  res.send(console.log(req.body.value))
})

app.get('/movies', function(req,res) {
  
})

app.listen(3000, () => console.log('MovieList Server listening at 3000'))


//install nodemon
//run nodemon basic-server.js