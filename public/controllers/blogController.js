
blogApp.controller('blogController', ['$scope', '$location', 'blogService', 'authenticationService',
    function ($scope, $location, blogService, authenticationService) {

        $scope.isCollapsed = true;

        $scope.newBlog = {};
    $scope.currentUser = authenticationService.getCurrentUser();
        $scope.totalItems;

        $scope.blogs =
            blogService.getBlogs().then(function (blogsData) {
                $scope.blogs = blogsData;
                $scope.totalItems = $scope.blogs.length;
                $scope.totalItemsToDisplay = $scope.totalItems;
            });


        $scope.currentPage = 1;
        $scope.maxSize = 5;
        $scope.blogLimitEnd = $scope.currentPage * 3;
        $scope.itemsPerPage = 3;
        $scope.setPage = function () {
            $scope.blogLimitEnd = $scope.currentPage * 3;
        };

        $scope.pageChanged = function() {
            console.log('Page changed to: ' + $scope.currentPage);
        };

    $scope.myBlogs =
        blogService.getMyBlogs($scope.currentUser).then(function (blogsData) {
            $scope.myBlogs = blogsData;
            $scope.myTotalItems = $scope.blogs.length

        });

        $scope.alerts = [

        ];

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
                    $scope.isCollapsed = true;
                    $scope.alerts.push({type: 'success' ,msg: "Successfully Posted! Cheers!"});
                    $timeout($scope.alerts.splice(0, 1), 2000);
                });
        });
    };

    $scope.logOut = function () {
        authenticationService.logOut();
            $location.path("/");

    };


}]);

