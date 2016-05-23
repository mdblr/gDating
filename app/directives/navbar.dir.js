(function() {
  angular
    .module('gDating')
    .directive('deNav', deNav)

  function deNav() {

    var directive = {
      templateUrl: 'app/partials/navbar.html'
    }

    return directive;
  }
})();
