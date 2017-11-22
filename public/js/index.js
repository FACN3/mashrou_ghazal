console.log('index.js is running');

var query = document.getElementById('query').value;
function autoComplete() {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if(xhr.readyState === 4 && xhr.status === 200){
      console.log(xhr.responseText);

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
  data.forEach(function(element) {

          console.log('autoComplete has been executed');

          var option = document.createElement('option');

          option.value = element;

          parent.appendChild(option);

  })

}
