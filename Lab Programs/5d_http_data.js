// 5) iV. Write a program to transfer data over http protocol using http module.

const http = require('http');
const server = http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'application/json'});
    const data = {
        name : "Student",
        course : "aiml"
    };
    res.write(JSON.stringify(data));
    res.end();
});
server.listen(3000);