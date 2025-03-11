// This is a single-line comment

/*
 This is a multi-line comment.
 You can use it to provide more detailed explanations
 or to comment out blocks of code.
*/

function add(a, b) {
    // This function adds two numbers and returns the result
    return a + b;
}

function subtract(a, b) {
    // This function subtracts the second number from the first and returns the result
    return a - b;
}

// Example usage:
console.log(add(5, 3)); // Output: 8
console.log(subtract(5, 3)); // Output: 2

//create web server
var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Hello World!');
}).listen(8080);

// Output: Hello World!
// The server is now listening on port 8080