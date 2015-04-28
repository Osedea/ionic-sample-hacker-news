angular.module('app')

.factory('HNService', function($q, $http) {
  function queryResource(resource, page) {
    var deferred = $q.defer();

    $http.get('http://hn.algolia.com/api/v1/search?tags=' + resource + '&page=' + page)
      .success(function(data) {
        deferred.resolve(data);
      })
      .error(function(err) {
        deferred.reject(err);
      });

    return deferred.promise;
  }

  return {
    get: function(id) {
      var deferred = $q.defer();

      $http.get('http://hn.algolia.com/api/v1/items/' + id)
        .success(function(data) {
          deferred.resolve(data);
        })
        .error(function(err) {
          deferred.reject(err);
        });

      return deferred.promise;
    },

    queryStories: function(page) {
      return queryResource('front_page', page);
    },

    queryShow: function(page) {
      return queryResource('show_hn', page);
    },

    queryAsk: function(page) {
      return queryResource('ask_hn', page);
    }
  };
});
