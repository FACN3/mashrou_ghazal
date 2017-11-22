console.log('index.js is running');


 var arr=[];
 var parent = document.getElementById('data')
 var word='';

function autoComplete() {
  var xhr = new XMLHttpRequest();
   word = document.getElementById('query').value;
   arr = word.split(' ');
  var query = arr[arr.length - 1];
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      //console.log(xhr.responseText);
      var data = JSON.parse(xhr.response);
      populate(data);


    }

  };

  if (query) {
    xhr.open('GET', '/autoComplete?search=' + query, true);
    xhr.send();
  }

}

function populate(data) {

  while (parent.firstChild) {
    parent.firstChild.remove();
  }


  if (arr.length > 1) {
    add = arr.slice(0, arr.length - 1).join(" ");
    data = data.map(function(word) {
      return word = add + " " + word;

    });

  }

  data.forEach(function(element){

     var option=document.createElement('option');
       option.value=element;
       parent.appendChild(option);

  });

}
