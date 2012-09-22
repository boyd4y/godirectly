// ==UserScript==
// @name           Winston
// @namespace      google
// @include        http://www.google.*/*
// ==/UserScript==
var runOnce = function(){
    var items = document.querySelectorAll('li.g h3.r a');
    console.log("inject began " + items.length);
    
    for(var i = 0, len = items.length; i< len; i++){
        var href = items[i].getAttribute('href');
	var embeddedlinkPattern = RegExp('url=(http.+?)&');
	var matchrefs = embeddedlinkPattern.exec(href);
	if (matchrefs != null && matchrefs.length > 1)
	{
	    var newhref = decodeURIComponent(matchrefs[1]);
	    items[i].setAttribute('href', newhref);
	    console.log("\t decode url to" + newhref);
	}
	
        items[i].removeAttribute('onmousedown');
    }
    
    console.log("inject finished");
}

chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
  runOnce();
});
