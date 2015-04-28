angular.module('app')

.controller('SettingsCtrl', function($rootScope, $scope, Settings) {
  $scope.settings = Settings.get();

  $scope.$watchCollection('settings', function(newVal, oldVal) {
    if (newVal !== oldVal) {
      Settings.set(newVal);

      var headerBar = angular.element(document.querySelector('[nav-bar="active"]'));
      headerBar = angular.element(headerBar[0].firstElementChild);
      headerBar.removeClass('bar-' + oldVal.theme);
      headerBar.addClass('bar-' + newVal.theme);
      headerBar = angular.element(document.querySelector('[nav-bar="cached"]'));
      headerBar = angular.element(headerBar[0].firstElementChild);
      headerBar.removeClass('bar-' + oldVal.theme);
      headerBar.addClass('bar-' + newVal.theme);
    }
  });
});
