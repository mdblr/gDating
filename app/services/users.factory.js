(function() {
  angular
    .module('gDating')
    .factory('Users', Users);


  Users.$inject = ['$http', '$window', '$rootScope'];

  function Users($http, $window, $rootScope) {

    var gDates = 'http://galvanize-student-apis.herokuapp.com/gdating';
    var resource = ['members', 'auth', 'register', 'login'];
    var member = {};

    var everyUser = function () {
      return $http.get(`${gDates}/${resource[0]}`);
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
        // let {token,user} = data.data
        var token = user.data.data.token;
        $window.localStorage.setItem("token",token);
        $window.localStorage.setItem("user",JSON.stringify(user));
        member = user.data.data.user;
        //
        console.log('member', member);
    }

    var getCurrentUser = function() {
      // console.log(member.data.user)
      // return Object.assign(user, data.data)
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
