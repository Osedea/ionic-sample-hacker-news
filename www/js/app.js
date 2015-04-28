angular.module('app', ['ionic', 'ngCordova', 'LocalStorageModule'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleLightContent();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider, localStorageServiceProvider) {

  localStorageServiceProvider
    .setPrefix('App');

  $stateProvider

  // setup an abstract state for the tabs directive
  .state('tab', {
    url: "/tab",
    abstract: true,
    templateUrl: "templates/tabs.html",
    controller: 'TabsCtrl'
  })

  // Each tab has its own nav history stack:

  .state('tab.stories', {
    url: '/stories',
    views: {
      'tab-stories': {
        templateUrl: 'templates/tab-stories.html',
        controller: 'StoriesCtrl'
      }
    }
  })
  .state('tab.stories-details', {
    url: '/stories/details/:id',
    views: {
      'tab-stories': {
        templateUrl: 'templates/details.html',
        controller: 'DetailsCtrl'
      }
    }
  })

  .state('tab.show', {
    url: '/show',
    views: {
      'tab-show': {
        templateUrl: 'templates/tab-show.html',
        controller: 'ShowCtrl'
      }
    }
  })
  .state('tab.show-details', {
    url: '/show/details/:id',
    views: {
      'tab-show': {
        templateUrl: 'templates/details.html',
        controller: 'DetailsCtrl'
      }
    }
  })

  .state('tab.ask', {
    url: '/ask',
    views: {
      'tab-ask': {
        templateUrl: 'templates/tab-ask.html',
        controller: 'AskCtrl'
      }
    }
  })
  .state('tab.ask-details', {
    url: '/ask/details/:id',
    views: {
      'tab-ask': {
        templateUrl: 'templates/details.html',
        controller: 'DetailsCtrl'
      }
    }
  })

  .state('tab.settings', {
    url: '/settings',
    views: {
      'tab-settings': {
        templateUrl: 'templates/tab-settings.html',
        controller: 'SettingsCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/stories');

});
