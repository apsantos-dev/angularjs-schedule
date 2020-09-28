angular.module('serialGenerator', []);
angular.module('serialGenerator').provider('serialGenerator', function () {
  this.$get = () => {
    return {
      generate: () => new Date().valueOf(),
    };
  };

  let _url = 'http://localhost:3333';

  this.getBaseUrl = () => _url;

  this.setBaseUrl = function (url) {
    _url = url;
  };
});
