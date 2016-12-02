var express = require('express');
var router = express.Router();
var mysql      = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '123',
  database : 'wachana'
});
 
connection.connect();

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  connection.query('SELECT * FROM w_projects', function(err, rows ,fields){
    if(err) throw err;
    res.render('index', {
      "rows" : rows
    });
  });
});

module.exports = router;
