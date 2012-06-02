# Client-Side Node.JS

This was a simple coding dojo project setup for Sask JavaScript to show how easy it is to manage dependencies using node modules, and setup a simple dev environment with node.

# Notes

This is the final stage of the project, we will be going through each of the steps as a code-along dojo at the meetup.

# Dependencies

1. [node.js](http://www.nodejs.org)
2. [npm](http://www.npmjs.org)
3. Various Dependencies listed in package.json

# Dojo Steps

Steps:

1. npm init
2. view package.json
3. set private true, explain why
4. install express with npm
5. setup an express simple app.js
6. create an index.html
7. what is our app going to do?
8. consume some photos via the flickr api?
9. go create a flickr account, or login to yours and create an "app"
10. get a non-commercial api key and secret
10. npm install request
11. require the request library, which we'll use to make external requests
12. setup a proxy to the flickr api to get some pictures back
13. restart, and see if it works! (note on addons to view json in browser)
14. kind of annoying having to restart the dev server every time, so let's solve that with node-dev
15. npm install node-dev --save-dev
16. setup a script, npm run-script devserver
17. client-side stuff: let's create a little set of modules to deal with the photos
18. installing and requiring jquery from within node, to use client-side
19. configuring express to use browserify and setup a bundle
20. add the bundle to your index.html
21. winner :)
22. photo.searcher
23. photo.viewer
24. installing underscore and configuring it for the template function
25. noticing that our clientside code isn't being refreshed, because the server needs to restart in order for browserify to rebuild our bundle
26. install wach, setup a dev script to do that.
27. get things running in our app
28. creating a standalone bundle with browserify
29. minify with uglify
30. setup a script to auto minify for us

# License / Usage

This code is made available free of charge. Do what you want with it :)