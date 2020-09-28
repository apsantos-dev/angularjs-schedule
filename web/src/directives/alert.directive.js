app.directive('alert', () => {
  return {
    templateUrl: (elem, attr) => `src/view/alert/${attr.type}.html`,
    scope: {
      title: '@',
    },
    transclude: true,
  };
});
