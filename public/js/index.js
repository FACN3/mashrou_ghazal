console.log('index.js is running');

function autoComplete() {
  var xhr = new XMLHttpRequest();
  var query=document.getElementById('query').value;
  xhr.onreadystatechange = function () {
    if(xhr.readyState === 4 && xhr.status === 200){
      //console.log(xhr.responseText);
      var data=JSON.parse(xhr.response);
      data.forEach(function(element) {

              console.log('autoComplete has been executed');

              var option = document.createElement('option');

              option.value = element;

              parent.appendChild(option);

      });


    }

     };

    console.log('/autoComplete?search='+query);
     xhr.open('GET', '/autoComplete?search='+query, true);
     xhr.send();


  var parent = document.getElementById('data')
  while (parent.firstChild) {
        parent.firstChild.remove();
      }

  var data = ['abcd', 'bds', 'hello', 'tere', 'ware'];

}
