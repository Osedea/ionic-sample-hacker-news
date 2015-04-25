angular.module('app')

.controller('StoriesCtrl', function($scope, HNService) {
  var page = 1;
  $scope.stories = [];
  $scope.canLoadMore = false;

  $scope.doRefresh = function() {
    page = 1;
    $scope.stories = [];
    $scope.loadMore();
  };

  $scope.loadMore = function() {
    HNService.queryStories(page)
      .then(function(data) {
        if (!data.hits.length) {
          $scope.canLoadMore = false;
        } else {
          $scope.stories = $scope.stories.concat(data.hits);
          $scope.canLoadMore = true;
        }
      })
      .catch(function(err) {

      })
      .finally(function() {
        $scope.$broadcast('scroll.refreshComplete');
        $scope.$broadcast('scroll.infiniteScrollComplete');
        page++;
      });
  };

  // Get initial list of stories
  $scope.loadMore();

});
