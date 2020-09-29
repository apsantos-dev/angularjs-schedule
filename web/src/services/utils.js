app.factory("utils", () => {
  const _sortArrayItems = (arr) => {
    let newObj = [];

    newObj = arr.sort((a, b) => {
      if (a.sortItem > b.sortItem) return 1;
      if (a.sortItem < b.sortItem) return -1;
    });

    return newObj;
  };

  const _sortArrayItemsDesc = (arr) => {
    let newObj = [];

    newObj = vet.sort((a, b) => {
      if (a.sortItem < b.sortItem) return 1;
      if (a.sortItem > b.sortItem) return -1;
    });

    return newObj;
  };

  const _validateFieldNullAndUndefined = (field) => {
    if (field === null || field === undefined) return (field = "");
    return field;
  };

  return {
    sortArrayItems: _sortArrayItems,
    sortArrayItemsDesc: _sortArrayItemsDesc,
    validateFieldNullAndUndefined: _validateFieldNullAndUndefined,
  };
});
