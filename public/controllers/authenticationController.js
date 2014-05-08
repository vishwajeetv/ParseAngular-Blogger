blogApp.controller('authenticationController', ['$scope', '$routeParams', '$location', 'authenticationService',
    function ($scope, $routeParams, $location, authenticationService) {
        $scope.newUser = {};
        $scope.checkUser = {};



            $scope.alerts = [

            ];



        $scope.closeAlert = function(index) {
            $scope.alerts.splice(index, 1);
        };

        $scope.loginViewURL = 'views/loginView.html';
        $scope.registrationViewURL = 'views/registrationView.html';
        $scope.loginViewURL = 'views/loginView.html';

        $scope.currentUser = authenticationService.getCurrentUser();

        $scope.closeAlert = function(index) {
            $scope.alerts.splice(index, 1);
        };

        checkAuth();

        function checkAuth() {
            if ($scope.currentUser !== null) {
                $location.path("/blog");
                return true;
            }
        }

        $scope.signUp = function () {

            $scope.alerts.splice(0, 1);
            authenticationService.registerUser($scope.newUser).then(function (user) {
                $scope.currentUser = user;

            },function(error) {
                $scope.alerts.push({type: 'danger' ,msg: error.message});
            })
        };

        $scope.logIn = function () {


                $scope.alerts.splice(0, 1);

            authenticationService.loginUser($scope.checkUser).then(function (user) {
                $scope.currentUser = user;
               checkAuth();

            },function(error) {
                $scope.alerts.push({type: 'danger' ,msg: 'Invalid Username or Password'});
            });
        };

        $scope.logOut = function () {
            authenticationService.logOut(function () {
                $scope.currentUser = null;
                $location.path("/");
            });
        };

    }]);

