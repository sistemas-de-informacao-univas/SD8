var express = require('express');
var bp = require('body-parser');
var app = express();

app.use(bp.urlencoded({
	extended: true
}));

app.get('/formulario', function (req, res) {
  var html = '';
  html += '<form action="/dados" method="post">';
  html += '<label>Qual é o seu nome: <input type="text" name="nome"></label>';
  html += '<button type="submit">Enviar</button>';
  html += '</form>';
  res.send(html);
});

app.post('/dados', function(req, res){
	var nome = req.body.nome;
	res.send('Nome: '+nome);
});

app.listen(3000);