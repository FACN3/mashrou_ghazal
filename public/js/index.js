console.log('index.js is running');

function autoComplete() {

  var query=document.getElementById('query').value;
  console.log(query);

  var parent = document.getElementById('data')
  while (parent.firstChild) {
    parent.firstChild.remove();
  }

  var data = ['abcd', 'bds', 'hello', 'tere', 'ware'];


   if(query.indexOf('a')==0){
     data = ['abcd', 'abds', 'ahello', 'aaere', 'aware'];

   }else if(query.indexOf('b')==0) {

     data = ['bcd', 'babds', 'bahello', 'baaere', 'baware'];


   }


  data.forEach(function(element) {

    console.log('autoComplete has been executed');

    var option = document.createElement('option');

    option.value = element;

    parent.appendChild(option);

  })

}
