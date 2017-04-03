var twitchStreamers = ["freecodecamp", "KayPikeFashion", "ProPandaPlays", "meldamiriel", "MelodyZE", "itsHafu"];
var displayName;
var description;
var imageSource;
var streamLink;
var userRow;
var column1;
var column2;
var column3;

var twitchTV = {
  init: function() {
    twitchTV.getUser();
  },

  getUser: function() {
    for (i = 0; i < twitchStreamers.length; i++) {
      $.getJSON("https://wind-bow.gomix.me/twitch-api/users/" + twitchStreamers[i] + "?callback=?", function(json) {
        displayName = json.display_name;
        description = json.bio;
        imageSource = json.logo;
        streamLink = "https://www.twitch.tv/" + json.name;
        console.log(streamLink);
        console.log(description);
        twitchTV.makeRow();
      })
    }
  },

  makeRow: function() {
    column1 = "<div class='col-sm-3'><img src='" + imageSource + "' class='img-responsive img-circle icon'></img></div>"
    column2 = "<div class='col-sm-4'><p><a href='" + streamLink + "' target='_blank'>" + displayName + "</a></p></div>"
    column3 = "<div class='col-sm-5'><p>" + description + "</p></div>"
    userRow = "<div class='row'>" + column1 + column2 + column3 + "</div>";
    $(userRow).appendTo(".streamFeed");
  }

}

$(document).ready(twitchTV.init);
