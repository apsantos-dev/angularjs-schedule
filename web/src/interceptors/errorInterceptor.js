app.factory('errorInterceptor', function ($q, $location) {
  return {
    responseError: function (rejection) {
      if (rejection.status === 400 || rejection.status === 404) {
        $location.path('/error');
      }

      return $q.reject(rejection);
    },
  };
});
