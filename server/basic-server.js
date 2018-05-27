var express = require('express');
var bodyParser = require('body-parser');
var promise = require('promise');
var app= express();
var config= require('../config.js')
var request = require('request')
var db = require('../database.js')

//SERVER SETUP
app.use(express.static('compiled'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended': false}))


//helper function to get Movies from API
var getMovies = function (movieName) {
  var options ={
    url:`https://api.themoviedb.org/3/search/movie?api_key=${config.TOKEN}&language=en-US&query=${movieName}&page=1&include_adult=false`,
    headers: {
      'User-Agent': 'request',
    }
  }
  
  return new Promise(function(resolve, reject) {
    request(options, function(err, res) {
      if (err) reject (err);
      else resolve (res);
    })
  })
}




app.post('/movies', function(req, res) {
  var movieName = req.body.value;

  getMovies(movieName)
  .then((data) => {
    var movieResults=JSON.parse(data.body).results
    db.addMovies(movieResults, (err,data) => {
      if(err) {
        res.status(500).send();
      } else {
        res.status(201).send();
      }
    })
  })
  .catch((error) => {
    console.log('err in catch for post', error)
  })
})

//GET movies from db
app.get('/movies', function(req,res) {
  
})




app.listen(3000, () => console.log('MovieList Server listening at 3000'))


//install nodemon
//run nodemon basic-server.js