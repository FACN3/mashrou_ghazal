var fs = require('fs');
var urlObject=require('url');
var autoComplete=require('./autocomplete');
var arr=[];


fs.readFile(__dirname + '/words.txt', (err, data) => {
  if (err) {
    console.log(err);
  }
  else {
    arr = data.toString().split("\n");
    console.log(arr.splice(0,10));
    //timer_test(arr);
  console.log("autoComplete is done");
  }
})

// function timer_test (arr){
//   console.log('array length', arr.length);
//   var start = new Date();
//   console.log('start', start.getTime());
//   var test = arr.indexOf('pinacolin');
//   var test = arr.indexOf('France');
//   var test = arr.indexOf('pinacolic');
//   var test = arr.indexOf('anaconda');
//   var test = arr.indexOf('stream');
//   var test = arr.indexOf('world');
//   var test = arr.indexOf('sunshine');
//   var test = arr.indexOf('place');
//   var test = arr.indexOf('console');
//   var end = new Date();
//   console.log(test);
//   console.log('end', end.getTime());
//   //console.log('overall time:', end - start);
// }



function handler(request, response) {
  var url = request.url;
  var query=urlObject.parse(url,true).query.search;

  console.log(query);
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

  } else if(url.slice(0,13)==='/autoComplete'){



    var search_result=autoComplete(arr, query);
		response.writeHead(200, {'Content-Type':'application/javascript'});
		response.end(JSON.stringify(search_result));

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
