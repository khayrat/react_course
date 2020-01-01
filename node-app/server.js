var http = require('http');
var fs = require('fs');
var url = require('url');


//create a server object:
http.createServer(function (req, res) {
  var q = url.parse(req.url, true);
  var filename = "." + q.pathname;


 fs.readFile(filename, function(err, data) {
   if (err) {
     res.writeHead(404, {'Content-Type': 'text/html'});
     return res.end("404 Not Found");
   } 
   res.write(data);
   res.end();
 }); 
}).listen(8080); //the server object listens on port 8080
