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

                deferred.reject(error);
            }
        });
        return deferred.promise;
    };

    this.getCurrentUser = function(){
        var currentUser;
        currentUser = Parse.User.current();
        return currentUser;
    };

    this.loginUser = function (checkUser) {
        var deferred = $q.defer();
        Parse.User.logIn(checkUser.username, checkUser.password, {
            success: function (user) {
                deferred.resolve(user);
            },
            error: function (user, error) {
                deferred.reject(error);
            }
        });
        return deferred.promise;
    };

    this.logOut = function () {
        Parse.User.logOut();
        return true;
    };

}]);