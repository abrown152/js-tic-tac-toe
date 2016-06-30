function TicTacToe() {

}

TicTacToe.prototype = {
}

// Functions for checking boxes
function checkBox(id, letter) {
  document.getElementById(id).innerHTML = letter;
  console.log(letter)
}

$(document).ready( function() {
  var player = 1
  console.log(player)

  $( ".checkbox" ).click(function() {
    console.log("You clicked square 1")
    if (player === 1) {
      checkBox(this.id, "X")
      player = 2
    } else {
      checkBox(this.id, "O")
      player = 1
    }
  });
});
