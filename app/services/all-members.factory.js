(function() {
  angular
    .module('gDating')
    .factory('MembersAll', MembersAll)


  MembersAll.$inject = ['$http'];

  function MembersAll($http) {

    var members = {};
    var test = [];
    members.url = 'http://galvanize-student-apis.herokuapp.com/gdating/members';
    members.get = function () {
      return $http.get(members.url)
              .then( function(success) {
                return Object.assign([], success.data.data);
              })
              .catch( function(error) {
                return error;
              });
    }

    return members;

  }


})();
