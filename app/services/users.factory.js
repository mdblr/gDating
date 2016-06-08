(function() {
  angular
    .module('gDating')
    .factory('Users', Users)


  Users.$inject = ['$http', '$window'];

  function Users($http, $window) {

    var gDates = 'http://galvanize-student-apis.herokuapp.com/gdating';
    var resource = ['members', 'auth', 'register', 'login'];

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

    var setCurrentUser = function(data) {
        let {token,user} = data.data
        $window.localStorage.setItem("token",token);
        $window.localStorage.setItem("user",JSON.stringify(user));
        console.log(token, user, data.data)
    }

    return {
      everyUser,
      signup,
      setCurrentUser,
      logout,
      login
    }

  }


})();
