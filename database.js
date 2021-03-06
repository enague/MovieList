var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'movie_data'
});


connection.connect();


function addMovies(movieArray, callback) {
  //use insert as q
  var q = 'INSERT INTO movie_list (Title, Year,Description,Rating) VALUES (?,?,?,?)'
  for(var i = 0; i < movieArray.length; i++) {
  	connection.query(q, [movieArray[i].title, movieArray[i].release_date, movieArray[i].overview, movieArray[i].popularity], (error, results) => {
  		if (error) {
        console.log('enters error in query', error)
  			callback(error, null);
  		} else {
  			callback(null, results);
  		}
  	})
  }
  
}

function getMoviesFromDB(searchedMovie, callback) {
	//use select as q 
  var q = `SELECT * FROM movie_list WHERE Title LIKE '${searchedMovie}%'`;
  connection.query(q, (error, results, fields) => {
    console.log(results)
    if (error) {
      console.log(error);
      callback(error, null);
    } else {
      callback(null, results);
    }
  })
}


module.exports.addMovies = addMovies;
module.exports.getMoviesFromDB= getMoviesFromDB;