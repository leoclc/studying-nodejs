
module.exports = function(app){
	app.get('/produtos',function(req,res){
		var connection = app.infra.connectionFactory();
		var productsDAO = new app.infra.ProductDAO(connection);
		productsDAO.list(function(err,result){
			res.render('lista',{lista : result});
		});
		connection.end();
		
	});	

	app.get('/produtos/remove',function(){
		var connection = app.infra.connectionFactory();
		var produto = productsDAO.load(id,callback);
		var productsDAO = new app.infra.ProductDAO(connection);
		if(produto){
			productsDAO.remove(pruduto,callback);
		}
		productsDAO.list(function(err,result){
			res.render('lista',{lista : result});
		});
		connection.end();
	});	
}

