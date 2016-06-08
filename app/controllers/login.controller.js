(function() {
  angular
      .module('gDating')
      .controller('LogIn', LogIn)

  LogIn.$inject = ['$location', 'Users']


  function LogIn($location, Users) {

        var vm = this;
        vm.creds = {};

        vm.login = function(creds) {
          Users.login(creds)
          .then(function(data) {
            Users.setCurrentUser(data);
            $location.path('/members');
          })
          .catch(function(data) {
            vm.errors = data.name;
            throw vm.errors;
          })
      }
  }

})();
