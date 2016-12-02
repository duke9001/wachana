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
    res.render('dashboard', {
      "rows" : rows,
      layout : 'admin'
    });
  });
});

router.get('/new' , function(req, res, next){
  res.render('new');
});

router.post('/new' , function(req, res, next){
  // get form Values
  var title = req.body.title;
  var description = req.body.description;
  var service = req.body.client;
  var projectdate = req.body.projectdate;
  
  //check Image
  if(req.files.projectimage){
    var projectImageOriginalName = req.files.projectimage.originalname;
    var projectImageName = req.files.projectimage.name;
    var projectImageMime = req.files.projectimage.mimetype;
    var projectImagePath = req.files.projectimage.path;
    var projectImageExt = req.files.projectimage.extention;
    var projectImageSize = req.files.projectimage.size;
  } else {
    var projectImageName = "noimage.jpg";
  }
  
  //form field validation
  req.checkBody('title', 'Title field is required').notEmpty();
  req.checkBody('service', 'service field is required').notempty();
  
  var errors = req.validationErrors();
  
  //check for errors
  var errors = req.validationErrors();
});

module.exports = router;
