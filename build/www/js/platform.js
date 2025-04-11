var isMobileApp = false;
var isApp = false;
var isDesktop =
  navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i) ==
  null;

var isChromeBrowser =
  /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
var urlChrome =
  "https://chrome.google.com/webstore/detail/bonziworld/mbmkblgjegkiaggajjiheicbmfjaldcf";

var isiOS = navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)/i) != null;
var urlGPlay =
  "https://play.google.com/store/apps/details?id=com.jojudge.bonziworld";
var urlSteamGroup = "https://steamcommunity.com/groups/SEAMSERVER";
var urlAmazonStore = "https://www.amazon.com/dp/B0C38B8J8G/";

// Get the voice select element.
var voiceSelect = document.getElementById("voice");
$(function () {
  var support = {
    AudioContext: {
      supported:
        typeof (window.AudioContext || window.webkitAudioContext) !=
        "undefined",
      message: "Your browser does not support the Web Audio API.",
    },
  };

  var supported = true;
  var supportKeys = Object.keys(support);
  for (var i = 0; i < supportKeys.length; i++) {
    var key = supportKeys[i];
    var obj = support[key];
    supported = supported && obj.supported;
    if (!obj.supported)
      $("#unsupp_reasons").append("<li>" + obj.message + "</li>");
  }

  $(".app_showcase").append(
    '<img src="./img/app/pope_info.png" alt="Popes are better and way less meaner than before!" width=211/>'
  );
  $(".app_showcase").append(
    '<img src="./img/app/bonzico_friendly.png" alt="no" width=211/>'
  );
  
  $(".app_showcase").append(
    '<img src="./img/app/wip.png" alt="This BonziWORLD Mod is WIP." width=211/>'
  );
  
  $(".app_showcase").append(
    '<img src="./img/app/desktop.png" alt="Open on PC for the best experience." width=211/>' +
      "</a>"
  );
  if (!supported) {
    $("#page_unsupp").show();
  }

  /*
  if (!isiOS) {
    $(".app_showcase").append(
      '<a class="app_android" href="' + urlGPlay + '">' +
        '<img src="./img/app/google-play-badge.png" alt="Get it on Google Play." />' +
      '</a>'
    );
  }
*/
  if (!isiOS) {
    $(".app_showcase").append(
      '<a class="app_android" href="' +
        urlAmazonStore +
        '">' +
        '<img src="./img/app/amazon-appstore-badge-english-black.png" alt="Get it on Amazon Appstore." width=211/>' +
        "</a>"
    );
  }
  if (!isDesktop) {
    $(".app_showcase").append(
      '<a class="app_chrome">' +
        '<img src="./img/app/desktop.png" alt="Open on PC for the best experience." />' +
        "</a>"
    );
  }
  $(".app_showcase").append(
    '<a href="./classic.html">' +
      '<img src="./img/app/classic.png" alt="Check out the classic version.." />' +
      "</a>"
  );
});
// moving these into the script.min.js declutter...