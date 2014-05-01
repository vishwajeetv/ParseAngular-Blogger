Parse.initialize("jA3q36liT53yUyWwKO4d3RGtO3J53ionyrexIlRl", "Qb8Y4i7ygWrpyop6RejMNOX5RhSKJXCrEGj9uZoP");

var demoApp = angular.module('demoApp' , ['ngRoute','ui.bootstrap']);

demoApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        controller: 'authenticationController',
	        templateUrl: 'views/authenticationView.html'
      }).
      when('/view2', {
       controller: 'authenticationController',
	        templateUrl: 'views/view2.html'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);
