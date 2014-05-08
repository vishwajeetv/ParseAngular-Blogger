blogApp.service('authenticationService', [ '$q', function ($q) {

    this.registerUser = function (newUser) {
        var user = new Parse.User();
        var deferred = $q.defer();

        user.set("email", newUser.email);
        user.set("username", newUser.username);
        user.set("password", newUser.password);

        user.signUp(null, {
            success: function (user) {
                deferred.resolve(user);
            },
            error: function (user, error) {
                alert("Unable to sign up:  " + error.code + " " + error.message);
                deferred.reject();
            }
        });
    };

    this.loginUser = function (checkUser) {
        var deferred = $q.defer();
        Parse.User.logIn(checkUser.username, checkUser.password, {
            success: function (user) {
                deferred.resolve(user);
            },
            error: function (user, error) {
                alert("Unable to log in: " + error.code + " " + error.message);
                deferred.reject();
            }
        });
        return deferred.promise;
    };

    this.logOut = function () {
        Parse.User.logOut();

        $rootScope.currentUser = null;


    };

}]);