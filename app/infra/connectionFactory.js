var mysql = require('mysql');

function createDbConnection(){
return mysql.createConnection({
			host : 'localhost',
			user : 'root',
			password : '',
			database : 'nodejs'
		});
}

module.exports = function (){
	return createDbConnection;
}