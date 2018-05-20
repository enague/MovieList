var http = require('http');
var fs = require('fs');


var port = 3000;
var ip= '127.0.0.1';


var server = http.createServer()


console.log('Listening on http://' + ip + ':' + port);
server.listen(port,ip, () => {
	console.log(`Server running at http://${ip}:${port}`);
});

//install nodemon
//run nodemon basic-server.js