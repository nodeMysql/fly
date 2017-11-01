var express = require('express');
var router = express.Router();

var mysql = require('mysql')
var pool = mysql.createPool({
	host:'localhost',
	user:'root',
	password:"123456",
	database:'baby'
})


/* GET home page. */

// LIMIT

router.post('/', function(req, res, next) {
	res.header('Access-Control-Allow-Origin','*')
	
	pool.query("SELECT COUNT(*) FROM fy",function(e,rows,fields){
		res.send(rows)
		
	}) 
		
});


router.post('/list', function(req, res, next) {
	res.header('Access-Control-Allow-Origin','*')
	
	var n=(req.body.num)*2
	
	console.log(n)
	

		
	pool.query("SELECT * FROM fy LIMIT "+n+",2",function(e,rows,fields){
		res.send(rows)
		console.log(rows)
	}) 

});


module.exports = router;
