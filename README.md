
## Intro to node

__Node.js®__ is a JavaScript runtime built on Chrome's V8 JavaScript engine. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient. Node.js' package ecosystem, npm, is the largest ecosystem of open source libraries in the world.

A __node_Module__ is a lego block of code. Everything in a node application is modular, meaning it is made up of many, different smaller parts that work towards the end functionality.


__NPM__ Node package modular- Is a tool that allows us to easily access the node module ecosystem and add them to our project.

Every node app has a __Package.json__ , which is the master file that keeps track of all node modules your project cares about.

To add a `packag.json` to your project `npm init`, and accept all defaults.

_______
*commit your Code!*
`git add -A`
`git commit -m "introductory dfinition for node"`
`git push orgin master`
____________________
Example node_Module : [Moment.js][https://momentjs.com/]


____________________

### Node HTTP Server

We used the node moduel http to buld a simple web server, that we can then run and connect using the web address: `http://localhost:3000/` .
To run the server command `node index.js`

``` js
var http = require('http');


http.createServer(function (request, response){
  response.writeHead(200,{'Content-Type': 'text/plain'});
  response.end('hello world!');

}).listen(3000, function(){
  console.log('App is listeneing on port 3000')
});

```



____________________

### Express Web server
[Express API](http://expressjs.com/)
To add express node module to our application:
`npm install -- save express`
To ensure it was added successfully, check your `package.json` for:
```js
"dependencies": {
  "express": "^4.15.3"
}
```

This also gives us a ton of code we do not care to track in our Github, in the
`node_modules/` folder. TO ignore this code:

`touch .gitignore`
add `node_modues/` to `.gitignore`
____________________
