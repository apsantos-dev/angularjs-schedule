app.controller("registerCtrl", function ($scope, env) {
  $scope.title = "Cadastro";
  $scope.subtitle = "Informe os dados abaixo para cadastrar o novo contato:";

  $scope.error = {
    info: "",
  };

  $scope.user = [];

  $scope.dataButton = {
    name: "Buscar",
    icon: "search",
    info: "search",
  };

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
      bio:
        "\r\n    Systems Analyst\r\n\r\nPassionate about web development, free software ...\r\n",
      twitter_username: null,
      public_repos: 28,
      public_gists: 1,
      followers: 22,
      following: 39,
      created_at: "2017-10-10T19:25:48Z",
      updated_at: "2020-09-26T17:11:20Z",
    };

    if ($scope.dataButton.info === "register") {
      console.log("register", register);
      const { avatar_url, bio, html_url, id, location, name } = userMock;
      const { obs, user } = register;

      const newContact = {
        avatar_url,
        bio,
        html_url,
        id,
        location,
        name,
        obs,
        user,
      };

      console.log("newContact", newContact);

      return;
    }

    $scope.user.push(userMock);

    $scope.dataButton = {
      name: "Cadastrar contato",
      icon: "cloud",
      info: "register",
    };

    // const { user } = register;

    // const response = await githubAPI.getUser(user);

    // if (response) {
    //   const { bio } = response.data;

    //   if (!bio) {
    //     $scope.error.info = "Sem informações adicionais!";
    //   }

    //   $scope.user.push(response.data);

    //   $scope.dataButton = {
    //     name: "Cadastrar contato",
    //     icon: "cloud",
    //     info: "register",
    //   };
    //   console.log("$scope.dataButton", $scope.dataButton);
    // }
  };

  $scope.resetContact = () => {
    if ($scope.user) {
      $scope.user = [];

      $scope.dataButton = {
        name: "Buscar",
        icon: "search",
        info: "search",
      };

      $scope.register.user = null;
    }
  };

  const testEnv = () => {
    // console.log('env: ', services.base_url);
    console.log("env", env.API_GITHUB_USERS);
  };
  // testEnv();
});
