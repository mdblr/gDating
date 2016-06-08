(function() {
  angular
    .module('gDating')
    .factory('Chats', Chats)

    Chats.$inject = ['$http'];

    var gDates = 'http://galvanize-student-apis.herokuapp.com/gdating';
    var resource = 'conversations';

    function Chats($http) {

      var getChats = function(user) {
        $http.get(`${gDates}/${user._id}/${resource}`);
      };

      var getDialogue = function(user, recipient) {
        $http.get(`${gDates}/${user._id}/${resource}/${recipient._id}`);
      };

      var postMessage = function(user) {
        $http.post(`${gDates}/${user._id}/${resource}`);
      };

      return {
        getChats,
        getDialogue,
        postMessage
      }
    }

})();
