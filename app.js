var demoApp = angular.module('demoApp' , ['ngRoute','ui.bootstrap']);

demoApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        controller: 'simpleController',
	        templateUrl: 'views/view1.html'
      }).
      when('/view2', {
       controller: 'simpleController',
	        templateUrl: 'views/view2.html'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);
