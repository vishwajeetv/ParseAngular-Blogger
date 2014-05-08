blogApp.controller('blogController', ['$scope', '$location', 'blogService', 'authenticationService', function ($scope, $location, blogService, authenticationService) {
    $scope.newBlog = {};

    $scope.blogs = blogService.getBlogs();

    $scope.addBlog = function () {

        var title = $scope.newBlog.title;
        var post = $scope.newBlog.post;
        blogService.addBlog(title, post);
    };

    $scope.logOut = function () {

        authenticationService.logOut();
        $location.path("/");
    };

}]);
