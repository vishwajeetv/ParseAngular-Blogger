blogApp.controller('blogController', ['$scope', '$location', 'blogService', 'authenticationService', function ($scope, $location, blogService, authenticationService) {

    $scope.newBlog = {};
    $scope.blogs = blogService.getBlogs();
    var blogPost={};

    $scope.currentUser = authenticationService.getCurrentUser();

    $scope.addBlog = function () {
        blogPost.title = $scope.newBlog.title;
        blogPost.post = $scope.newBlog.post;
        blogPost.author = $scope.currentUser.get('username');
        blogService.addBlog(blogPost).then(function () {
            $scope.newBlog.title = "";
            $scope.newBlog.post = "";
            alert("Post Added Successfully");
        });
    };

    $scope.logOut = function () {

        authenticationService.logOut();
            $location.path("/");

    };
}]);
