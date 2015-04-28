angular.module('app')

.factory('Settings', function(localStorageService) {
  var settings = {
    showComments: true,
    theme: 'stable'
  };

  // Initialize settings
  if (!localStorageService.get('settings')) {
    localStorageService.set('settings', settings);
  }

  return {
    get: function() {
      return localStorageService.get('settings');
    },

    set: function(settings) {
      return localStorageService.set('settings', settings);
    }
  };
});
