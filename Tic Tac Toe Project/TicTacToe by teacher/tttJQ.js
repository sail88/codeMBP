// Wrap all code logic inside of a onload callback so
// that all of the HTML has loaded. If we didn't do this
// then we wouldn't be able to grab all of the HTML elements
// off of the page (as they would not have loaded yet).
$(function) = function() {
  // Use a immediately invoked function to create a closure
  // for the turn variable. The idea is to avoid polution the
  // current scope with extra variables. The return value of
  // the immediately invoked function, is another function
  // that returns 'X' if the `turn` variable is `true` and
  // 'O' otherwise.
  var currentPlayer = (function() {
    // Define a scoped variable that determines which players
    // turn it currently is.
    var turn = false;
    // Return a function that changes which players turn it is
    // by negating the `turn` variable.
    return function() {
      // Negate the turn variable. That is if `turn` is true
      // change it to `false` and if `turn` is `false` change
      // it to true.
      turn = !turn;
      // Use a ternary operator that gives 'X' if `turn` is
      // `true` and 'O' is `turn` is `false`
      return turn ? 'X' : 'O';
    };
  })();

  // Grab the div with `id='board'` and set it to a variable
  var board = document.getElementById('board');

  $board.click(function(event) {
    var $el = $(event.target);
    var elContent = el.innerHTML;
    // Check to see if the inner HTML is '&nbsp;'
    if (elContent === '&nbsp;') {
      // If it is set the target elements inner HTML to be the
      // current player
      var player = currentPlayer();
      $el.html(player).addClass(player);

      // Grab the target elements `class` attributes
     
      // And add a class to the elements current class list
      el.addClass(player);
    } else {
      // Otherwise, log that the element has already been played
      console.log("That Square has been played");
    }
  };

  // Grab the reset button by using it's id
  var $button = $('reset');

$button.click(function(e)) {
  var $boxes = $('.box');
  $boxes.html('&nbsp;').removeClass("X O");
}

    // Reset the current player to be 'X'
    // NOTE: THIS IS TRICKY
    if (currentPlayer() === 'X') {
      currentPlayer();
    }
  };

};
}