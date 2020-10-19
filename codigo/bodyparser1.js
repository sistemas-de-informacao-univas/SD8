var express = require('express');
var bp = require('body-parser');
var app = express();

app.use(bp.urlencoded({
	extended: true
}));

app.get('/:senha', function (req, res) {
  var codigo = req.params.senha;
  res.send('valor recebido: '+codigo);
});


app.listen(3000);