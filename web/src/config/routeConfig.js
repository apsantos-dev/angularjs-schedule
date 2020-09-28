app.config(($routeProvider) => {
  $routeProvider
    .when("/", {
      templateUrl: "src/pages/home.html",
      controller: "HomeCtrl",
    })
    .when("/cadastrar", {
      templateUrl: "src/pages/register.html",
      controller: "registerCtrl",
    })
    .when("/contatos", {
      templateUrl: "src/pages/display.html",
      controller: "displayCtrl",
    })
    .when("/error", {
      templateUrl: "src/view/error.html",
    })
    .otherwise({ redirectTo: "/" });
});
