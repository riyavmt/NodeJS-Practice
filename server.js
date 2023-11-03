const http = require('http');
const server = http.createServer((req,res)=>{
    console.log("My name is Riya Verma")
});
server.listen(3000);