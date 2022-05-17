var message;
chrome.tabs.executeScript( {
    code: "window.getSelection().toString();"
}, function(selection) {
    message = document.getElementById("output").innerHTML = selection; //replace the innertext with the selection variable or we could say something like "hello world" instead of selection
});

document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('button').addEventListener('click', onclick, false)
    
    function onclick () {
        chrome.tabs.query({currentWindow: true, active: true}, function (tabs) {
            var word = message.toString().split(' ')[0].toString();
            chrome.tabs.sendMessage(tabs[0].id, (word));

        })
    }
}, false);
