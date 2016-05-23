(function() {
  angular
    .module('gDating')
    .controller('User', User)

  function User(MembersAll) {
    var vm = this;
    var get_member_profiles = MembersAll.get();


    get_member_profiles
      .then(function(data) {
        vm.populate = data;
      })
      .catch(function(error) {
        vm.populate = error;
      });

  }

})();
