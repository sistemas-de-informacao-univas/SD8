var express = require('express');
var bodyParser = require('body-parser');
var rotas = require('../app/routes/rotas')

module.exports = function() {
	var app = express();
	
	// configurações
	app.set('port', 3000);
	app.set('view engine', 'ejs');
	app.set('views', './app/views');

	// middleware
	app.use(bodyParser.urlencoded({extended: true}));
	app.use(express.static('./public'));

	app.get('/', function(req, res) {
		res.render('../../public/home.ejs');
	});

	rotas(app);

	return app;
};
