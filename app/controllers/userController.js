var model = require('../models/index');

var userController = {
  	getallUser: (req, res) =>
  	{
 console.log("come here");
      res.send(req.body); 
	    // console.log("come here");
	    // model.User.findAndCountAll({
     //           where: {
                  
     //           },
     //           limit: 10
     //        })
     //        .then(result => {
     //          res.send(result);
     //        });
	},
	users: (req, res) =>
  	{
  		console.log("raza");
      model.User.findById(req.params.id).then((result)=>{
          if (result){
              res.send(result); 
            }
          else
              res.json("Role Not Assigned");
        });
  }
}
module.exports = userController;