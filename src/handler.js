var fs = require('fs');
var urlObject = require('url');
var autoComplete = require('./autocomplete');
var arr = [];


fs.readFile(__dirname + '/words.txt', (err, data) => {
  if (err) {
    console.log(err);
  } else {
    arr = data.toString().split("\n");
    console.log(arr.splice(0, 10));
    //timer_test(arr);
    console.log("autoComplete is done");
  }
})


function handler(request, response) {
  var url = request.url;
  response_path = {
    '/': '/../public/index.html',
    '/css/style.css': '/../public' + url,
    '/js/index.js': '/../public' + url
  }[url]


  contentType = {
    '/': 'text/html',
    '/css/style.css': 'text/css',
    '/js/index.js': 'application/javascript'
  }[url]

  var query = urlObject.parse(url, true).query.search;

  public_list = ['/', '/css/style.css', '/js/index.js'];

  if (public_list.includes(url)) {
    file_handler(url,response_path,contentType);

  } else if (url.slice(0, 13) === '/autoComplete') {


    var search_result = autoComplete(arr, query);
    response.writeHead(200, {
      'Content-Type': 'application/javascript'
    });
    response.end(JSON.stringify(search_result));

  } else {
    console.log('URL is ', url);
    response.writeHead(404, {
      'Content-Type': 'text/html'
    });
    response.end('404 not found');
  }

  function file_handler(url) {


    fs.readFile(__dirname + response_path, (err, data) => {
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



  }



}

module.exports = handler;
