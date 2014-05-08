blogApp.service('blogService',['$q','$rootScope', function ($q, $rootScope) {
    var blogs = [];

    this.addBlog = function (blogToPost) {
        var BlogPost = Parse.Object.extend("BlogPost");
        var blogPost = new BlogPost();
        blogPost.set("title", blogToPost.title);
        blogPost.set("post", blogToPost.post);
        blogPost.set("post", blogToPost.author);

        var deferred = $q.defer();

        blogPost.save(null, {

            success: function (blogPost) {
                deferred.resolve();
            },
            error: function (blogPost, error) {
                deferred.reject();
            }
        });
        return deferred.promise;
    };

    this.getBlogs = function () {
        var BlogPost = Parse.Object.extend("BlogPost");
        var blogPost = new BlogPost();
        var query = new Parse.Query(BlogPost);
        query.find({
            success: function (results) {
                $rootScope.$apply(function () {
                    for (var i = 0; i < results.length; i++) {
                        blogs.push(
                            {
                                title: results[i].get("title"),
                                post: results[i].get("post"),
                                author: results[i].get("author"),
                                updatedAt: results[i].get("updatedAt")
                            });
                    }
                });
            },
            error: function (error) {
                console.log(error);
            }
        });
        return blogs;
    };
}]);
