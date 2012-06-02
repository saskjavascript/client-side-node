var $           = require('jquery-browserify');
    PhotoViewer = require('./photo.viewer');

var PhotoSearcher = {
  init: function() {
    $("#search-flickr").click(function() {
      var tags = $("#tags").val();
      $.ajax({
        type: "GET",
        url: "/proxy/photos/%s".replace("%s", tags),
        success: function(response) {
          PhotoViewer.list(response.photos.photo);
        }
      })
    });
  }
};

module.exports = PhotoSearcher;