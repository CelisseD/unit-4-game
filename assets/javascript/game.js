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
var userScore; // score that the player earns by clicking the crystals
var gameLost = 0;
var gameWin = 0;
var previousNumber = 0;


var crystalImagesArray = [
    "assets/images/crystal1.png",
    "assets/images/crystal2.png",
    "assets/images/crystal3.png",
    "assets/images/crystal4.png" ]



// Assigns a target number that the user should reach
targetNumber = Math.floor(Math.random() * 102) + 19;

userScore = 

// Adds the target number to the HTML
$("#target").html("Target Number: " + targetNumber);

// Run the following function when the game begins upon page load.
var beginGame = function () {
    $(".crystals").empty(); 

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
            crystal.css({
                // adds a crystal image from the crystalImagesArray into each div
                "background-image":"url('" + crystalImagesArray[i] + "')",
                "background-size":"cover"
            });   

        $(".crystals").append(crystal);

}
}

beginGame();

// Allows user to click on a crystal and receive a number value which has pulled from dataRandom
$(".crystal").on("click", function() {
    var result;
    var num = parseInt($(this).attr('dataRandom'));
    previousNumber += num;

    // Adds the user's score to the HTML
    $("#userScore").html("Your Score: " + previousNumber);

    if (previousNumber > targetNumber) {
        gameLost--;

        $("#gameLost").html("😩😩😩 You Lose!!! 😩😩😩");

        beginGame();
        
    }
    
    else if (previousNumber === targetNumber){
        gameWin++;

        $("#gameWin").html("🏆🏆🏆 You Win!!! 🏆🏆🏆");

        beginGame();
    }
    
    console.log(previousNumber)
})});