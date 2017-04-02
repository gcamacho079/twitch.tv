//var twitchStreamers = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas", "brunofin", "comster404"];
var numberOfStreamers;
var userName;

var twitchTV = {
  init: function() {
    twitchTV.streamCheck();
  },

  streamCheck: function() {
    $.getJSON("https://wind-bow.gomix.me/twitch-api/users/freecodecamp?callback=?", function(json) {
      console.log(json);
      console.log(json.bio);
    })
  }
}

$(document).ready(twitchTV.init);
