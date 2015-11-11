'use strict';

var blogApp = angular.module('blogApp', [
  /*'ngRoute',
  'blogAppControllers'*/
  /*'blogAppControllers',*/
  'ui.router'
]);

blogApp
.config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
  function($stateProvider,$urlRouterProvider,$locationProvider) {
    $urlRouterProvider.otherwise("/");
     $stateProvider
        .state("index", {
            url: "/",
            views:{
              "list":{
                templateUrl:"../app/partials/list.html",
                controller:"listCtrl"
              },
              "tags":{
                templateUrl:"../app/partials/tags.html",
                controller:"tagsCtrl"
              },
              "archives":{
                templateUrl:"../app/partials/archives.html",
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