app.factory("apiServer", ($http, env) => {
  const _getContacts = () => {
    return $http.get(`${env.APP_BASE_URL}${env.APP_PATH_CONTACTS}`);
  };

  const _getSocialNetworks = () => {
    return $http.get(`${env.APP_BASE_URL}${env.APP_PATH_SOCIAL_NETWORKS}`);
  };

  const _createContact = (contact) => {
    return $http.post(`${env.APP_BASE_URL}${env.APP_PATH_CONTACT}`, contact);
  };

  return {
    getContacts: _getContacts,
    getSocialNetworks: _getSocialNetworks,
    createContact: _createContact,
  };
});
