app.filter('ellipsis', () => {
  return (text, size) => {
    if (text.length <= size) return text;

    return text.substring(0, size || 2) + '...';
  };
});
