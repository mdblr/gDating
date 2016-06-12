(function() {
  angular
      .module('gDating')
      .controller('LogIn', LogIn)

  LogIn.$inject = ['$location', 'Users', '$rootScope']


  function LogIn($location, Users, $rootScope) {

        var vm = this;
        vm.creds = {};

        vm.login = function(creds) {
          Users.login(creds)
          .then(function(data) {
            Users.setCurrentUser(data);
            // $location.path(`/members/${Users.member._id}`);
            $location.path(`/members`);
          })
          .catch( function(err) {
            // var error = err.name;
            $rootScope.errors = data.name;
            return error;

            // $location.path('/login')
          })
      }
  }

})();
