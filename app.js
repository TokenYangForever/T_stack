var mongo = require('mongodb');	
var host = 'localhost';
//var port = mongo.Connection.DEFAULT_PORT;

var server = new mongo.Server(host,27017,{auto_reconnect:true});
var db = new mongo.Db('node-mongo-examples',server,{safe:true});
db.open(function(err,db){
	if(err) throw err
	else{
		console.log('成功连接数据库');
		db.collection('users',function(err,collection){
			collection.insert({username:"汤阳",firstname:'Token'},
			function(err,doc){
				console.log(doc);
				db.close();
			});
		});
	}
});

