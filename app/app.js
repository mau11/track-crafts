var trackCrafts = angular.module('trackCrafts', [
  'trackCrafts.patterns',
  'trackCrafts.tools',
  'trackCrafts.yarn',
  'ngRoute'
])/*.controller('mainTrackController', function($scope, $http){
  $scope.allData = {};
  $http.get('/patterns')
  .success(function(data) {
    $scope.patterns = data;
    console.log(data);
  })
  .error(function(data) {
    console.log('ERROR --->' + data);
  })*/
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
        redirectTo: '/patterns'
      });
  });
//});
/*
var each = function(collection, callback) {
  if(Array.isArray(collection)){
    for(var i = 0; i < collection.length; i++){
      callback(collection[i]);
    }
  } else {
    for(var key in collection){
      callback(collection[key]);
    }
  }
};*/