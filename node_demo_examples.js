/* hello world */
console.log("Hi Folks!");

/* Simple javaScript */
function factorial(n) {
    if (n == 0) {
        return 1;
    }
    return n * factorial(n - 1);
}


/* Example of a server */

var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(1337, "127.0.0.1");

console.log('Server running at http://127.0.0.1:1337/');


