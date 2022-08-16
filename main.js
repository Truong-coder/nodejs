 // 1 - Import Node.js core module
 //Require a certain web library called HTTP used 
const http = require('http');
const port = 3000 //use port 3000
// 2 - creating server
// create funtion and pass parameters request and response
const server = http.createServer(function (req, res) {   
    //handle incomming requests here..
    // end server: Ctrl + C
    res.write('Hello node')
    res.end()
});

//3 - listen for any incoming requests

server.listen(port, function(error){
    if(error){
        console.log('Something went wrong', error)
    }
    else{
        console.log('Server is listening on port'+ port)
    }
});