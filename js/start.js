var PhotoSearcher = require("./photo.searcher"),
    PhotoViewer   = require("./photo.viewer");

app = {};

app.PhotoSearcher = PhotoSearcher;
app.PhotoViewer  = PhotoViewer;

app.PhotoSearcher.init();

module.exports = app;