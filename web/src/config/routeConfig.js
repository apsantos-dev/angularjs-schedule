app.config(($routeProvider) => {
  $routeProvider
    .when("/", {
      templateUrl: "src/pages/home.html",
      controller: "HomeCtrl",
      resolve: {
        socialNetworks: (apiServer, utils) => {
          return new Promise((resolve, reject) => {
            apiServer
              .getSocialNetworks()
              .then((response) => {
                const items = response.data;

                const itemsFiltered = items
                  .map((item) => {
                    return {
                      ...item,
                      sortItem: item.text,
                    };
                  })
                  .filter((item) => {
                    return (
                      (item.icon = utils.convertToLowercase(item.text)),
                      item.active
                    );
                  });

                utils.sortArrayItems(itemsFiltered);

                resolve({
                  status: true,
                  data: itemsFiltered,
                });
              })
              .catch(() => {
                reject({
                  status: false,
                  data: "ERROR_LOADING_SOCIAL_NETWORKS",
                });
              });
          });
        },
      },
    })
    .when("/cadastrar", {
      templateUrl: "src/pages/register.html",
      controller: "registerCtrl",
    })
    .when("/contatos", {
      templateUrl: "src/pages/display.html",
      controller: "displayCtrl",
      resolve: {
        contacts: (apiServer, utils) => {
          return new Promise((resolve, reject) => {
            apiServer
              .getContacts()
              .then((response) => {
                const items = response.data;

                const arrContacts = items.map((contact) => {
                  return {
                    ...contact,
                    sortItem: contact.name,
                  };
                });

                utils.sortArrayItems(arrContacts);

                resolve({
                  status: true,
                  data: arrContacts,
                });
              })
              .catch(() => {
                reject({
                  status: false,
                  data: "ERROR_LOADING_CONTACTS",
                });
              });
          });
        },
      },
    })
    .when("/error", {
      templateUrl: "src/view/error.html",
    })
    .when("/tools", {
      templateUrl: "src/view/tools.html",
    })
    .otherwise({ redirectTo: "/" });
});
