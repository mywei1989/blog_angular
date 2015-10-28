var async = require('async');
//var User = require('../models/user.js');
//var List = require('../models/list.js');
var Post = require('../models/post.js');

module.exports = function(app){
  app.get('/getAllTag',function(req,res,next){
    if(req.sessionID){
      var post = new Post({});
      post.getAllTag(function(err,docs){
        if(!(err)&&docs!=null){
          res.json(docs);
          res.end();
        }else{
          res.json({status:404,message:''});
          res.end();
        }
      });
    }else{
      res.end();
    }
  });

};