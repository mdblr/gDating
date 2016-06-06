(function() {
  angular
    .module('gDating', ['ngRoute'])
    .config(config);

  config.$inject = ['$routeProvider', '$locationProvider', '$httpProvider']

  function config($routeProvider, $locationProvider, $httpProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/partials/landing.html',
        controllerAs: 'log',
        controller: 'Register'
      })
      .when('/signup', {
        templateUrl: 'app/partials/signup.html',
        controllerAs: 'log',
        controller: 'Register',
        preventWhenLoggedIn: true,
        signup: true
      })
      .when('/login', {
        templateUrl: 'app/partials/login.html',
        controllerAs: 'log',
        controller: 'Register',
        preventWhenLoggedIn: true
      })
      .when('/members', {
        templateUrl: 'app/partials/all-members.html',
        controllerAs: 'user',
        controller: 'User',
        restricted: true
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
    $httpProvider.interceptors.push('AuthInterceptor');
  }
})();

(function() {
  angular
  .module('gDating')
  .run(runBlock);

  runBlock.$inject = ['$rootScope', '$location', '$window'];

    // function runBlock($rootScope, $location, $window) {
    //   $rootScope.$on('$routeChangeStart', function (event, next, current) {
    //     if (next.restricted && !$window.localStorage.getItem('token')) {
    //       if (current && current.signup) {
    //         $location.path('/signup');
    //       }
    //       else {
    //         $location.path('/login');
    //       }
    //     }
    //   });
    // }
    function runBlock($rootScope, $location, $window) {
      $rootScope.$on('$routeChangeStart', function (event, next, current) {
        // if you try access a restricted page without logging in
        if (next.restricted && !$window.localStorage.getItem("token")) {
            $location.path('/login');
          }
        }
        // if you try to log in or sign up once logged in
        if (next.preventWhenLoggedIn && $window.localStorage.getItem("token")) {
          $location.path('/users');
        }
      });
  }
})();
