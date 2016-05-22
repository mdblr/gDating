(function() {
  angular
    .module('gDating', ['ngRoute'])
    .config(config);

  config.$inject = ['$routeProvider', '$locationProvider'];

  function config($routeProvider, $locationProvider) {
    $routeProvider
      .when('/home', {
        templateUrl: 'app/partials/home.html',
        controllerAs: 'Main',
        controller: 'Main'
      })
      .when('/logout', {
        templateUrl: 'app/partials/logout.html',
        controllerAs: 'Main',
        controller: 'Main'
      })
      .otherwise({
        redirectTo: '/home'
      });

    $locationProvider.html5Mode(true);
  }
})();
