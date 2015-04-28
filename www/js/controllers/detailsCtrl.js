angular.module('app')

.controller('DetailsCtrl', function($scope, $stateParams, $cordovaInAppBrowser, HNService, Settings) {
  $scope.isLoading = true;
  $scope.settings = Settings.get();

  $scope.viewUrl = function() {
    $cordovaInAppBrowser.open($scope.item.url, '_blank')
      .then(function(res) {
        console.log('success');
        console.log(res);
      })
      .catch(function(err) {
        console.log('error');
        console.log(err);
      });
  };

  // Get item data
  HNService.get($stateParams.id)
    .then(function(data) {
      $scope.item = data;
    })
    .catch(function(err) {

    })
    .finally(function() {
      $scope.isLoading = false;
    });
});
