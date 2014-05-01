demoApp.controller('authenticationController', ['$scope', 'blogService', function ($scope, blogService)
{
    $scope.radioModel = 'register';

    $scope.scenario = 'register';
    $scope.currentUser = Parse.User.current();

    $scope.signUp = function(form) {
        var user = new Parse.User();
        user.set("email", form.email);
        user.set("username", form.username);
        user.set("password", form.password);

        user.signUp(null, {
            success: function(user) {
                $scope.currentUser = user;
                $scope.$apply();
            },
            error: function(user, error) {
                alert("Unable to sign up:  " + error.code + " " + error.message);
            }
        });
    };

    $scope.logIn = function(form) {
        Parse.User.logIn(form.username, form.password, {
            success: function(user) {
                $scope.currentUser = user;
                $scope.$apply();
            },
            error: function(user, error) {
                alert("Unable to log in: " + error.code + " " + error.message);
            }
        });
    };

    $scope.logOut = function(form) {
        Parse.User.logOut();
        $scope.currentUser = null;
    };

    $scope.blogs = blogService.getBlogs();

		$scope.addBlog = function()
		{
			var title = $scope.newBlog.title;
			var post = $scope.newBlog.post;
            blogService.addBlog(title, post);
			
		};
}]);
