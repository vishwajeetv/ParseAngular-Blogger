demoApp.service('blogService', function ($rootScope)
{



//
    var blogs  = [];
//
//

		this.addBlog = function(titleToAdd, postToAdd)
		{
            var BlogPost = Parse.Object.extend("BlogPost");
            var blogPost = new BlogPost();

            blogPost.set("title", titleToAdd);
            blogPost.set("post", postToAdd);


            blogPost.save(null, {
                success: function(blogPost) {

                    $rootScope.$apply(function () {


                        blogs.push(
                            {
                                title: titleToAdd,
                                post: postToAdd
                            });
                    });
                   
                    console.log(blogPost.id);
                },
                error: function(blogPost, error) {
                    // Execute any logic that should take place if the save fails.
                    // error is a Parse.Error with an error code and description.
                    alert('Failed to create new object, with error code: ' + error.description);
                }
            });

		};
    this.getBlogs = function () {


        var BlogPost = Parse.Object.extend("BlogPost");
        var blogPost = new BlogPost();

        var query = new Parse.Query(BlogPost);


        query.find({
            success: function(results) {

                $rootScope.$apply(function () {

                for (var i = 0; i < results.length; i++)
                {

                    blogs.push(
                        {
                            title : results[i].get("title"),
                            post : results[i].get("post")
                        });

                }
                console.log(blogs);
                });
            },
            error: function(error) {
                alert("Error: " + error.code + " " + error.message);
            }
        });
        return blogs;
    };
});
