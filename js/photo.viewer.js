var $ = require('jquery-browserify'),
    _ = require('underscore');
    
_.templateSettings = {
  interpolate : /\{\{(.+?)\}\}/g
};

// http://www.flickr.com/services/api/misc.urls.html
var photoTemplate = _.template("<li><img src='http://farm{{farmid}}.staticflickr.com/{{serverid}}/{{id}}_{{secret}}_q.jpg'</li>");

var PhotoViewer = {
  list: function(photos) {
    $(".photos").empty();
    _.each(photos, function(photo) {
      $(".photos").append(photoTemplate({
        farmid: photo.farm,
        serverid: photo.server,
        id: photo.id,
        secret: photo.secret
      }));
    });
  }
};

module.exports = PhotoViewer;