app.factory("serverAPI", ($http, env) => {
  const _getContacts = () => {
    return $http.get(`${env.APP_BASE_URL}${env.APP_PATH_CONTACTS}`);
  };

  const _createContact = (contact) => {
    return $http.post(`${env.APP_BASE_URL}${env.APP_PATH_CONTACT}`, contact);
  };

  return {
    getContacts: _getContacts,
    createContact: _createContact,
  };
});
