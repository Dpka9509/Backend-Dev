const http = require("http");
const fs = require("fs");
const { Transform } = require("stream");
const path=require('path');


const logStream = fs.createWriteStream("access.log", { flags: "a" });

function logRequest(req) {
    const log = `${new Date().toISOString()} | ${req.method} | ${req.url}\n`;
    logStream.write(log);
}

// Uppercase Transform
const upperCaseTransform = new Transform({
    transform(chunk, encoding, callback) {
        callback(null, chunk.toString().toUpperCase());
    }
});

// Replace Vowels with *
const removeVowelsTransform = new Transform({
    transform(chunk, encoding, callback) {
        const modified = chunk.toString().replace(/[aeiouAEIOU]/g, "*");
        callback(null, modified);
    }
});


const server = http.createServer((req, res) => {

    logRequest(req);
    if (req.method === "GET" && req.url === "/") {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("Server is running");
    }

    else if (req.method === "GET" && req.url === "/about") {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("This is the About page");
    }

    else if (req.method === "GET" && req.url === "/user") {
        const user = {
            name: "Deepika",
            role: "Student",
            age: 21
        };

        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(user));
    }

    else if (req.method === "POST" && req.url === "/uppercase") {
        res.writeHead(200, { "Content-Type": "text/plain" });
        req.pipe(upperCaseTransform).pipe(res);
    }

    else if (req.method === "POST" && req.url === "/process") {
        res.writeHead(200, { "Content-Type": "text/plain" });
        req
            .pipe(upperCaseTransform)
            .pipe(removeVowelsTransform)
            .pipe(res);
    }
    else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("404 - Route Not Found");
    }
});

server.listen(3000, () => {
    console.log("Server running on port 3000");
});
