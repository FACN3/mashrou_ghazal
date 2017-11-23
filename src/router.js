var handler=require('./handler');

function router(request,response){


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

     if(response_path){
       handler.file_handler(request,response,url,response_path,contentType);
     }else if(url.slice(0, 13) === '/autoComplete'){
       handler.api_handler(request,response,url);
     }else{
       handler.not_found(request,response);
     }




}
module.exports=router;
