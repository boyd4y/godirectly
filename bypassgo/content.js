// ==UserScript==
// @name           Winston
// @namespace      google
// @include        http://www.google.*/*
// ==/UserScript==
var runOnce = function(){
    var items = document.querySelectorAll('li.g h3.r a');
    console.log("inject began " + items.length);
    
    for(var i = 0, len = items.length; i< len; i++){
        items[i].removeAttribute('onmousedown');
    }
    
    console.log("inject finished");
}

chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
  runOnce();
});
