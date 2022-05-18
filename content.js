chrome.runtime.onMessage.addListener(function(request){
    const Http = new XMLHttpRequest();
    const url='https://api.dictionaryapi.dev/api/v2/entries/en/'+request;
    Http.open("GET", url);
    Http.send();
    Http.onreadystatechange = (e) => {
        if(Http.readyState ==4){
            var response = JSON.parse(Http.responseText);
            var data  = response[0].meanings[0].definitions[0].definition
            alert(data);
        }
        
    }

});