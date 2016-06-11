(function() {
  angular
    .module('gDating')
    .factory('Matches', Matches);

    Matches.$inject = ['$http'];

    var gDates = 'http://galvanize-student-apis.herokuapp.com/gdating';
    var resource = ['members','matches'];

    function Matches($http) {

      var my_favs = {};

      var getMatches = function(user) {
        return $http.get(`${gDates}/${resource[0]}/${user._id}/${resource[1]}`);
      };

      var addMatch = function(new_interest, the_interested) {
        $http.post(`${gDates}/${resource[0]}/${new_interest}/${resource[1]}`, {_match: the_interested})
        .then(function(data) { my_favs = data; console.log(data); });
      };

      var deleteMatch = function(old_interest, the_uninterested) {
        $http.delete(`${gDates}/${resource[0]}/${old_interest}/${resource[1]}/${the_uninterested}`);
      };

      return {
        getMatches,
        addMatch,
        deleteMatch
      }
    }

})();
