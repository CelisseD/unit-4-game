// CRYSTAL COLLECTOR GAME

// There will be four crystals displayed as buttons on the page
// The player will be shown a random number (targetNumber) at the start of the game
// When the player clicks on a crystal, it will add a specific amount of points to the player's total score.
// The game will hide this amount until the player clicks a crystal
// When they do click a crystal, update the player's score counter (scoreCounter)
// The player wins if their total score matches the random number from the beginning of the game
// The player loses if their score goes above the random number.
// The game restarts whenever the player wins or loses.

$( document ).ready(function(){

// GLOBAL VARIABLES

var targetNumber; // score the player should reach by clicking the crystals
var gameLost;
var gameWin;
var previousNumber = 0;
var crystalImages = [
    ""
]



// Assigns a target number that the user should reach
targetNumber = Math.floor(Math.random() * 102) + 19;


// Adds the target number to the HTML
$("#target").html("Target Number: " + targetNumber);

// for loop to add 4 divs to the HTML
for (var i = 0; i < 4; i++) {

    var randomNumber = Math.floor(Math.random() * 11) + 1;
    
    // generates four random number values upon page load.
    var crystal = $("<div>");
        crystal.attr({
            "class": 'crystal',
            "dataRandom": randomNumber
            // assigns a random number value to each div
        });
            crystal.html(randomNumber);

    $(".crystals").append(crystal);

}

// Allows user to click on a crystal and receive a number value which has pulled from dataRandom
$(".crystal").on("click", function() {
    var result;
    var num = parseInt($(this).attr('dataRandom'));
    previousNumber += num;
    if (previousNumber > targetNumber) {
        console.log("You Lose!");
    }
    else if (previousNumber === targetNumber){
        console.log("You Win!");
    }
    console.log(previousNumber)
})});