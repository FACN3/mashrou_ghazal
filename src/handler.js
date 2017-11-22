var fs = require('fs');
var urlObject=require('url');
var autoComplete=require('./autocomplete');
var arr=[];


fs.readFile(__dirname + '/words.txt', (err, data) => {
  if (err) {
  }
  else {
    arr = data.toString().split("\n");
    //timer_test(arr);
  }
})


function handler(request, response) {
  var url = request.url;
  var query=urlObject.parse(url,true).query.search;

  if (url === '/') {
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

  } else if(url.slice(0,13)==='/autoComplete'){



    var search_result=autoComplete(arr, query);
		response.writeHead(200, {'Content-Type':'application/javascript'});
		response.end(JSON.stringify(search_result));

		}

   else {
    response.writeHead(404, {
      'Content-Type': 'text/html'
    });
    response.end('404 not found');
  }

}

module.exports = handler;
