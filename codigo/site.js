const http = require('http');

const server = http.createServer(
	function (request, response){
		response.writeHead(200, {'Content-type':'text/html'});
		
		response.write("<h1><u><i><br><br><font color='red'>Hello world!</font></i></u></h1>");
		
		response.end();
	
	}
);

server.listen(3000);
console.log("Servidor esta pronto pra uso");