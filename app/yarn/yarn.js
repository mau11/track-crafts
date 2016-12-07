angular.module('trackCrafts.yarn',[])
  .controller('YarnController', function($scope){
    $scope.allYarn = [];
    $scope.listOfBrands = ['Bernat', 'Caron', "Lily Sugar 'n Cream", 'Lion Brand', 'Red Heart', 'Other'];
    $scope.listOfWeights = ['Lace', 'Super Fine/Baby', 'Fine/Sport', 'Light-Worsted', 'Medium/Worsted', 'Bulky/Chunky', 'Super Bulky', 'Jumbo', 'Other'];
    $scope.listOfColors = ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Purple', 'Black', 'Grey', 'White', 'Other'];
    $scope.arr = [];
    $scope.clear = function(){
      $scope.brand = undefined;
      $scope.weight = undefined;
      $scope.colors = undefined;
      $scope.notes = undefined;
    };
    $scope.save = function() {
      var yarn = {};
      if($scope.brand !== undefined || $scope.color !== undefined || $scope.notes !== undefined){
        yarn.brand = $scope.brand;
        yarn.weight = $scope.weight;
        yarn.color = $scope.color;
        yarn.notes = $scope.notes;
        $scope.allYarn.push(yarn);
      }
      if($scope.brand !== undefined || $scope.color !== undefined || $scope.notes !== undefined){
        $scope.clear();
        $scope.yarnDisplay = ($scope.allYarn).map(function(x){
          return x;
        });
      }
    };
  });