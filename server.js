const http = require('http');
const server = http.createServer((req,res)=>{
    const url = req.url;
    res.write('<html><head><title>Node JS Application</title></head>');
    res.write('<body>')
    if(url==="/home"){
        res.write("Welcome home ")
    }
    else if(url==="/about"){
        res.write("Welcome to About Us page")
    }
    else if(url==="/node"){
        res.write("Welcome to my node JS Project")
    }
    else{
        res.write("Hello World");
    } 
    res.write('</body></html>')
    res.end();
});


server.listen(4000,() =>{
    console.log("Server is running")
});