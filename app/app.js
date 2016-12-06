angular.module('track-crafts', [
  'track-crafts.patterns',
  'track-crafts.tools',
  'track-crafts.yarn',
  'ngRoute'
])
  .config(function ($routeProvider, $httpProvider) {
    $routeProvider
      .when('/patterns', {
        templateUrl: 'app/patterns/patterns.html',
        controller: 'PatternsController'
      })
      .when('/tools', {
        templateUrl: 'app/tools/tools.html',
        controller: 'ToolsController'
      })
      .when('/yarn', {
        templateUrl: 'app/yarn/yarn.html',
        controller: 'YarnController',
      })
      .otherwise({
        redirectTo: '/'
      });
  });