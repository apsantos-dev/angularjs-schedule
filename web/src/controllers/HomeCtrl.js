app.controller("HomeCtrl", function ($scope, constants, socialNetworks) {
  $scope.message = "Lista de contatos com integração a API do GitHub";

  $scope.dataPage = {
    error: {
      info: "",
      icon: "",
    },
  };

  $scope.socialNetworks = socialNetworks.data || [];

  const size = $scope.socialNetworks.length;

  if (!size) {
    $scope.dataPage.error = {
      info: constants.ERROR_LOADING_SOCIAL_NETWORKS,
      icon: "exclamation-triangle",
    };
  }
});
