//Tic Tac Toe with OOP
//Homework 3-26-15
//Steven Gordon

// Tic Tac Toe top-level constructor

function TicTacToe() {

	//Declare variables

	this.$fullBoard = $('#board');

	this.$reset = $('#reset');

	this.$nextUp = $('#next');

	this.totalMoves = 0;

	this.boardArray = [null, null, null, null, null, null, null, null, null];

	this.boxMove = -1; //placeholder value

};

// Tic Tac Toe prototype methods

TicTacToe.prototype.alternateMoves = function() {
	//This is the main "run-time" function



}


TicTacToe.prototype.testForWinner = function(player) {
	//check if "player" (which is X or O) wins in any of 8 ways
	return this;
};


TicTacToe.prototype.startGame = function() {
	var playerX = new Player("X");
	var playerO = new Player("O");
}

TicTacToe.prototype.reset = function() {

	return this;
};

// Player constructor

function Player(letter) {
	this.myTurnNow = new Boolean();
	this.character = ""; //so that in theory could play A vs B not just X vs O. Choose your favorite letter! :)


}

// Player prototype methods

Player.prototype.checkMyTurn = function(whichPlayer) {
	if (this.myTurnNow === true) {
		this.myTurnNow = false; //not my turn anymore... assuming I move now...
		//now set OTHER player's flag to show it is their turn
		eval("player"+getOpponentCharacter(this.character)).myTurnNow = true;

		return this.character;

	}
}

Player.prototype.getOpponentCharacter = function(whichPlayer) {
	if (whichPlayer === "X") {
		return "O";
	} else if (whichPlayer === "O") {
		return "X";
	} else {
		throw "whichPlayer is neither X nor O. Why?"
	}
};




