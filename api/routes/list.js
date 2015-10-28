var async = require('async');
var settings = require('../settings/settings.js');
var Post = require('../models/post.js');
var List = require('../models/list.js');



module.exports = function(app){
  app.get('/getArchive',function(req,res,next){
    if(req.sessionID){
      var list = new List({
        pageIndex:1,
        pageSize:settings.pageSize,
        queryObj:{}
      });
      list.getArchive(function(err,archiveArray){
        if(!(err)&&archiveArray){
          res.json(archiveArray);
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

  app.get('/getPageCount',function(req,res,next){
    if(req.sessionID){
      var list = new List({
        pageIndex:1,
        pageSize:settings.pageSize,
        queryObj:{}
      });
      list.getCount(function(err,count){
        if(!(err)&&(count!=0)){
          res.json(Math.ceil(count/settings.pageSize));
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

  app.get('/',function(req,res,next){
    if(req.sessionID){
      var list = new List({
        pageIndex:1,
        pageSize:settings.pageSize,
        queryObj:{}
      });
      list.getList(function(err,docs){
        if(!(err)&&docs){
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
  /*app.get('/',function(req,res,next){
    if(req.sessionID){
      var list = new List({
        pageIndex:1,
        pageSize:settings.pageSize,
        queryObj:{}
      });
      var post = new Post({});
      async.parallel({
        getAllTag:function(done){
          post.getAllTag(function(err,docs){
            if(!(err)&&docs){
              done(null,docs);
            }else{
              done(null);
            }
          });
        },
        getArchive:function(done){
          list.getArchive(function(err,archiveArray){
            if(!(err)&&archiveArray){
              done(null,archiveArray);
            }else{
              done(null);
            }
          });
        },
        getPageCount:function(done){
          list.getCount(function(err,count){
            if(!(err)&&(count!=0)){
              done(null,Math.ceil(count/settings.pageSize));
            }else{
              done(null);
            }
          });
        },
        getList:function(done){
          list.getList(function(err,docs){
            if(!(err)&&docs){
              done(null,docs);
            }else{
              done(null);
            }
          });
        }
      },function(asyncErr,asyncResult){
        if(!asyncErr){
          res.render('list',{
            list:asyncResult.getList,
            archiveList:asyncResult.getArchive,
            tags:asyncResult.getAllTag,
            pagination:{
              pageIndex:1,
              pageCount:asyncResult.getPageCount
            }
          });
        }else{
          //404
          res.end();
        }
      });
    }
  });*/

}