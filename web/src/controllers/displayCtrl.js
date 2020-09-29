app.controller("displayCtrl", function (
  $scope,
  $location,
  constants,
  contacts
) {
  $scope.title = "Contatos";
  $scope.subtitle = "Lista de contatos cadastrados";

  $scope.dataPage = {
    error: {
      info: "",
      icon: "",
    },
  };

  $scope.toast = {
    active: false,
    icon: "",
    message: "",
  };

  $scope.contacts = contacts.data || [];

  const size = $scope.contacts.length;

  if (!size) {
    $scope.dataPage.error = {
      info: constants.NO_CONTACT_REGISTERED,
      icon: "exclamation-triangle",
    };
  }

  /**
   * FUCNTIONS
   */
  $scope.newContact = () => {
    $location.path("/cadastrar");
  };
});
