// CRYSTAL COLLECTOR GAME

// There will be four crystals displayed as buttons on the page
// The player will be shown a random number (targetNumber) at the start of the game
// When the player clicks on a crystal, it will add a specific amount of points to the player's total score.
// The game will hide this amount until the player clicks a crystal
// When they do click a crustal, update the player's score counter (scoreCounter)
// The player wins if their total score matches the random number from the beginning of the game
// The player loses if their score goes above the random number.
// The game restarts whenever the player wins or loses.

// GLOBAL VARIABLES

var targetNumber; // score the player should reach by clicking the crystals
var gameLost;
var gameWin;


// for loop to add 4 divs to the HTML

for (var i = 0; i < 4; i++) {
    var crystal = $("<div>");
    crystal.attr("class", 'crystal');
    $(".crystals").append(crystal);
}