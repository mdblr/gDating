(function() {
  angular
    .module('gDating')
    .factory('AuthInterceptor', AuthInterceptor)

    AuthInterceptor.$inject = ['$window', '$location', '$q'];

    function AuthInterceptor($window, $location, $q)  {

          return {
            request: function(config) {
              config.headers['X-Requested-With'] = 'XMLHttpRequest';
              var token = window.localStorage.getItem('token')
              if (token) {
                config.headers.Authorization = `Bearer ${$window.sessionStorage.token}`
              }
              return $q.resolve(config);
            },
            responseError: function(rejection) {
              if(rejection.data === 'invalid token' || rejection.data === 'invalid signature' || rejection.data === 'jwt malformed') {
                $location.path('/logout');
                return $q.reject(err);
              }
              if (rejection.status === 401) {
                $location.path('/users');
                return $q.reject(err);
              }
              return $q.reject(rejection);
            }
        };
    }
})();
