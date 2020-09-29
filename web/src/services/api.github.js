app.factory("apiGithub", ($http, env) => {
  const _getUser = (user) => {
    return $http.get(`${env.APP_API_GITHUB}/${user}`);
  };

  return {
    getUser: _getUser,
  };
});
