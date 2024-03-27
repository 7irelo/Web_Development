"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http = require("http");
var hostname = '127.0.0.1';
var port = 3000;
var server = http.createServer(function (req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end("import http from 'http';\n\nconst hostname = '127.0.0.1';\nconst port = 3000;\n\nconst server = http.createServer((req, res) => {\n    res.statusCode = 200;\n    res.setHeader('Content-Type', 'text/plain');\n    res.end('Hello, World!');\n});\n\nserver.listen(port, hostname, () => {\n    console.log(`Server running at http://${hostname}:${port}/`);\n});")
});
server.listen(port, hostname, function () {
    console.log("Server running at http://".concat(hostname, ":").concat(port, "/"));
});
