var fs = require('fs');


function handler(request, response) {
  var url = request.url;
  if (url === '/') {
    console.log('path', __dirname + '/../public/index.html');
    fs.readFile(__dirname + '/../public/index.html', (err, data) => {
      if (err) {
        response.writeHead(500, {
          'Content-Type': 'text/html'
        });
        response.end('Internal Server Error');
      } else {
        response.writeHead(200, {
          'Content-Type': 'text/html'
        })
        response.end(data);
      }
    });
  } else if (url === '/css/style.css') {
    fs.readFile(__dirname + '/../public' + url, (err, data) => {

      if (err) {
        response.writeHead(500, {
          'Content-Type': 'text/html'
        });
        response.end('Internal Server Error');
      } else {
        response.writeHead(200, {
          'Content-Type': 'text/css'
        })
        response.end(data);

      }

    });

  } else if (url === '/js/index.js') {
    fs.readFile(__dirname + '/../public' + url, (err, data) => {

      if (err) {
        response.writeHead(500, {
          'Content-Type': 'text/html'
        });
        response.end('Internal Server Error');
      } else {
        response.writeHead(200, {
          'Content-Type': 'application/javascript'
        })
        response.end(data);
      }
    });

  }
else if(url==='/autoComplete'){

		response.writeHead(200, {'Content-Type':'text/html'});
		response.end('xhr works');

		}

   else {
    console.log('URL is ', url);
    response.writeHead(404, {
      'Content-Type': 'text/html'
    });
    response.end('404 not found');
  }

}

module.exports = handler;
