(function() {
  angular
    .module('gDating')
    .controller('User', User)

  function User(MembersAll) {
    var vm = this;
    var test = MembersAll.get();

    console.log(test);
    // console.log(MembersAll.members.get);
    // MembersAll.get
    // .then(function(data) {
    //     console.log(data);
    //     vm.members = data;
    //   })
    // .catch(function(error) {
    //   vm.members = error;
    // });

    console.log('user controller')
  }

})();
