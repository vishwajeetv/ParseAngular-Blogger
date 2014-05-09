blogApp.service('blogService',['$q','$rootScope', function ($q, $rootScope) {

    var blogs = [];
    this.addBlog = function (blogToPost) {
        var BlogPost = Parse.Object.extend("BlogPost");
        var blogPost = new BlogPost();
        blogPost.set("title", blogToPost.title);
        blogPost.set("post", blogToPost.post);
        blogPost.set("author", blogToPost.author);

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

        var deferred = $q.defer();

        query.find({
            success: function (results) {
                $rootScope.$apply(function () {
                    deferred.resolve(results);
                });
            },
            error: function (error) {
                console.log(error);
                deferred.reject();
            }
        });
        return deferred.promise;
    };

    this.getMyBlogs = function (user) {
        var BlogPost = Parse.Object.extend("BlogPost");
        var blogPost = new BlogPost();
        var query = new Parse.Query(BlogPost);
        query.equalTo("author", user.get('username'));
        var deferred = $q.defer();

        query.find({
            success: function (results) {
                $rootScope.$apply(function () {
                    deferred.resolve(results);
                });
            },
            error: function (error) {
                console.log(error);
                deferred.reject(error);
            }
        });
        return deferred.promise;
    };

}]);
