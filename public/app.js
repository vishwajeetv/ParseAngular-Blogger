
var blogApp = angular.module('blogApp' , ['ngResource','ngRoute','ui.bootstrap']);

blogApp.config(blogRouter);

function blogRouter ($routeProvider)
{
    $routeProvider.
        when('/', {
            controller: 'authenticationController',
            templateUrl: 'views/authenticationView.html'
        }).
        when('/blog', {
            controller: 'blogController',
            templateUrl: 'views/blogView.html'
        }).
        otherwise({
            redirectTo: '/'
        });
}

