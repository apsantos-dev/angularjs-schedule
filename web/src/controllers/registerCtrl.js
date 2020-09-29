app.controller("registerCtrl", function (
  $scope,
  $timeout,
  apiGithub,
  apiServer,
  constants,
  utils
) {
  $scope.title = "Cadastro";
  $scope.subtitle = "Informe os dados abaixo para cadastrar o novo contato:";

  $scope.error = {
    info: "",
  };

  $scope.toast = {
    active: false,
    icon: "",
    message: "",
  };

  $scope.user = [];

  $scope.dataForm = {
    button: {
      name: "Buscar",
      icon: "search",
      info: "search",
    },
    note: {
      display: "button",
      text: "",
    },
  };

  /**
   * Functions
   */

  $scope.addContact = async (register) => {
    if ($scope.dataForm.button.info === "register") {
      const { avatar_url, bio, html_url, id, location, name } = $scope.user[0];
      const { obs, user } = register;

      const dataUser = [
        {
          avatar_url,
          bio,
          html_url,
          id,
          location,
          name,
          obs,
          user,
        },
      ];

      /**
       * Validação do campo
       *
       * Necessário realizar a validação para que o backend
       * consiga gravar todos os campos da tabela.
       */
      const newContact = dataUser.map((item) => {
        return {
          avatar_url: utils.validateFieldNullAndUndefined(item.avatar_url),
          bio: utils.validateFieldNullAndUndefined(item.bio),
          html_url: utils.validateFieldNullAndUndefined(item.html_url),
          id: utils.validateFieldNullAndUndefined(item.id),
          location: utils.validateFieldNullAndUndefined(item.location),
          name: utils.validateFieldNullAndUndefined(item.name),
          obs: utils.validateFieldNullAndUndefined(item.obs),
          user: utils.validateFieldNullAndUndefined(item.user),
        };
      });

      $scope.createContact(newContact[0]);

      return;
    }

    const { user } = register;

    const response = await apiGithub.getUser(user);

    if (response) {
      const { bio } = response.data;

      if (!bio) {
        $scope.error.info = "Sem informações adicionais!";
      }

      $scope.user.push(response.data);

      $scope.dataForm = {
        button: {
          name: "Cadastrar contato",
          icon: "cloud",
          info: "register",
        },
        note: {
          display: "button",
          text: "",
        },
      };
    }
  };

  $scope.addNote = () => {
    $scope.dataForm.note.display = "note";
  };

  $scope.createContact = async (contact) => {
    const response = await apiServer.createContact(contact);

    const { message } = response.data;

    if (message === "CONTACT_SUCCESSFULLY_REGISTERED") {
      $scope.notify();
      $scope.resetContact();
      return;
    }
  };

  $scope.notify = () => {
    $scope.toast = {
      active: true,
      icon: "info-circle",
      message: constants.CONTACT_SUCCESSFULLY_REGISTERED,
    };

    $timeout(function () {
      $scope.toast = {
        active: false,
        icon: "info-circle",
        message: "",
      };
    }, 5000);
  };

  $scope.resetContact = () => {
    if ($scope.user) {
      $scope.user = [];

      $scope.dataForm = {
        button: {
          name: "Buscar",
          icon: "search",
          info: "search",
        },
        note: {
          display: "button",
          text: "",
        },
      };

      $scope.register = null;
    }
  };
});
