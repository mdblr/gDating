(function() {
  angular
      .module('gDating')
      .controller('Register', Register)

  Register.$inject = ['$location', 'Users']

  function Register($location, Users, $window) {

        var vm = this;
        vm.reg = {};

        vm.signup = function(reg) {
          reg.address.geo = { lng: 0, lat: 0 }
          Users.signup(reg)
          .then(function(data) {
            Users.setCurrentUser(data);
            $location.path('/members');
          })
          .catch(function(data) {
            vm.error = data.name;
            throw vm.errors;
          })
      }
  }

})();
