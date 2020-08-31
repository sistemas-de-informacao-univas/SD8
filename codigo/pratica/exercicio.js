var http = require('http');
var fs = require('fs');
var url = require('url');

var server = http.createServer(function(request, response){

    response.writeHead(200, {'Content-type':'text/html; charset=UTF-8;'});

    if(request.url == "/"){
         fs.readFile('index.html', function(err, html){
            response.write(html);
         }
    }

    if(request.url == "/formulario"){
         fs.readFile('form.html', function(err, html){
            response.write(html);
         }
    }

    if(request.url == "/dados"){
        var result = url.parse(request.url, true);

       response.write("<html><body>");
       response.write("<h1>Cadastro efetuadp com sucesso</h1>");
       for(var key in result.query){
         response.write("<h2>"+key+" : "+result.query[key]+"</h2>");
       }
       response.write("</body></html>");
       
    }

    response.end();

 });
 server.listen(3000, function(){
   console.log('Servidor Pronto');
 });