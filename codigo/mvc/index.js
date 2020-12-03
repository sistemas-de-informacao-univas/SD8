// carregamento de módulos
var config = require('./config/app.js');

var app = config();

// inicialização do servidor
app.listen(app.get('port'), function() {
	console.log('Servidor funcionando na porta ' + app.get('port'));
});
