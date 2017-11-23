var fs = require('fs');
var urlObject = require('url');
var autoComplete = require('./autocomplete');
var arr = [];

fs.readFile(__dirname + '/words.txt', (err, data) => {
  if (err) {
  }
  else {
    arr = data.toString().split("\n");
  }
})

function not_found(request,response){
  response.writeHead(404, {
    'Content-Type': 'text/html'
  });
  response.end('404 not found');
}

function api_handler(request,response,url){

  var query = urlObject.parse(url, true).query.search;


      var search_result = autoComplete(arr, query);
      response.writeHead(200, {
        'Content-Type': 'application/javascript'
      });
      response.end(JSON.stringify(search_result));
}
  function file_handler(request,response,url,response_path,contentType) {
    fs.readFile(__dirname + response_path, (err, data) => {
      if (err) {
        response.writeHead(500, {
          'Content-Type': 'text/html'
        });
        response.end('Internal Server Error');
      } else {
        response.writeHead(200, {
          'Content-Type': contentType
        })
        response.end(data);
      }
    });
  }





module.exports = {'file_handler':file_handler,
                  'api_handler': api_handler,
                    'not_found': not_found  };
