var http = require('http');
var port = process.env.PORT || 3002;
var router=require('./router.js');
var server = http.createServer(router);
server.listen(port, function () {
	console.log('Server is listening at ' + port);
});
