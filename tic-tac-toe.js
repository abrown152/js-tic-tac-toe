function TicTacToe() {

}

TicTacToe.hasWon = function() {
  // Check for a winner
  var square1value = document.getElementById("square1").innerHTML
  var square2value = document.getElementById("square2").innerHTML
  var square3value = document.getElementById("square3").innerHTML
  var square4value = document.getElementById("square4").innerHTML
  var square5value = document.getElementById("square5").innerHTML
  var square6value = document.getElementById("square6").innerHTML
  var square7value = document.getElementById("square7").innerHTML
  var square8value = document.getElementById("square8").innerHTML
  var square9value = document.getElementById("square9").innerHTML

  if ((squarevalue1 === squarevalue2) && (squarevalue2 === squarevalue3)) {
    return true
  } else if ((squarevalue4 === squarevalue5) && (squarevalue5 === squarevalue6)) {
    return true
  } else if ((squarevalue7 === squarevalue8) && (squarevalue8 === squarevalue9)) {
    return true
  } else if ((squarevalue1 === squarevalue4) && (squarevalue4 === squarevalue7)) {
    return true
  } else if ((squarevalue2 === squarevalue5) && (squarevalue5 === squarevalue8)) {
    return true
  } else if ((squarevalue3 === squarevalue6) && (squarevalue6 === squarevalue9)) {
    return true
  } else if ((squarevalue1 === squarevalue5) && (squarevalue5 === squarevalue9)) {
    return true
  } else if ((squarevalue3 === squarevalue5) && (squarevalue5 === squarevalue7)) {
    return true
  } else {
    return false
  }
}

// Functions for checking boxes
function checkBox(id, letter) {
  document.getElementById(id).innerHTML = letter;
  // ^^Assign the X or O as HTML text
  var box = $(board).find(id)
  // Assign the checkbox object to a variable so it can have a class added to it
  box.addClass(letter)
  // Adding the class "x" or "o" to the checkbox object so we can use that to easily track if someone has won. Not working wtf???
  console.log(box)
}

$(document).ready( function() {
  // The player variable keeps track of whose turn it is
  var player = 1

  // Uses player variable to determine whether to mark X or O and which box to mark
  $( ".checkbox" ).click(function() {
    if (document.getElementById(this.id).innerHTML !== ("X" || "O")) {
      // Trying to prevent multiple plays on the same square but this isn't working
      if (player === 1) {
        checkBox(this.id, "X")
        player = 2
        // this.addClass('xclass')
        if (TicTacToe.hasWon() === true) {
          alert("We have a winner^_^")
        }
      } else {
        checkBox(this.id, "O")
        player = 1
        // this.addClass('oclass')
        if (TicTacToe.hasWon() === true) {
          alert("We have a winner^_^")
        }
      }
    } else {
      alert("This box has already been played. Please choose another.")
    }
  });
});
