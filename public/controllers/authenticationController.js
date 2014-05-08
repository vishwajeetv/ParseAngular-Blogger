blogApp.controller('authenticationController', ['$scope', '$routeParams', '$location', 'authenticationService',
    function ($scope, $routeParams, $location, authenticationService) {
        $scope.newUser = {};
        $scope.checkUser = {};
        $scope.registrationViewURL = 'views/registrationView.html'
        $scope.loginViewURL = 'views/loginView.html'

        $scope.radioModel = 'register';

        $scope.currentPath = "/";

        $scope.scenario = 'register';
        $scope.currentUser = Parse.User.current();

        checkAuth();

        function checkAuth() {

            if ($scope.currentUser !== null) {

                $location.path("/blog");
            }
        }

        $scope.signUp = function () {

            authenticationService.registerUser($scope.newUser).then(function (user) {

                $scope.currentUser = user;
                checkAuth();
            })
        };

        $scope.logIn = function () {

            authenticationService.loginUser($scope.checkUser).then(function (user) {

                $scope.currentUser = user;
                checkAuth();
            })
        };

        $scope.logOut = function () {
            authenticationService.logOut(function () {
                $location.path("/");
            });
        };

    }]);

