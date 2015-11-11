'use strict';

var blogAppControllers = angular.module('blogApp');

blogAppControllers.controller('listCtrl', ['$scope', '$location', function($scope, $location) {
  console.log($location);
}]);


blogAppControllers.controller('tagsCtrl', ['$scope', '$location', function($scope, $location) {
  console.log($location);
}]);

blogAppControllers.controller('archivesCtrl', ['$scope', '$location', function($scope, $location) {

}]);