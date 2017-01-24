
var BAD_URLS = [
  '21stcenturywire.com',
  'americannews.com',
  'cc.com/indecision',
  'christwire.org',
  'civictribune.com',
  'clickhole.com',
  'creambmp.com',
  'dailycurrant.com',
  'dcclothesline.com',
  'dcgazette.com',
  'derfmagazine.com',
  'drudgereport.com.co',
  'duhprogressive.com',
  'empirenews.com',
  'enduringvision.com',
  'enduringvision.com',
  'mediamass.net',
  'msnbc.co',
  'msnbc.website',
  'nationalreport.net',
  'news-hound.com',
  'newsbiscuit.com',
  'newsmutiny.com',
  'politicalears.com',
  'private-eye.co.uk',
  'realnewsrightnow.com',
  'rilenews.com',
  'sprotspickle.com',
  'thenewsnerd.com',
  'theuspatriot.com',
  'witscience.org'
];


var callback = function(requestDetails){
  BAD_URLS.forEach(function(badUrl){
    if (requestDetails.url.toLowerCase().includes(badUrl)) {
      let newUrl = "/index.html";
      chrome.tabs.update(requestDetails.tabId, {url: newUrl});
      // return {redirectUrl: newUrl};
    }
  });
};

var filter = {urls: ["<all_urls>"]};

var opt_extraInfoSpec = ["blocking"];

chrome.webRequest.onBeforeRequest.addListener(callback, filter, opt_extraInfoSpec);
