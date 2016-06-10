(function() {
  angular
    .module('gDating')
    .factory('Matches', Matches);

    Matches.$inject = ['$http'];

    var gDates = 'http://galvanize-student-apis.herokuapp.com/gdating';
    var resource = 'matches';

    function Matches($http) {

      var getMatches = function(user) {
        $http.get(`${gDates}/${user._id}/${resource}`);
      };

      var addMatch = function(user) {
        $http.post(`${gDates}/${user._id}/${resource}`);
      };

      var deleteMatch = function(user, match_id) {
        $http.delete(`${gDates}/${user._id}/${resource}/${match_id}`);
      };

      return {
        getMatches,
        addMatch,
        deleteMatch
      }
    }

})();
