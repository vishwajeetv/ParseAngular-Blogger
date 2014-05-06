blogApp.service('authenticationService', function ($rootScope)
{

    this.registerUser = function(newUser)
    {
        var user = new Parse.User();
        user.set("email", newUser.email);
        user.set("username", newUser.username);
        user.set("password", newUser.password);

        user.signUp(null, {
            success: function(user) {
                $rootScope.$apply(function ()
                {
                    $rootScope.currentUser = user;
                });
            },
            error: function(user, error) {
                alert("Unable to sign up:  " + error.code + " " + error.message);
            }
        });

    };

    this.loginUser = function(checkUser) {
        Parse.User.logIn(checkUser.username, checkUser.password, {
            success: function(user) {
                $rootScope.$apply(function (){
                $rootScope.currentUser = user;
                    console.log(user);
            });
            },
            error: function(user, error) {
                alert("Unable to log in: " + error.code + " " + error.message);
            }
        });
    };

});