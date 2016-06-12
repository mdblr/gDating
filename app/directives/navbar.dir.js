(function() {
  angular
    .module('gDating')
    .directive('dirNav', dirNav)

  function dirNav() {

    var directive = {
      templateUrl: 'app/partials/navbar.html',
      scope: {
        ctrl : '='
      }
    }

    return directive;

  }

})();
