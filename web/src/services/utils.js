app.factory("utils", () => {
  const _validateFieldNullAndUndefined = (field) => {
    if (field === null || field === undefined) return (field = "");
    return field;
  };

  return {
    validateFieldNullAndUndefined: _validateFieldNullAndUndefined,
  };
});
