blogApp.controller('authenticationController', ['$scope','authenticationService', function ($scope, authenticationService)
{
    $scope.newUser = {};
    $scope.checkUser = {};
    $scope.registrationViewURL = 'views/registrationView.html'
    $scope.loginViewURL = 'views/loginView.html'


    $scope.radioModel = 'register';

    $scope.scenario = 'register';
    $scope.currentUser = Parse.User.current();



    $scope.signUp = function() { authenticationService.registerUser($scope.newUser) };


    $scope.logIn = function() { authenticationService.loginUser($scope.checkUser) };

    $scope.logOut = function(form) {
        Parse.User.logOut();
        $scope.currentUser = null;
    };

}]);

