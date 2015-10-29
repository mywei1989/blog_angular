'use strict';

var blogApp = angular.module('blogApp', [
  /*'ngRoute',
  'blogAppControllers'*/
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
                controller:function($scope){

                }
              },
              "tags":{
                templateUrl:"../../partials/tags.html",
                controller:function($scope){

                }
              },
              "archives":{
                templateUrl:"../../partials/archives.html",
                controller:function($scope){

                }
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