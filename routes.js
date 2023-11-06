const fs = require('fs');
const requestHandler = (req,res)=>{
    const url = req.url;
    const method = req.method;
    if(url==='/'){
        
        fs.readFile('message.txt', (err, data) => {
            if(err) console.log(err);
            else{
                res.write('<html>');
                res.write('<head><title>Enter</title></head>');
                res.write('<body>');
                res.write(data);
                res.write('<h1>Hello</h1><form action ="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form>');
                res.write('</body>');
                res.write('</html>')
                return res.end();
            }
        })
        
    }
    if(url==='/message'&& method==='POST'){
        const body=[];
        req.on('data', chunk=>{
        body.push(chunk);
    });
        return req.on('end',()=>{
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            fs.writeFile('message.txt',message,err=>{
                res.statusCode = 302;
                res.setHeader('Location','/');
                return res.end();
            });
        });
        
    }
     
};


module.exports = requestHandler;


