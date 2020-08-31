 
--- index.html
/*

<!DOCTYPE html>
 <html>
   <head>
     <title>Hello World</title>
   </head>
   <body>
     <h1>Hello World Automatico</h1>
   </body>
 </html>

*/

 --- app.js

 var http = require('http');
 var fs = require('fs');
 var server = http.createServer(function(request, response){
   fs.readFile(__dirname + '/index.html', function(err, html){
     response.writeHeader(200, {'Content-Type': 'text/html'});
     response.write(html);
     response.end();
   });
 });
 server.listen(3000, function(){
   console.log('Executando Servidor HTTP via nodemon');
 });
 
/*
npm install -g nodemon
npm install --save-dev nodemon
npm config get prefix
set PATH=%PATH%;C:\Users\"Aqui seu usuario"\AppData\Roaming\npm;
*/