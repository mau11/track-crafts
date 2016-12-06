angular.module('track-crafts.patterns',['track-crafts'])
  .controller('PatternsController', function($scope){
    $scope.allPatterns = [];
    $scope.listOfCrafts = ['KNIT', 'CROCHET', 'BOTH'];
    $scope.arr = [];
    $scope.clear = function(){
      $scope.name = undefined;
      $scope.source = undefined;
      $scope.notes = undefined;
      $scope.craft = undefined;
    };
    $scope.save = function() {
      var patt = {};
      if($scope.name !== undefined){//required field
        patt.name = $scope.name;
        patt.source = $scope.source;
        patt.notes = $scope.notes;
        patt.craft = $scope.craft;
        $scope.allPatterns.push(patt);
      }
      if($scope.name !== undefined){
        $scope.clear();
        $scope.pattDisplay = ($scope.allPatterns).map(function(x){
          return x;
        });
      }
      console.log('CLICK!');
    };
  });
