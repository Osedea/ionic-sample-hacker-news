angular.module('app')

.controller('AskCtrl', function($scope, HNService) {
  var page = 1;
  $scope.ask = [];
  $scope.canLoadMore = false;

  $scope.doRefresh = function() {
    page = 1;
    $scope.ask = [];
    $scope.loadMore();
  };

  $scope.loadMore = function() {
    HNService.queryAsk(page)
      .then(function(data) {
        if (!data.hits.length) {
          $scope.canLoadMore = false;
        } else {
          $scope.ask = $scope.ask.concat(data.hits);
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

  // Get initial list of ask
  $scope.loadMore();
});
