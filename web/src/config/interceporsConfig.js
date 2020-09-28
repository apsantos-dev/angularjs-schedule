app.config(function ($httpProvider) {
  $httpProvider.interceptors.push('errorInterceptor');
  $httpProvider.interceptors.push('loadingInterceptor');
});
