var http = require('http');
//var React = require('react');
//var app = require('./compiled/components/App.js');
var fs = require('fs');


var hostname = '127.0.0.1';
var port = 3000;


var setup = {
	'/': function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(fs.readFileSync('./index.html'));
    res.end();
  },

  '/styles/styles.css': function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/css'});
    res.write(fs.readFileSync('./styles/styles.css'));
    res.end();
  },

  '/lib/react/react-with-addons.js': function(req,res) {
  	res.writeHead(200, {'Content-Type': 'application/json'});
  	res.write(fs.readFileSync('./lib/react/react-with-addons.js'));
  	res.end();
  },
  	'/lib/react/react-dom.js': function(req,res) {
  	res.writeHead(200, {'Content-Type': 'application/json'});
  	res.write(fs.readFileSync('./lib/react/react-dom.js'));
  	res.end();
  },
  	'/film.png': function(req,res) {
  	res.writeHead(200, {'Content-Type': 'text/html'});
  	res.write(fs.readFileSync('./film.png'));
  	res.end();
  },
  	'/compiled/components/Search.js': function(req,res) {
  	res.writeHead(200, {'Content-Type': 'application/json'});
  	res.write(fs.readFileSync('./compiled/components/Search.js'));
  	res.end();
  },
  '/compiled/components/Info.js': function(req,res) {
  	res.writeHead(200, {'Content-Type': 'application/json'});
  	res.write(fs.readFileSync('./compiled/components/Info.js'));
  	res.end();
  },
  	'/compiled/components/Add.js': function(req,res) {
  	res.writeHead(200, {'Content-Type': 'application/json'});
  	res.write(fs.readFileSync('./compiled/components/Add.js'));
  	res.end();
  },
  	'/compiled/components/MovieListEntry.js': function(req,res) {
  	res.writeHead(200, {'Content-Type': 'application/json'});
  	res.write(fs.readFileSync('./compiled/components/MovieListEntry.js'));
  	res.end();
  },
  	'/compiled/components/MovieList.js': function(req,res) {
  	res.writeHead(200, {'Content-Type': 'application/json'});
  	res.write(fs.readFileSync('./compiled/components/MovieList.js'));
  	res.end();
  },
  '/compiled/components/App.js': function(req,res) {
  	res.writeHead(200, {'Content-Type': 'application/json'});
  	res.write(fs.readFileSync('./compiled/components/App.js'));
  	res.end();
  },
  '/compiled/index.js': function(req,res) {
  	res.writeHead(200, {'Content-Type': 'application/json'});
  	res.write(fs.readFileSync('./compiled/index.js'));
  	res.end();
  }
}

var server = http.createServer((req,res) => {
	console.log('request method is '+ req.method+ ' and ' + ' request url is '+ req.url);
	if (setup[req.url]) {
    setup[req.url](req, res);
  } else {
  	res.writeHead(404)
  	res.end()
  }
  
});

 // 	console.log(req.method)
 // 	console.log(req.url)
	// res.statusCode = 200;
	// res.setHeader('Content-Type', 'text/plain');
	// res.end('Hello World!\n')
console.log('Listening on http://' + hostname + ':' + port);
server.listen(port,hostname, () => {
	console.log(`Server running at http://${hostname}:${port}`);
});

//install nodemon
//run nodemon basic-server.js