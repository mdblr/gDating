(function() {
  angular
    .module('gDating')
    .controller('User', User)

  function User(Users) {
    var vm = this;
    var get_member_profiles = Users.everyUser();


    get_member_profiles
      .then(function(data) {
        vm.populate = data;
      })
      .catch(function(error) {
        vm.populate = error;
      });

  }

})();
