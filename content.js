chrome.runtime.onMessage.addListener(function(request){
    const Http = new XMLHttpRequest();
    const url='https://api.dictionaryapi.dev/api/v2/entries/en/hello';
    Http.open("GET", url);
    Http.send();
    Http.onreadystatechange = (e) => {
        alert(Http.responseText);
    }
    // dictionaryAPI(request);
});