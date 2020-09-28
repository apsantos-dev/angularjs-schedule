app.factory("nodeAPI", ($http, env) => {
  const _getContact = (id) => {
    return $http.get(`${env.API_BASE_URL}/contact/${id}`);
  };

  const _getContacts = () => {
    return $http.get(`${env.API_BASE_URL}/contacts`);
  };

  const _createContact = (contact) => {
    return $http.post(`${env.API_BASE_URL}/create`, contact);
  };

  return {
    getContact: _getContact,
    getContacts: _getContacts,
    createContact: _createContact,
  };
});
