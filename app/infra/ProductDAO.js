function ProductDAO(connection){
	this._connection = connection;
}

ProductDAO.prototype.list = function(callback){
	this._connection.query("select * from produtos", callback);
}

ProductDAO.prototype.save = function(product,callback){
	this._connection.query("insert into produtos set ?",product, callback);
}

module.exports = function (){
	return ProductDAO;
}