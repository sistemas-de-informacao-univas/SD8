const http = require('http');
const url = require('url');

const server = http.createServer(
  function (request, response){
    response.writeHead(200, {'Content-type':'text/html; charset=UTF-8;'});
    var dados = url.parse(request.url, true);

    response.write("<h2>recebendo dados</h2>");

    for(var parametros in dados.query){
      response.write(parametros + " = " + dados.query[parametros] + "<br>");
    }
    
    response.end();
  
  }
);

server.listen(3000);
console.log("Servidor esta pronto pra uso");