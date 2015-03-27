window.onload = function() {

	var currentPlayer = (function(){
		//This isolates TURN variable only to be accessible to currentPlayer function, not to rest of code.
		//But TURN remains stored, does not get erased after current Player evaluates

		var turn = false;
		return function() {
			turn = !turn;
			return turn ? "X" : "O";
		};
	})(); // by having the () at the end, it automatically runs and evalutes this every time called.

	var board = document.getElementById('board');

	board.onclick = function(event) {
		var el = event.target;
		var player = currentPlayer();
		el.innerHTML = player;

		var classList



		console.log(player);
		el.setAttribute('class',player);
	}

	console.log(board);
	console.log(currentPlayer);


// Below is final closing curly brace
};

