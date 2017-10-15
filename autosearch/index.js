window.searchModule = (function(){
  var sentences = [
    "Sai mera mallik",
    "Sai malik",
    "Sairam",
    "Sai baba",
    "Hello how are you",
    "cat is an animal",
    "I love dog"
  ];
  var delayHandler;
  
  function search(event) {
    var ul = document.getElementById("suggestions");
    ul.innerHTML = "";
    clearTimeout(delayHandler);
    delayHandler = setTimeout(function(){
      var searchText = event.target.value;
      var suggesstions =sentences.filter(function(sentence){
        return (sentence.indexOf(searchText) == 0 && searchText);
      });
      if(suggesstions.length) {
        suggesstions.forEach(function(suggestion){
          var suggest = document.createElement('li');
          suggest.innerHTML = suggestion;
          ul.appendChild(suggest);
        })
      }
    }, 1000);
  }
  
  
  return {
    search : search
  }
  
  
})();