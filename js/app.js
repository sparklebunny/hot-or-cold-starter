
$(document).ready(function(){

	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

// ---------------------------------------------------
	// List of Variables
	// var game = 
	var answer = Math.floor(Math.random()*10)+1;
		console.log("The answer is " + answer);
	var numberOfGuesses = 0;
	var distance = null;
	var previousDistance = null;

	function game() {
	    $("#new").click(function (event) {
	        // event.preventDefault();
	        answer = Math.floor((Math.random() * 100) + 1);
	        	console.log(answer);
			numberOfGuesses = 0;
	        guesses = [];
	        distance = null;
	        previousDistance = null;
	        $("#guess").val(''); 
	    });
	}


	// $(".game").function getRandomInt() {
 //  		return answer;
	// }

	$("#guessButton").click(processGuess); 

	function processGuess() {
		var guess = $("#userGuess").val();
		var numberGuess = parseInt(guess, 10);
		if (numberGuess > answer) {
			alert("You're hot. Try again.")
		}
		if (numberGuess < answer) {
			alert("You're cold. Try again.")
		}
		else if (numberGuess == answer) {
			alert("YOU'RE CORRECT! Way to go! Choose NEW GAME to play again.")
		}
		$("#count").html(++numberOfGuesses);
		$("#guessList").append('<p>' + guess + '</p>');

	}



	// function getGuess() {
	// 	$("#guessButton").click(game);
	// 	$("#userGuess").keydown(function (enter) {
	// 		if (enter.keyCode == 13) {
	// 			game();
	// 		}
	// 	});
	// }

	// $("guessList").append(function) {
	// 	if ("#userGuess" > answer);
	// 		return "Your answer is too high";
	// 	if ("#userGuess" < answer);
	// 		return "Your answer is too low";
	// 	else if ("#userGuess" == answer);
	// 		return "You're Right! Nice job!";
	// }




	// getGuess();

	



});


