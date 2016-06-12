(function() {
  angular
    .module('gDating', ['ngRoute'])
    .config(config);

  config.$inject = ['$routeProvider', '$locationProvider', '$httpProvider']

  function config($routeProvider, $locationProvider, $httpProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/partials/landing.html'
      })
      .when('/signup', {
        templateUrl: 'app/partials/signup.html',
        controllerAs: 'user',
        controller: 'Register',
        preventWhenLoggedIn: true
      })
      .when('/login', {
        templateUrl: 'app/partials/login.html',
        controllerAs: 'log',
        controller: 'LogIn',
        preventWhenLoggedIn: true
      })
      .when('/members', {
        templateUrl: 'app/partials/members-page.html',
        controllerAs: 'user',
        controller: 'Member',
        restricted: true,
        resolve: {
          member_profiles: function(Users) {
            return Users.everyUser()
            .then(function(users) { return users.data.data } );
          },
          current_user: function(Users) {
            return Users.getCurrentUser();
          }
        }
      })
      .when('/members/:id', {
        templateUrl: 'app/partials/landing.html',
        controllerAs: 'user',
        controller: 'User',
        restricted: true
      })
      .when('/logout', {
        templateUrl: 'app/partials/landing.html',
        preventWhenLoggedOut: true,
        resolve: {
          logout: function(Users, $location) {
            Users.logout();
            $location.path('/')
          }
        }
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

    function runBlock($rootScope, $location, $window) {
      $rootScope.$on('$routeChangeStart', function (event, next, current) {
        if (next.restricted && !$window.localStorage.getItem("token")) {
            $location.path('/login');
        }
        else if (next.preventWhenLoggedOut && !$window.localStorage.getItem("token")) {
            $location.path('/login');
        }
        else if (next.preventWhenLoggedIn && $window.localStorage.getItem("token")) {
          $location.path('/members');
        }

      });
      $rootScope.$on('$routeChangeFailure', function (event, next, current) {
        console.log('hey');
        // $location.path = current;
      });
  }
})();
