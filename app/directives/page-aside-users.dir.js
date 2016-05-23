(function() {
  angular
    .module('gDating')
    .directive('deProfileResults', deProfileResults)

  function deProfileResults() {
    var directive = {
      transclude: true,
      templateUrl: 'app/partials/page-aside-users.html'
    }
  }

  return directive;

})();
