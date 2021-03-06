window.onload = function() {

//Set up all variables

var b1 = document.getElementById('box1');
var b2 = document.getElementById('box2');
var b3 = document.getElementById('box3');
var b4 = document.getElementById('box4');
var b5 = document.getElementById('box5');
var b6 = document.getElementById('box6');
var b7 = document.getElementById('box7');
var b8 = document.getElementById('box8');
var b9 = document.getElementById('box9');

var reset = document.getElementById('reset');

var totalMoves = 0;

//var boardArray = [[null, null, null],[null, null, null],[null, null, null]];
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

		//console.log(target);

		var boxMove = Number(event.target.id.charAt(3)); //this is which box was clicked

		//First, is box available for a move or not?
		if (boxAvailable(boxMove)) {
			//if true, box is available for a move

			//assign correct letter to the correct box
			putBox(boxMove, whichPlayer(totalMoves));

			event.target.innerHTML = ((whichPlayer(totalMoves)) ? "X" : "O");

			totalMoves++;

			if (checkForWinner(boardArray)[0]) {
				alert("Congratulations "+((checkForWinner(boardArray)[1]) ? "X" : "O")+" you win! Click reset to play again.");
			};

			console.log(boardArray);


		} else {
			//if false, box is not available, reject the move
			alert("That square is taken. Try again.");
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
	console.log("results before testing: " + results);

		for (var i = 0; i < waysToWin.length; i++) {
	console.log("Testing: "+waysToWin[i]);
//			if (arr[waysToWin[i][0]] && arr[waysToWin[i][1]] && arr[waysToWin[i][2]]) { old way: wont work because !null = true
			if ((arr[waysToWin[i][0]] === arr[waysToWin[i][1]]) && (arr[waysToWin[i][1]] === arr[waysToWin[i][2]]) && !(arr[waysToWin[i][2]] === null)) {
				results[0] = true; //someone wins
				results[1] = arr[waysToWin[i][0]]; //winner is whichever piece in any of the 3 boxes
				console.log(results);
				return results;
			};
		};
		return [false, null];
	};

	//old & not used functions after here


	var markX = function(event) {
 		event.target.style.backgroundColor = "red";
 		event.target.innerHTML = "X";
 		boxMove = Number(event.target.id.charAt(3));
 	};

 	var markO = function(event) {
 		event.target.style.backgroundColor = "darkgray";
 		event.target.innerHTML = "O";
 	};

 	var test = function(event) {
 		alert("test worked");
 	};



//Create listeners

b1.addEventListener('click', makeMove);
b2.addEventListener('click', makeMove);
b3.addEventListener('click', makeMove);
b4.addEventListener('click', makeMove);
b5.addEventListener('click', makeMove);
b6.addEventListener('click', makeMove);
b7.addEventListener('click', makeMove); 
b8.addEventListener('click', makeMove); 
b9.addEventListener('click', makeMove); 

reset.onclick = function(event) {
	boardArray = [null, null, null, null, null, null, null, null, null];
	totalMoves = 0;
	results = [null, null]; //this should NOT be needed, as results is local variable.

	//need to clear the X and O marks

	b1.innerHTML = '&nbsp;'
	b2.innerHTML = '&nbsp;'
	b3.innerHTML = '&nbsp;'
	b4.innerHTML = '&nbsp;'
	b5.innerHTML = '&nbsp;'
	b6.innerHTML = '&nbsp;'
	b7.innerHTML = '&nbsp;'
	b8.innerHTML = '&nbsp;'
	b9.innerHTML = '&nbsp;'
}





//The '};' below this line closes the main window.onload function
};
