var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'student',
  password: 'student',
  database: 'movies'
});


connection.connect();

var saveToDatabase = function(movieResults) {
  //save to database
  
}


module.exports.saveToDatabase = 