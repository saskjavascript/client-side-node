var express         = require('express'),
    request         = require('request'),
    PORT            = 3000,
    FLICKR_KEY      = "dc43133eacbf9aa77ba291e2893c9caa",
    FLICKR_SECRET   = "f2e707741f9d4cf1",
    FLICKR_API_ROOT = "http://api.flickr.com/services/rest/?per_page=30&nojsoncallback=1&format=json&api_key=" + FLICKR_KEY,
    app             = module.exports = express.createServer(),
    bundle          = require('browserify')(__dirname + '/js/start.js');

app.configure(function(){
  app.use(express.static(__dirname));
  app.use(express.bodyParser());
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
  app.use(bundle);
});

app.listen(PORT, function(){
  console.log("Express server listening on port %d", app.address().port);
});

app.get('/proxy/photos/:tags', function(req, res) { // /proxy/photos/cows
  // http://www.flickr.com/services/api/flickr.photos.search.html
  var uri = FLICKR_API_ROOT + "&tags=" + req.params.tags + "&method=flickr.photos.search";
      
  request.get(uri, function(error, response, body) {
    if(!error && response.statusCode == 200) {
      res.contentType('application/json');
      res.send(body);
    } else {
      res.send("flickr proxy error: " + error);
    }
  });
});
