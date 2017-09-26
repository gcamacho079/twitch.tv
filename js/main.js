$(document).ready(function() {
  var twitchStreamers = ["freecodecamp", "KayPikeFashion", "ProPandaPlays", "meldamiriel", "MelodyZE", "itsHafu", "elaaaaargh", "comster404", "lilchunzzz"];
  var apiURL = "https://wind-bow.gomix.me/twitch-api/";
  var userURL;
  var streamLink;

  twitchStreamers.forEach(function(username) {
    userURL = apiURL + "users/" + username + "?callback=?";
    streamLink = apiURL + "streams/" + username + "?callback=?";

    $.ajax(userURL, {
      dataType: "json",
      type: "GET",
      success: function(response) {
        if (response.error) {
          console.log (username + " does not exist.");
        }
        else {
          console.log(response);
        }
      }
    });

  });

}); // end ready

var twitchApp = {
  onReady: function() {
    $("#online").click(twitchApp.filterOnline);
    $("#offline").click(twitchApp.filterOffline);
    $("#all").click(twitchApp.noFilter);
  },

  filterOnline: function() {

  },

  filterOffline: function() {

  },

  noFilter: function() {

  },
};

$(document).ready(twitchApp.onReady);
