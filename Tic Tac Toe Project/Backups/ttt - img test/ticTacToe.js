window.onload = function() {

//Set up all variables

var b = [];

b[0] = null;

for (var i = 1; i <= 10; i++) {
	b[i] = document.getElementById('box'+i);
	console.log(b[i]);
};

/*
var b1 = document.getElementById('box1');
var b2 = document.getElementById('box2');
var b3 = document.getElementById('box3');
var b4 = document.getElementById('box4');
var b5 = document.getElementById('box5');
var b6 = document.getElementById('box6');
var b7 = document.getElementById('box7');
var b8 = document.getElementById('box8');
var b9 = document.getElementById('box9');
*/

var reset = document.getElementById('reset');

var nextUp = document.getElementById('next');
console.log(nextUp);

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

			event.target.innerHTML = (player ? "X" : "O");
			event.target.setAttribute("class", (player ? "box XXX" : "box OOO"));

			nextUp.innerHTML = (player ? "O's turn now..." : "X's turn now...");

			totalMoves++;

			if (checkForWinner(boardArray)[0]) {
				nextUp.innerHTML = "Congratulations!  "+((checkForWinner(boardArray)[1]) ? "X won!" : "O won!")+" Game over.  Click reset to play again.";
				reset.setAttribute("class", "endgame");
				//alert("Congratulations, "+((checkForWinner(boardArray)[1]) ? "X" : "O")+", you win! Click reset to play again.");
			} else {
					if (totalMoves >= 9) {
					nextUp.innerHTML = "Game over. It's a tie. Click reset to play again.";
					reset.setAttribute("class", "endgame");
					//alert("Game over. Click reset to play again.");
					};
			};

			//console.log(boardArray);

		} else {
			//if false, box is not available, reject the move
			nextUp.innerHTML = "That square is taken. Try again, "+(whichPlayer(totalMoves) ? "X" : "O");
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

for (var i = 1; i < 10; i++) {
	b[i].addEventListener('click', makeMove);
};

// b1.addEventListener('click', makeMove);
// b2.addEventListener('click', makeMove);
// b3.addEventListener('click', makeMove);
// b4.addEventListener('click', makeMove);
// b5.addEventListener('click', makeMove);
// b6.addEventListener('click', makeMove);
// b7.addEventListener('click', makeMove); 
// b8.addEventListener('click', makeMove); 
// b9.addEventListener('click', makeMove); 

reset.onclick = function(event) {
	boardArray = [null, null, null, null, null, null, null, null, null];
	totalMoves = 0;
	results = [null, null]; //this should NOT be needed, as results is local variable.
	reset.setAttribute('class', 'midgame');
	nextUp.innerHTML = "Start again. X's turn...";

	//need to clear the X and O marks

	for (var i = 1; i < 10; i++) {
		b[i].innerHTML = '&nbsp;'
		b[i].setAttribute('class', "box");
	};

	// b1.innerHTML = '&nbsp;'
	// b2.innerHTML = '&nbsp;'
	// b3.innerHTML = '&nbsp;'
	// b4.innerHTML = '&nbsp;'
	// b5.innerHTML = '&nbsp;'
	// b6.innerHTML = '&nbsp;'
	// b7.innerHTML = '&nbsp;'
	// b8.innerHTML = '&nbsp;'
	// b9.innerHTML = '&nbsp;'

	// for (var i = 1; i <=9; i++) {
	// 	eval("b"+String(i)).setAttribute('class',"box"); //I read that using EVAL is bad. What is better way to avoid repeating 9 times?
	// };

	//b1.setAttribute('class', "box");
}

//The '};' below this line closes the main window.onload function
};
