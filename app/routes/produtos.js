
module.exports = function(app){
	app.get('/produtos',function(req,res){
		var connection = app.infra.connectionFactory();
		var productsDB = new app.infra.productsDB(connection);
		productsDB.list(function(err,result){
			res.render('lista',{lista : result});
		});
		connection.end();
		
	});	

	app.get('/produtos/remove',function(){
		var connection = app.infra.connectionFactory();
		var produto = productDB.load(id,callback);
		var productsDB = new app.infra.productsDB(connection);
		if(produto){
			productDB.remove(pruduto,callback);
		}
		productsDB.list(function(err,result){
			res.render('lista',{lista : result});
		});
		connection.end();
	});	
}

