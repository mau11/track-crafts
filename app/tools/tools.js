angular.module('track-crafts.tools',[])
  .controller('ToolsController', function($scope){
    $scope.allTools = [];
    $scope.listOfCrafts = ['(select one)', 'KNIT', 'CROCHET'];
    $scope.listOfSizesC = ['2.00mm', '2.25mm  B/1', '2.50mm', '2.75mm  C/2', '3.00mm', '3.25mm  D/3', '3.50mm  E/4', '3.75mm  F/5', '4.0mm  G/6', '4.50mm  7','5.00mm  H/8', '5.50mm  I/9','6.00mm  J/10', '6.5mm  K/10.5','7.00mm', '8.00mm  L/11', '9.00mm  M/13','10.00mm  N/15'];
    $scope.listOfSizesK = ['2.00mm  0', '2.25mm  1', '2.75mm  2', '3.00mm', '3.25mm  3', '3.50mm  4', '3.75mm  5', '4.00mm  6', '4.50mm  7', '5.00mm  8', '5.5mm  9', '6.00mm  10', '6.50mm  10.5', '7.00mm', '7.50mm', '8.00mm  11', '9.00mm  13', '10.00mm  15', '12.00mm  17', '16.00mm  19', '19.00mm  35', '25.00mm  50'];
    $scope.clear = function(){
      $scope.craft = undefined;
      $scope.notes = undefined;
    }
    $scope.save = function() {
      var toolbox = {};
      if($scope.craft !== undefined){//required field
        toolbox.craft = $scope.craft;
        toolbox.tool = $scope.tool;
        toolbox.notes = $scope.notes;
        $scope.allTools.push(toolbox);
      }
      if($scope.craft !== undefined){
        $scope.clear();
        $scope.toolDisplay = ($scope.allTools).map(function(x){
          return x;
        });
      }
      console.log('CLICK!');
    };
  });