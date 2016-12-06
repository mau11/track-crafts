angular.module('track-crafts.patterns',[])
  .controller('PatternsController', function($scope){
    var allPatterns = [];
    $scope.listOfCrafts = ['KNIT', 'CROCHET', 'COMBO'];
    $scope.item = {};
    $scope.save = function() {
      var patt = {};
      if($scope.name !== undefined){//required field
        patt.name= $scope.name;
        patt.source=$scope.source;
        patt.notes = $scope.notes;
        patt.craft = $scope.craft;
        allPatterns.push(patt);
      }
      console.log(allPatterns);
    };
    $scope.toggle = function(){
      return allPatterns;
    };
  });