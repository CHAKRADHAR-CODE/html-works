// 5) iii. Write a program to show the workflow of JavaScript code executable by creating web server in Node.js.

const http = require("http");
const server = http.createServer((req,res)=>{
    res.write("Hello from Node.js server");
    res.end();
});
server.listen(3000,()=>{
    console.log("server is running at http://localhost:3000");
})