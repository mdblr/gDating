(function() {
  angular
    .module('gDating')
    .controller('Member', Member);

  Member.$inject = ['Users', 'Matches', 'member_profiles', 'current_user'];

  function Member(Users, Matches, member_profiles, current_user) {

    var vm = this;
    vm.all = member_profiles;
    vm.current_user = current_user;
    vm.id = current_user.data.data.user._id;
    vm.my_matches;

    Matches.getMatches(current_user.data.data.user)
    .then( function(res) {
        vm.my_matches = res;
      }
    );

    vm.favorite = Matches.addMatch;
    vm.unfavorite = Matches.deleteMatch;

    function getPopular() {
      var profiles = vm.all;
      var pop = [];
      for (var i = 0; i < vm.all.length; i++) {
        profiles[i]._matches.length > 4 ? pop.push(profiles[i]) : 0;
      }
      return pop;
    }

    vm.popular = getPopular();

  }

})();
