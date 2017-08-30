function ProductDAO(connection){
	this._connection = connection;
}

ProductDAO.prototype.lista = function(callback){
	this._connection.query("select * from produtos", callback);
}

ProductDAO.prototype.remove = function(callback){
	this._connection.query("delete from produtos where", callback);
}

module.exports = function (){
	return new ProductDAO;
}