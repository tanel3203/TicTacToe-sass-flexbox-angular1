(function () {
'use strict';

angular.module('myApp.controllers', [])
.controller('AppController', AppController)
.controller('MainController', ['PlaygroundService', '$scope', MainController]);

function AppController () {
}

function MainController (PlaygroundService, $scope) {
	console.log("MAIN");
	var pg = PlaygroundService;
	$scope.windowSize = pg.windowArea;
	$scope.areaSize = pg.sizes.totalArea;
	$scope.pieceSize = pg.sizes.pieceArea;
	$scope.pieceCount = pg.parts;

	$scope.userSelectionArray = [];
	$scope.computerSelectionArray = [];
	var winningCombos = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]];
	
	$scope.userSelected = function (index) {
		if ($scope.userSelectionArray.includes(index) || $scope.computerSelectionArray.includes(index)) {
			console.log("Already selected by user or computer")
		} else {
			$scope.userSelectionArray.push(index);
			$scope.userSelectionArray.sort();
			console.log($scope.userSelectionArray);
			computersTurn();
		}
	}

	function computersTurn() {
		// STEP 1
		// desc: Look  for all available values excl. user selected values.
		// 1. loop over values 1..9 and add to array that are not in user array => availableMovesAndComputerSelectionArray

		// STEP 2
		// desc: for each array in winningCombos array, see if the values in availableMovesAndComputerSelectionArray make up to make that winning combination
		// 2. loop over each subarray in winningCombos and check if availableMovesAndComputerSelectionArray "includes" each of three values
		//    if not, go to next
		//    if yes, loop over computerSelectionArray if "includes" each value, choose first that doesn't

		// STEP 3
		// 3. push to computerSelectionArray
		
	}






}

})();