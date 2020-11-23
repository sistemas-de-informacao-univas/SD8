var model_contatos = require('../models/contatos');

var controller = {};

module.exports = function() {
	var contatos = model_contatos();

	controller.home = function(req, res) {
		res.render('../../public/home.ejs');
	};

	controller.agenda = function(req, res) {
		res.render('index', 
			{ cabecalho: 'Agenda de Contatos',
			  contacts: contatos 
			}
		);
	};

	controller.novo_form = function(req, res) {
		res.render('contato_novo', { contacts: null });
	};

	controller.novo_salva = function(req, res) {
		var nome1 = req.body.nome;
		var email1 = req.body.email;
		var pessoa = { nome: nome1, email: email1 };
		console.log('adicionar: ' + pessoa);
		contatos.push(pessoa);
		res.redirect('/agenda') ;
	};

	controller.atualiza_form = function(req, res) {
		id = req.params.id;
		res.render('contato_update', { contacts: contatos, id: id });
	};

	controller.atualiza_salva = function(req, res) {
		var id1 = req.body.id;
		var nome1 = req.body.nome;
		var email1 = req.body.email;

		contatos[id1] = { nome: nome1, email: email1 };

		res.redirect('/agenda') ;
	};

	controller.deleta = function(req, res) {
		id = req.params.id;
		contatos.splice(id, 1);
		res.redirect('/agenda') ;
	};

	controller.contatos = function(req,res) {
		res.json(contatos);
	};

	return controller;
};
