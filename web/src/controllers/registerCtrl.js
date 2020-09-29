app.controller("registerCtrl", function (
  $scope,
  $timeout,
  serverAPI,
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
    const userMock = {
      login: "apsantos-dev",
      id: 32685587,
      node_id: "MDQ6VXNlcjMyNjg1NTg3",
      avatar_url: "https://avatars0.githubusercontent.com/u/32685587?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/apsantos-dev",
      html_url: "https://github.com/apsantos-dev",
      followers_url: "https://api.github.com/users/apsantos-dev/followers",
      following_url:
        "https://api.github.com/users/apsantos-dev/following{/other_user}",
      gists_url: "https://api.github.com/users/apsantos-dev/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/apsantos-dev/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/apsantos-dev/subscriptions",
      organizations_url: "https://api.github.com/users/apsantos-dev/orgs",
      repos_url: "https://api.github.com/users/apsantos-dev/repos",
      events_url: "https://api.github.com/users/apsantos-dev/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/apsantos-dev/received_events",
      type: "User",
      site_admin: false,
      name: "Anderson Pires",
      company: "APSantos Desenvolvimento de Sistemas",
      blog: "https://www.apsantos.com.br/",
      location: "Belo Horizonte - MG / Brasil",
      email: null,
      hireable: null,
      bio: null,
      twitter_username: null,
      public_repos: 28,
      public_gists: 1,
      followers: 22,
      following: 39,
      created_at: "2017-10-10T19:25:48Z",
      updated_at: "2020-09-26T17:11:20Z",
    };

    if ($scope.dataForm.button.info === "register") {
      const { avatar_url, bio, html_url, id, location, name } = userMock;
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

    $scope.user.push(userMock);

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

    // const { user } = register;

    // const response = await githubAPI.getUser(user);

    // if (response) {
    //   const { bio } = response.data;

    //   if (!bio) {
    //     $scope.error.info = "Sem informações adicionais!";
    //   }

    //   $scope.user.push(response.data);

    //   $scope.dataForm.button = {
    //     name: "Cadastrar contato",
    //     icon: "cloud",
    //     info: "register",
    //   };
    //   console.log("$scope.dataForm.button", $scope.dataForm.button);
    // }
  };

  $scope.addNote = () => {
    $scope.dataForm.note.display = "note";
  };

  $scope.createContact = async (contact) => {
    // const response = await serverAPI.createContact(contact);

    // const { message } = response.data;

    // if (message === "CONTACT_SUCCESSFULLY_REGISTERED") {
    //   $scope.notify();
    //   $scope.resetContact();
    //   return;
    // }

    $scope.resetContact();
    $scope.notify();
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
