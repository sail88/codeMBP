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

	console.log(board);
	console.log(currentPlayer);

	board.onclick = function(event) {
		var el = event.target;

		if (el.innterHTML === '&nbspl;') {
			var player = currentPlayer();
			el.innerHTML = player;

			var classList = el.getAttribute('class');
			el.setAttribute('class', classList + " " + player);
		} else {
			console.log("This square already clicked");
		}
	};

	var button = document.getElementById('reset');

	button.onclick = function(e) {
		var boxes = document.getElementsByClassName('box');

		for (var i = 0; i < boxes.length; i++) {
			var box = boxes[i];
			box.innerHTML = "&nbsp;";
			box.setAttribute('class', 'box');
			
		};
		
		if (currentPlayer() === "X" {
			currentPlayer(); //run it again if X, so becomes O, waiting to be X when game re-starts
		})


		}

	}
	}

//reset


// Below is final closing curly brace
};

