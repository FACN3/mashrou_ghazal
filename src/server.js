var http = require('http');
var handler = require('./handler');
var port = process.env.PORT || 3002;



var server = http.createServer(handler);

server.listen(port, function () {
	console.log('Server is listening at ' + port);
});
