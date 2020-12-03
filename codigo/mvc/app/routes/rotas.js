// rotas
var controller = require('../controllers/contato_controller')();

module.exports = function(app) {
	app.get('/', controller.home);
	app.get('/agenda', controller.agenda);
	app.get('/contatos', controller.contatos);

	app.get('/contatos/novo', controller.novo_form);
	app.post('/contatos/novo', controller.novo_salva);

	app.get('/contatos/atualiza/:id', controller.atualiza_form);
	app.post('/contatos/atualiza', controller.atualiza_salva);

	app.get('/contatos/deleta/:id', controller.deleta);
}