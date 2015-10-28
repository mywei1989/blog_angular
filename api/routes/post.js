var async = require('async');
//var User = require('../models/user.js');
//var List = require('../models/list.js');
var Post = require('../models/post.js');

module.exports = function(app){

  app.get('/getAllTag',function(req,res,next){
    console.log(1);
    if(req.sessionID){
      var post = new Post({});
      post.getAllTag(function(err,docs){
        if(!(err)&&docs){
          console.log(docs);
          res.json(docs);
          res.end();
        }
      });
    }else{
      console.log(2);
      res.end();
    }
  });

};