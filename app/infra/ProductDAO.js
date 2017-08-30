function ProductDAO(connection){
	this._connection = connection;
}

ProductDAO.prototype.list = function(callback){
	this._connection.query("select * from produtos", callback);
}

module.exports = function (){
	return ProductDAO;
}