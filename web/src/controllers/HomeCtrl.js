app.controller("HomeCtrl", function ($scope) {
  $scope.message = "Lista de contatos com integração a API do GitHub";

  $scope.openURL = (link) => {
    console.log("link", link);
  };
});
