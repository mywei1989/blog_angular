'use strict';

var blogApp = angular.module('blogApp', [
  /*'ngRoute',
  'blogAppControllers'*/
  'blogAppControllers',
  'ui.router'
]);

blogApp
.config(['$stateProvider', '$urlRouterProvider',
  function($stateProvider,$urlRouterProvider) {
    $urlRouterProvider.otherwise("/");
     $stateProvider
        .state("index", {
            url: "/",
            views:{
              "list":{
                templateUrl:"../../partials/list.html",
                controller:"listCtrl"
              },
              "tags":{
                templateUrl:"../../partials/tags.html",
                controller:"tagsCtrl"
              },
              "archives":{
                templateUrl:"../../partials/archives.html",
                controller:"archivesCtrl"
              }
            }
        });
        /*.state("about", {
            url:"/about",
            templateUrl: "partials/list.html"
        })
        .state("profile", {
            url:"/profile",
            templateUrl: "partials/list.html"
        });*/


  }]);