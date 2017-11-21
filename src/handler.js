var fs = require('fs');


function handler(request, response){
  var url = request.url;
  if(url === '/') {
    console.log('path', __dirname + '/../public/index.html');
    fs.readFile(__dirname + '/../public/index.html', (err, data) => {
      if (err){
        response.writeHead(500, {'Content-Type':'text/html'});
        response.end('Internal Server Error');
      }
      else {
        response.writeHead(200, {'Content-Type':'text/html'})
        response.end(data);
      }
    });
  }
  else {
    response.writeHead(404, {'Content-Type':'text/html'});
    response.end('404 not found');
  }

}

module.exports = handler;
