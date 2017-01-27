var TargetPractice = angular.module("TargetPractice", ['ui.router']);

TargetPractice.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

TargetPractice.factory('_', ['$window', function($window) {
  return $window._;
}]);
