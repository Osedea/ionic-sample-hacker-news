angular.module('app')

.controller('TabsCtrl', function($rootScope, Settings) {
  $rootScope.Settings = Settings;

  function updateHeaderBar() {
    var headerBar = angular.element(document.querySelector('[nav-bar="active"]'));
    headerBar = angular.element(headerBar[0].firstElementChild);
    headerBar.addClass('bar-' + Settings.get().theme);
    headerBar = angular.element(document.querySelector('[nav-bar="cached"]'));
    headerBar = angular.element(headerBar[0].firstElementChild);
    headerBar.addClass('bar-' + Settings.get().theme);
  }

  updateHeaderBar();
});
