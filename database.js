var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'movies'
});


connection.connect();


function addMovie(movieArray, callback) {
  //use insert as q
  var q = 'INSERT INTO movie_data (Title, Year,Description,Rating) VALUES (?,?,?,?)'
  for(var i = 0; i < movieArray.length; i++) {
  	connection.query(q, [movieArray[i].title, movieArray[i].release_date, movieArray[i].overview, movieArray[i].popularity], (error, results) => {
  		if (error) {
  			callback(error, null);
  		} else {
  			callback(null, results);
  		}
  	})
  }
  
}

function getMoviesFromDB(callback) {
	//use select as q 
}


module.exports.addMovie = addMovie;
module.exports.getMoviesFromDB= getMoviesFromDB;