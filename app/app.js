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
/*  .factory('allPatterns', [function(){
    var y = {
      allPatterns = [];
    };
    return y
  }])*/



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