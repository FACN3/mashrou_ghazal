function autoComplete(arr, query){
  var data = [];
  var result = arr.filter(function(word) {
    if (word.startsWith(query)) {return word;}
  });
return result.splice(0,10);

}

module.exports=autoComplete;
