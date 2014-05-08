

blogApp.controller('blogController', ['$scope', '$location', 'blogService', 'authenticationService', function ($scope, $location, blogService, authenticationService) {

    $scope.newBlog = {};
    $scope.currentUser = authenticationService.getCurrentUser();

    $scope.open = function (size) {

        var modalInstance = $modal.open({

            controller: ModalInstanceCtrl,
            size: size,
            resolve: {
                items: function () {
                    return $scope.items;
                }
            }
        });
    };

        $scope.blogs =
            blogService.getBlogs().then(function (blogsData) {
                $scope.blogs = blogsData;

            });

    $scope.myBlogs =
        blogService.getMyBlogs($scope.currentUser).then(function (blogsData) {
            $scope.myBlogs = blogsData;

        });

    var blogToPost ={};


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

