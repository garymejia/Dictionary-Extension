chrome.runtime.onMessage.addListener(function(request){
    function dictionaryAPI(word){
        let url = "https://api.dictionaryapi.dev/api/v2/entries/en/" + word
        fetch(url).then(function(response) {
             alert(response.json());
          }).then(function(data) {
            alert(data);
          }).catch(function() {
            alert("Booo");
          });
    }

    dictionaryAPI(request);
})
