blogApp.controller('chatController', ['$scope', '$location','$firebase','authenticationService',
    function ($scope, $location, $firebase, authenticationService)
    {
        $scope.navbarURL = 'views/navbar.html';
        $scope.blogActive="";
        $scope.chatActive="active";

        $scope.currentUser = authenticationService.getCurrentUser();

        if($scope.currentUser == null)
        {
            $location.path('/');
        }
        var ref = new Firebase("https://brilliant-fire-9574.firebaseio.com/");
        $scope.messages = $firebase(ref);

        $scope.addMessage = function(e) {
            if (e.keyCode != 13) return;
            $scope.messages.$add({from: $scope.currentUser.get('username'), body: $scope.msg});
            $scope.msg = "";
        };

    }]);