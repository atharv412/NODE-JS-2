// Import the HTTP module using ES6 import
import http from 'http';

// Define the hostname and port
const hostname = '127.0.0.1';
const port = 3000;

// Create the web server using ES6 arrow functions
const server = http.createServer((req, res) => {
    // Set response header
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');

    // Handle different routes using ES6 template literals
    if (req.url === '/' && req.method === 'GET') {
        res.writeHead(200);
        res.end('<h1>Welcome to the Home Page!</h1>');
    } else if (req.url === '/about' && req.method === 'GET') {
        res.writeHead(200);
        res.end('<h1>About Us Page</h1>');
    } else if (req.method === 'POST' && req.url === '/data') {
        let body = '';
        // Read data in chunks
        req.on('data', (chunk) => {
            body += chunk;
        });
        // End event when data reading is complete
        req.on('end', () => {
            console.log(`Received data: ${body}`);
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: 'Data received', data: body }));
        });
    }
     else {
        res.writeHead(404);
        res.end('<h1>404 - Page Not Found</h1>');
    }
});

// Start the server and listen on specified port
server.listen(port, hostname, () => {
    console.log(`🚀 Server running at http://${hostname}:${port}/`);
});



const https = require('https')
const options = {

    hostname: 'anyURL.com',
    port: 450,
    path: '/myfolder ',
    method: ' GET'
}
const req = https.request(options, res => {
    console.log(`statusCode: ${res.statusCode}`)
    res.on(' data', d => {
        process.stdout.write(d)
    })
})
req.on('error', error => {
    console.error(error)
})
req.end() 