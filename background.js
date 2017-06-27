// background.js

chrome.runtime.onInstalled.addListener(function() {
  var alarmName = "BoobaTime";
  var alarmInfo = {when : Date.now(), periodInMinutes : 10};
  chrome.alarms.create(alarmName, alarmInfo);
  chrome.browserAction.setBadgeText({text : "on"});
  chrome.browserAction.setBadgeBackgroundColor({color : "#32CD32"});
});

chrome.alarms.onAlarm.addListener(function(alarm){
  chrome.browserAction.getBadgeText({}, function(result) {
    if(result === "on" & alarm.name === "BoobaTime"){
  //    alert('It\'s time to listen to some Booba; suce mon troisième doigt');
      chrome.tabs.create({ url: getUrl(), active : false}, function(tab) {
        setTimeout(function(){
          chrome.tabs.onUpdated.addListener(function (tabId){
            if(tabId === tab.id) {
              chrome.tabs.remove(tab.id);
            }
          });
        }, 60000); // attendre au moins une minute
      });
    }
  });
});

chrome.browserAction.onClicked.addListener(function (tab){
  chrome.browserAction.getBadgeText({}, function(result) {
    if(result === "off") {
      chrome.browserAction.setBadgeText({text : "on"});
      chrome.browserAction.setBadgeBackgroundColor({color : "#32CD32"});
    } else {
      chrome.browserAction.setBadgeText({text : "off"});
      chrome.browserAction.setBadgeBackgroundColor({color : "#FA8072"});
    }
  });
});


function getUrl() {
  var urlList = [
    "https://www.youtube.com/watch?v=Jt_mfcf0ztg&index=7&list=RDYiC5SeRfLYw",
    "https://youtu.be/oBbHo8b4FDc?t=4s",
    "https://www.youtube.com/watch?v=su8zugec8tw",
    "https://www.youtube.com/watch?v=LIpuN5Y7p9Y",
    "https://www.youtube.com/watch?v=35_YJNHFkWA",
    "https://www.youtube.com/watch?v=vq1ztJsbRek",
    "https://youtu.be/hwtLqJyhS3Q?t=25s",
    "https://www.youtube.com/watch?v=KbYpghM6d-g",
    "https://www.youtube.com/watch?v=Tk20thb6z-g",
    "https://www.youtube.com/watch?v=4YTlz5jRtJM",
    "https://www.youtube.com/watch?v=9yysZMXachk",
    "https://www.youtube.com/watch?v=7KAIxag7Lgk",
    "https://www.youtube.com/watch?v=AjTkfYc9J5s",
    "https://www.youtube.com/watch?v=SDCSl9CFaNM",
    "https://www.youtube.com/watch?v=zL_TZsg6Fes",
    "https://www.youtube.com/watch?v=IZmCwtYk98A",
    "https://www.youtube.com/watch?v=uczY1We-Eak",
    "https://www.youtube.com/watch?v=Tk20thb6z-g",
    "https://www.youtube.com/watch?v=hwtLqJyhS3Q",
    "https://www.youtube.com/watch?v=OXewKWKvva8",
    "https://www.youtube.com/watch?v=wa1jFkDejVE",
    "https://www.youtube.com/watch?v=XsHbV4gG3M4",
    "https://www.youtube.com/watch?v=ufDsQaAXmVs",
    "https://www.youtube.com/watch?v=S3cB7Vj0gtQ",
    "https://www.youtube.com/watch?v=2PDST8XQH9Q",
    "https://www.youtube.com/watch?v=AFNEBA8sLJ0",
    "https://www.youtube.com/watch?v=PgnqVuNLtac",
    "https://www.youtube.com/watch?v=3Xp1T5rNs_U",
    "https://www.youtube.com/watch?v=9yysZMXachk",
    "https://www.youtube.com/watch?v=7KAIxag7Lgk",
    "https://www.youtube.com/watch?v=s4JbpWWV8sM",
    "https://www.youtube.com/watch?v=AjTkfYc9J5s",
    "https://www.youtube.com/watch?v=SDCSl9CFaNM",
    "https://www.youtube.com/watch?v=IZmCwtYk98A",
    "https://www.youtube.com/watch?v=uczY1We-Eak",
    "https://www.youtube.com/watch?v=2JaTztqeUDs",
    "https://www.youtube.com/watch?v=4YTlz5jRtJM",
    "https://www.youtube.com/watch?v=zL_TZsg6Fes",
    "https://www.youtube.com/watch?v=2NMt8G1yEz0",
    "https://www.youtube.com/watch?v=xLB3WEpkUVA",
    "https://www.youtube.com/watch?v=yqs0y-xX3BY",
    "https://www.youtube.com/watch?v=-B8IKn-RrDc",
    "https://www.youtube.com/watch?v=1ah32mm3vfU",
    "https://www.youtube.com/watch?v=SUGTUGkLroQ",
    "https://www.youtube.com/watch?v=e3xXCfXxr70",
    "https://www.youtube.com/watch?v=HBfVyIW3huA",
    "https://www.youtube.com/watch?v=RncCcghS2Bk",
    "https://www.youtube.com/watch?v=MWRu8gj1Qdc",
    "https://www.youtube.com/watch?v=LVdXxD2B1Xk",
    "https://www.youtube.com/watch?v=KN6_lFnSILo",
    "https://www.youtube.com/watch?v=1l4HTnzFuIs",
  ];
  var l = urlList.length;
  var ind = Math.floor(Math.random()*l);
  return(urlList[ind]);
}