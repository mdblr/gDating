(function() {
  angular
    .module('gDating')
    .directive('dirDash', dirDash);

    dirDash.$inject = ['$window'];

    function dirDash(Users, $window, $document) {

        var feature, heading, nav, current;

        var directive = {
          templateUrl: 'app/partials/dashboard.html',
          link: link
        }

        return directive;

        function link(scope, element, attrs) {

          heading = document.getElementById('heading');
          nav = heading.getElementsByTagName('a');

          angular.element($window).ready(function() {
            current = document.getElementById('all');
          });


          for (var i = 0; i < 5; i++) {

            nav[i].addEventListener('click', function() {

              feature = document.getElementById(this.dataset.users.toString());
              angular.element(feature).toggleClass('ng-hide');

              //hides current view, sets new 'tab' to current - see line 22.
              angular.element(current).toggleClass('ng-hide')
              current = feature;

            });
          }
        }
      }
})();
