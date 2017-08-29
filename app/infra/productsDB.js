module.exports = function (){
	return function(connection){
		this.list = function(callback){
			connection.query("select * from produtos", callback);
		}
		this.remove = function(callback){
			connection.query("delete from produtos where", callback);
		}
		return this;
	}
}