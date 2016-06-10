(function() {
  angular
    .module('gDating')
    .factory('Users', Users);


  Users.$inject = ['$http', '$window', '$rootScope'];

  function Users($http, $window, $rootScope) {

    var gDates = 'http://galvanize-student-apis.herokuapp.com/gdating';
    var resource = ['members', 'auth', 'register', 'login'];
    var current_user = {};

    var everyUser = function () {
      return $http.get(`${gDates}/${resource[0]}?limit=20&offset=5`);
    }

    var signup = function(user) {
      return $http.post(`${gDates}/${resource[1]}/${resource[2]}`, user);
    }

    var logout = function() {
      $window.localStorage.clear();
    }

    var login = function(user) {
      user.email = user.email.toLowerCase();
      return $http.post(`${gDates}/${resource[1]}/${resource[3]}`, user);
    }

    var setCurrentUser = function(user) {

      var token = user.data.data.token;
      $window.localStorage.setItem("token",token);
      $window.localStorage.setItem("user",JSON.stringify(user));

    }

    var getCurrentUser = function() {
      current_user = JSON.parse($window.localStorage.getItem("user"));
      return current_user;
    }

    var getProfile = function(user) {
      $http.get(`${gDates}/${user._id}`);
    }

    var searchBySlug = function(slug) {
      $http.get(`${gDates}/search/${slug}`);
    }

    var searchProfiles = function(query) {
      $http.get(`${gDates}/search`, query);
    }

    var updateProfile = function(user) {
      $http.put(`${gDates}/${user._id}`);
    }

    var deleteAccount = function(user) {
      $http.delete(`${gDates}/${user._id}`);
    }

    return {
      everyUser,
      signup,
      setCurrentUser,
      logout,
      login,
      getCurrentUser,
      deleteAccount,
      updateProfile,
      searchProfiles,
      searchBySlug,
      getProfile
    }

  }

})();
