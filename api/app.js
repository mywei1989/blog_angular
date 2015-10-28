var express = require('express');

var cookieParser = require('cookie-parser');
var session = require('express-session');
var settings = require('./settings/settings');

var list_routes = require('./routes/list');
var post_routes = require('./routes/post');

var app = express();
app.enable('strict routing');
//app.use(cookieParser());
app.use(session({
  name:settings.cookieName,
  secret:settings.cookieSecret,
  cookie:{
    maxAge: 172800000 //两天
  }
}));


app.use('*',function(req,res,next){
  res.set({
    'Content-Type':'application/json;charset=UTF-8'
  });

  res.header('Access-Control-Allow-Headers', 'Content-Type,api_key,Authorization');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,DELETE,PUT,PATCH,OPTIONS');
  res.header('Access-Control-Allow-Origin', '*');
  next();
});


list_routes(app);
post_routes(app);

module.exports = app;