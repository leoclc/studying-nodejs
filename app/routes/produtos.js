
module.exports = function(app){
	app.get('/produtos',function(req,res){
		var connection = app.infra.connectionFactory();
		var productsDAO = new app.infra.ProductDAO(connection);
		productsDAO.list(function(err,result){
			res.format({
				html : function(){
					res.render('list',{lista : result});
				},
				json : function(){
					res.json(result);
				}
			});
		});
		connection.end();
		
	});	

	app.get('/produtos/json',function(req,res){
		var connection = app.infra.connectionFactory();
		var productsDAO = new app.infra.ProductDAO(connection);
		productsDAO.list(function(err,result){
			res.json(result);
		});
		connection.end();
	});	

	app.get('/form',function(req,res){
		res.render('form');		
	});	

	app.post('/products',function(req,res){
		var product = req.body;
		var connection = app.infra.connectionFactory();
		var productsDAO = new app.infra.ProductDAO(connection);
		productsDAO.save(product,function(err,result){
			res.redirect('/produtos');
		});
	});	

	app.get('/products/remove',function(){
		var connection = app.infra.connectionFactory();
		var produto = productsDAO.load(id,callback);
		var productsDAO = new app.infra.ProductDAO(connection);
		if(produto){
			productsDAO.remove(pruduto,callback);
		}
		productsDAO.list(function(err,result){
			res.render('list',{lista : result});
		});
		connection.end();
	});	
}

