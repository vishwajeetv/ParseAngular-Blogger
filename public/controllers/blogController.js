blogApp.controller('blogController', ['$scope', '$location', 'blogService', 'authenticationService', function ($scope, $location, blogService, authenticationService) {

    $scope.newBlog = {};


        $scope.blogs =
            blogService.getBlogs().then(function (blogsData) {
                $scope.blogs = blogsData;
                console.log(blogsData);
            });


    var blogToPost ={};
    $scope.currentUser = authenticationService.getCurrentUser();

    $scope.addBlog = function () {
        blogToPost.title = $scope.newBlog.title;
        blogToPost.post = $scope.newBlog.post;
        blogToPost.author = $scope.currentUser.get('username');

        blogService.addBlog(blogToPost).then(function () {
            $scope.newBlog.title = "";
            $scope.newBlog.post = "";
            $scope.blogs =
                blogService.getBlogs().then(function (blogsData) {
                    $scope.blogs = blogsData;
                });
        });
    };

    $scope.logOut = function () {
        authenticationService.logOut();
            $location.path("/");

    };
}]);
