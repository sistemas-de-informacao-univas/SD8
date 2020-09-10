//FS - File System

const fs = require('fs');

 //criar de arquivo
	//+ open()
		fs.open('texto.txt','w', function(erro, file){
			if(erro) throw erro
			console.log('Arquivo criado');
		});
	//+ writeFile()
		fs.writeFile('texto.txt','boa noite', function(erro){
			if(erro) throw erro
			console.log('Arquivo criado');
		});
	//+ appendFile()
		fs.appendFile('texto.txt','\n aula de sistemas distribuidos', function(erro){
			if(erro) throw erro
			console.log('Arquivo criado');
		});

 //existe
	//+ readFile()
		fs.readFile('texto.txt', 'utf-8', function(erro){
			if(erro){
				console.log('Arquivo não encontrado');
			}else{
				console.log("Arquivo localizado!");	
			}
		});

 //abrir - ler
 	//+ ler(texto) - readFile()
		 fs.readFile('texto.txt', 'utf-8', function(erro, dados){
			if(erro) throw erro;

			var linhas = dados.split(/\r?\n/);
			linhas.forEach(function(parte){
				console.log(parte);
			});

		});

	//+ arquivo(binario)
		var conteudo = fs.createReadStream('texto.txt', {enconding: 'ansi'});

		conteudo.on('data', function(dados){
			process.stdout.write(dados);
		});
		conteudo.on('error', function(erro){
			console.error("Erro ao ler o arquivo %s", erro);
		});
		conteudo.on('close', function(){
			console.log("\n Fim do arquivo");
		});

 //exluir
 	fs.unlink('texto.txt', (erro) => {
		if(erro) throw erro;
			console.log('Arquivo excluido com sucesso!');
		}
	);

 //renomear
	fs.rename('texto2.txt','novo_arquivo.txt', (erro) =>{
			if(erro){
				console.log('Arquivo não encontrado');
			}else{
				console.log("Arquivo renomeado!");	
			}
	});


 //copiar
	fs.copyFile('novo_arquivo.txt', 'texto.txt', (erro) => {
		if(erro){
			console.log('Arquivo não encontrado');
		}else{
			console.log('Arquivo copiado!');	
		}
	});

 //mover 
	var arqbin = fs.createReadStream('novo_arquivo.txt');
	var destino = fs.createWriteStream('copia.txt');
	arqbin.pipe(destino);
	console.log('Arquivo copiado!');

 //pastas

	fs.readdir('pratica', function(erro, arquivos){
		if(erro) throw erro;
			arquivos.forEach(function(nomes){
		});
	});










