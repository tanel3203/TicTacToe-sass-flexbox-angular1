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
			console.log("User selection: ", $scope.userSelectionArray);
			checkForWin($scope.userSelectionArray, "user");
			computersTurn();
			console.log("Computer selection: ", $scope.computerSelectionArray);
			checkForWin($scope.computerSelectionArray, "computer");
		}
	}


	function computersTurn() {
		// STEP 1
		// desc: Look  for all available values excl. user selected values.
		// 1. loop over values 1..9 and add to array that are not in user array => allNotTakenByUserArray
		var allNotTakenByUserArray = [];
		for (var i = 1; i <= 9; i++) {
			if (!$scope.userSelectionArray.includes(i)) {
					allNotTakenByUserArray.push(i);
			}
		}

		// STEP 2
		// desc: for each array in winningCombos array, see if the values in allNotTakenByUserArray make up to make that winning combination
		// 2. loop over each subarray in winningCombos and check if allNotTakenByUserArray "includes" each of three values
		//    if not, go to next
		//    if yes, loop over computerSelectionArray if "includes" each value, choose first that doesn't
		// STEP 3
		// 3. push to computerSelectionArray
		for (var i = 0; i < winningCombos.length; i++) {

			// Choose the viable combination that can lead to victory
			if (	allNotTakenByUserArray.includes(winningCombos[i][0]) &&
					allNotTakenByUserArray.includes(winningCombos[i][1]) &&
					allNotTakenByUserArray.includes(winningCombos[i][2])
						) {

				// Eliminate the picks already chosen and pick what hasn't
				if (!$scope.computerSelectionArray.includes(winningCombos[i][0])) {
					$scope.computerSelectionArray.push(winningCombos[i][0]);
					return;
				} else if (!$scope.computerSelectionArray.includes(winningCombos[i][1])) {
					$scope.computerSelectionArray.push(winningCombos[i][1]);
					return;
				} else if (!$scope.computerSelectionArray.includes(winningCombos[i][2])) {
					$scope.computerSelectionArray.push(winningCombos[i][2]);
					return;

				} else {
					console.log("Something went wrong! This shouldn't come up.");
				}
				
			}
		}


	}

	function checkForWin(array, winner) {
		for (var i = 0; i < winningCombos.length; i++) {
			if (	array.includes(winningCombos[i][0]) &&
					array.includes(winningCombos[i][1]) &&
					array.includes(winningCombos[i][2])
						) {
				alert("Winner: "+ winner);
				alert("New game started!");
				$scope.userSelectionArray = [];
				$scope.computerSelectionArray = [];

			}
		}

	}


	$scope.choosePiece = function() {
		$scope.userPiece = prompt("Choose your piece! (X or O)");
		$scope.computerPiece;
		if ($scope.userPiece === "X") {
			$scope.computerPiece = "O";
		} else if ($scope.userPiece === "O") {
			$scope.computerPiece = "X";
		} else {
			$scope.choosePiece();
		}
	}



}

})();