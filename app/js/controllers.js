'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('MyCtrl1', ['$scope',function(scope) {
  	scope.hi = "hi";
  	scope.exercises = ["shoulder rotate", "arm raise"];

  }])
  .controller('MyCtrl2', [function() {

  }]);