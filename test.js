// import readline from 'node:readline';
import fs from 'fs'
import mysql from 'mysql2'
// let buf1=Buffer.alloc(100)

// let rl = readline.createInterface(
//     process.stdin,
//     process.stdout
// );
// rl.setPrompt(`enter the string to be added to the buffer`);
// rl.prompt()
// // rl.on('line',(input1)=>{

// //     let buffer2 = Buffer.from(input1);
// //     const temp=input1;
// //     // console.log(temp);
// //     const len=buf1.length
    
// //     buf1.copy(buffer2,len)
// //     console.log(buf1.toString('ascii'));
// //     rl.close()
// // })

// rl.on('line',(input)=>{

//     let buffer2 = Buffer.from(input);

//     buf1=Buffer.concat([buf1,buffer2])
//     // buf1.write(buffer2.toString())  
//     console.log(buf1.toString('ascii'));
//     // buf1("abc sf",)
//     // console.log(buf1.toString());
//      buffer2 = Buffer.from(input);
//     buf1=Buffer.concat([buf1,buffer2])
//     console.log(buf1.toString('ascii'));

//     rl.close()
    
// })

// let buffer1 = Buffer.from('GeeksandGeeks');

// buffer2.copy(buffer1, 5, 0);

// console.log(buffer1.toString());


// import http from 'http';
// import { EventEmitter } from 'events';

// // Create an EventEmitter instance
// const myEmitter = new EventEmitter();

// // Create an HTTP server
// const server = http.createServer((req, res) => {
//     // Emit 'requestReceived' event when a request is received

//     if (req.url === '/' && req.method === 'GET') {
//         myEmitter.emit('home requestReceived', req.method, req.url);
//         res.writeHead(200, { 'Content-Type': 'text/html' });
//         res.end('<h1>Request processed successfully!</h1>');
//         // res.end('<h1>About Us Page</h1>');
//     } 
//     else if (req.url === '/about' && req.method === 'GET') {
//         myEmitter.emit('about requestReceived', req.method, req.url);
//         res.writeHead(200);
//         res.end('<h1>About Us Page</h1>');
//     } 
//     else{
//         res.writeHead(404);
//         res.end('<h1>Error</h1>');
//     }
// });

// // Listen for the 'requestReceived' event
// myEmitter.on('home requestReceived', (method, url) => {
//     console.log(`📡 ${method} request received for URL: ${url}`);

// });

// myEmitter.on('about requestReceived', (method, url) => {
//     console.log(`📡 ${method} request received for URL: ${url}`);

// });

// // Handle 'SIGINT' for graceful shutdown
// process.on('SIGINT', () => {
//     console.log('🛑 Shutting down the server...');
//     server.close(() => {
//         console.log('✅ Server closed gracefully.');
//         process.exit(0);
//     });
// });

// // Start the server
// server.listen(3000, () => {
//     console.log('🚀 Server running at http://localhost:3000');
// });
// fs.open('./test.txt', 'r', (err, fd) => {
//     if (err) {
//         console.error('Error opening file for reading:', err);
//         return;
//     }

//     const buffer = Buffer.alloc(1024);
    
//     fs.read(fd, buffer, 0, buffer.length, 0, (err, bytesRead) => {
//         if (err) {
//             console.error('Error reading from file:', err);
//             return;
//         }
//         console.log(`Bytes read: ${bytesRead}`);
//         console.log('Data:', buffer.toString('utf8', 0, bytesRead));

//         // Close file after reading
//         fs.close(fd, (err) => {
//             if (err) {
//                 console.error('Error closing file:', err);
//                 return;
//             }
//             console.log('File closed after reading.');
//         });
//     });
// });
// const mysql = require('mysql2');

// Create connection
const connection = mysql.createConnection({         // Hostname
    user: 'root',              // Username
    password: 'root',              // Password
    database: 'atharva'        // Database name
});

// Connect to MySQL
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL!');
});

// Perform a query
connection.query('SELECT * FROM customer ', (err, results) => {
    if (err) {
        console.error('Error executing query:', err);
        return;
    }
    console.log('Data:', results);
});

// Close the connection
connection.end();
