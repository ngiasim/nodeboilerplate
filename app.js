var express = require('express');
var http = require('http');
var path = require('path');
var app = express();
var userController  = require('./app/controllers/userController.js');
var model = require('./app/models/index');
var bodyParser = require('body-parser');


var router = express.Router();

// some environment variables
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.set('view engine', 'jade');
app.use(router);



http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
	
  router.get('/users/:id',(req,res,next)=>{
          next();
    }, userController.users);


	// router.get('/users',(req,res)=>{
	// 	console.log("sss");
 //    },userController.users);

 
  // router.get('/getallUser',(req,res,next)=>{
  //       next();
  //   },userController.getallUser);

    router.post('/getallUser',(req,res,next)=>{ 
        next();
    },userController.getallUser);



  router.post('/register',(req,res)=>{
    
  });

  router.get('/asad', function(req, res){
    res.send("Hello World from server.js");
  });

  router.get('/asad/:sku', function(req, res){
    res.send(req.params.sku);
  });


console.log("Server running on the port 3000");