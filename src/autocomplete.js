function autoComplete(arr, query){
  var data = [];
  console.log('query', query);
  var result = arr.filter(function(word) {
    if (word.startsWith(query)) {return word;}
  });
//  console.log(result.splice(0,10));
return result.splice(0,10);
//return data;

}

module.exports=autoComplete;
