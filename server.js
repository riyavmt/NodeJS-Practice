const http = require('http');
const server = http.createServer((req,res)=>{
    console.log("My name is Riya Verma");
    res.end("Welcome to my Node JS Project!");
});
server.listen(4000,() =>{
    console.log("Server is running")
});