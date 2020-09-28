app.factory("githubAPI", ($http, env) => {
  const _getUser = (user) => {
    return $http.get(`${env.API_GITHUB_USERS}/${user}`);
  };

  return {
    getUser: _getUser,
  };
});
