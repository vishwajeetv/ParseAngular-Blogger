blogApp.controller('blogController', ['$scope', 'blogService', function ($scope, blogService)
{
    $scope.blogs = blogService.getBlogs();

    $scope.addBlog = function()
    {
        var title = $scope.newBlog.title;
        var post = $scope.newBlog.post;
        blogService.addBlog(title, post);

    };
}]);
