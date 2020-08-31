 var http = require('http');
 var fs = require('fs');
 var server = http.createServer(function(request, response){
   fs.readFile('index.html', function(err, html){
     response.writeHeader(200, {'Content-Type': 'text/html; charset=UTF-8;'});
     response.write(html);
     response.end();
   });
 });
 server.listen(3000, function(){
   console.log('Executando Servidor HTTP');
 });
 
