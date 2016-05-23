(function() {
  angular
    .module('gDating', ['ngRoute'])
    .config(config);

  config.$inject = ['$routeProvider', '$locationProvider'];

  function config($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/partials/landing.html',
        controllerAs: 'log',
        controller: 'Register'
      })
      .when('/signup', {
        templateUrl: 'app/partials/signup.html',
        controllerAs: 'log',
        controller: 'Register'
      })
      .when('/login', {
        templateUrl: 'app/partials/login.html',
        controllerAs: 'log',
        controller: 'Register'
      })
      .when('/members', {
        templateUrl: 'app/partials/all-members.html',
        controllerAs: 'user',
        controller: 'User'
      })
      .when('/logout', {
        templateUrl: 'app/partials/logout.html',
        controllerAs: 'user',
        controller: 'User'
      })
      .otherwise({
        redirectTo: '/'
      });

    $locationProvider.html5Mode(true);
  }
})();
