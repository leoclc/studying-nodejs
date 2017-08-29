var http = require('http');

var server = http.createServer(function (req, res){
	if(req.url == "/produtos"){
		res.end("<html><body><h1>Listando Produtos</h1></body></html>");	
	} 
	res.end("<html><body><h1>Home</h1></body></html>");	
});

server.listen(3000);

console.log("servidor rodando");