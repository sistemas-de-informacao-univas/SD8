var http = require('http');
 var server = http.createServer(function(request, response){
   response.writeHead(200, {"Content-Type": "text/html; charset=UTF-8;"});
   if(request.url == "/"){
     response.write("<html><body><h1>Olá Node.js!</h1>");
     response.write("<a href='/bemvindo'>Bem vindo</a>");
     response.write("</body></html>");
   }else if(request.url == "/bemvindo"){
     response.write("<html><body><h1>Bem-vindo ao Node.js!</h1>");
     response.write("<a href='/'>Olá Node.js</a>");
     response.write("</body></html>");
   }else{
     response.write("<html><body><h1>Página não encontrada!</h1>");
     response.write("<a href='/'>Voltar para o início</a>");
     response.write("</body></html>");
   }
   response.end();
 });
 server.listen(3000, function(){
   console.log('Executando Servidor HTTP');
 });
