angular.module('app')

.controller('ShowCtrl', function($scope, HNService) {
  var page = 1;
  $scope.show = [];
  $scope.canLoadMore = false;

  $scope.doRefresh = function() {
    page = 1;
    $scope.show = [];
    $scope.loadMore();
  };

  $scope.loadMore = function() {
    HNService.queryShow(page)
      .then(function(data) {
        if (!data.hits.length) {
          $scope.canLoadMore = false;
        } else {
          $scope.show = $scope.show.concat(data.hits);
          $scope.canLoadMore = true;
        }
      })
      .catch(function(err) {

      })
      .finally(function() {
        $scope.$broadcast('scroll.infiniteScrollComplete');
        page++;
      });
  };

  // Get initial list of show
  $scope.loadMore();
});
