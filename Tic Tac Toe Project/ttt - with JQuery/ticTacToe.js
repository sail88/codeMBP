//Tic Tac Toe
//Homework 3-20-15
//Steven Gordon

//redone with JQuery 3-23-15

$(function() {

//Set up all variables
/*
var b = [];

b[0] = null;

for (var i = 1; i <= 10; i++) {
	b[i] = $('#box'+i);
	console.log(b[i]);
}; */

var $fullBoard = $('#board');

var $reset = $('#reset');

var $nextUp = $('#next');

console.log($nextUp);

var totalMoves = 0;

var boardArray = [null, null, null, null, null, null, null, null, null];
//true is X; falso is O; null is empty
// This is key to order of array. (but index #s are one less)
// 1 | 2 | 3
// ---------
// 4 | 5 | 6
// ---------
// 7 | 8 | 9


var boxMove = -1; //placeholder value

//Define functions

	var makeMove = function(event){
console.log(totalMoves);
		/*
		This function needs to:
		1) determine whether box is available for a move or not
		2) determine whether X or O is next
		3) assign correct letter to array
		4) display correct letter on board
		5) determine if there is a winner yet
		*/

		var boxMove = Number(event.target.id.charAt(3)); //this is which box was clicked

		//First, is box available for a move or not?
		if (boxAvailable(boxMove)) {
			//if true, box is available for a move

			//which player should be used next?
			var player = whichPlayer(totalMoves);

			//assign correct letter to the correct box
			putBox(boxMove, player); // ? "X" : "O"));

			//event.target.innerHTML = (player ? "X" : "O"); USE THIS LINE FOR text X or O in box
			
			var $el = $(event.target);

			console.log("$el from event target is ", $el);
			console.log("el has class", $el.hasClass("XXX"));
			console.log("Player", player);
			if (player) {
				$el.addClass("XXX");
			} else {
				$el.addClass("OOO");
			}
			
			//event.target.setAttribute("class", (player ? "box XXX" : "box OOO"));

			$nextUp.html(player ? "O's turn now..." : "X's turn now...");

			totalMoves++;

			if (checkForWinner(boardArray)[0]) {
				$nextUp.html("Congratulations!  "+((checkForWinner(boardArray)[1]) ? "X won!" : "O won!")+" Game over.  Click reset to play again.");
				$reset.addClass("endgame");
			} else {
					if (totalMoves >= 9) {
					$nextUp.html("Game over. It's a tie. Click reset to play again.");
					$reset.addClass("endgame");
					};
			};

			//console.log(boardArray);

		} else {
			//if false, box is not available, reject the move
			$nextUp.html("That square is taken. Try again, "+(whichPlayer(totalMoves) ? "X" : "O"));
			//alert("That square is taken. Try again.");
		};
		
	};


	var getBox = function(boxNum){
		return boardArray[boxNum-1];
	};

	var putBox = function(boxNum, player) {
		boardArray[boxNum-1] = player;
	}

	var boxAvailable = function(boxNum){
		if (getBox(boxNum) === null) {
			return true;
		} else {return false;};
	};

	var whichPlayer = function(t){
		if (t%2 === 0) {
			//even turns are for X (0 = 1st turn, 2 is 3rd turn, etc.)
			return true; //true is for X
		} else { return false;} //false is for O
	};

	var checkForWinner = function(arr){
		var waysToWin = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8],[2,4,6]];
		var results = [null, null]; // first boolean is whether there is a winner or not, second is who won
		for (var i = 0; i < waysToWin.length; i++) {
	console.log("Testing: "+waysToWin[i]);
//			if (arr[waysToWin[i][0]] && arr[waysToWin[i][1]] && arr[waysToWin[i][2]]) { old way: wont work because !null = true
			if ((arr[waysToWin[i][0]] === arr[waysToWin[i][1]]) && (arr[waysToWin[i][1]] === arr[waysToWin[i][2]]) && !(arr[waysToWin[i][2]] === null)) {
				results[0] = true; //someone wins
				results[1] = arr[waysToWin[i][0]]; //winner is whichever piece in any of the 3 boxes
				//console.log(results);
				return results;
			};
		};
		return [false, null];
	};

//Create listeners

$fullBoard.click(makeMove); 

//for (var i = 1; i < 10; i++) {
//	$(eval('b'+"["+i+"]")).click(makeMove);
//};

$reset.click(function(event) {
	boardArray = [null, null, null, null, null, null, null, null, null];
	totalMoves = 0;
	results = [null, null]; //this should NOT be needed, as results is local variable.
	$reset.removeClass("endgame").addClass('midgame');
	$nextUp.html("Start again. X's turn...");

	//need to clear the X and O marks

	var $b = [];

	$b[0] = null;

	for (var i = 1; i <= 10; i++) {
		$b[i] = $(String('#box'+i));
		$b[i].html = '&nbsp;'
		$b[i].removeClass("OOO").removeClass("XXX");
	};

	});

	// for (var i = 1; i <=9; i++) {
	// 	eval("b"+String(i)).setAttribute('class',"box"); //I read that using EVAL is bad. What is better way to avoid repeating 9 times?
	// };

	//b1.setAttribute('class', "box");

//The '};' below this line closes the main function
});
