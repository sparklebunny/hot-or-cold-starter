
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
	// var answer = Math.floor(Math.random()*10)+1);
	// 	console.log("The answer is " + answer);
	// var numberOfGuesses = 0;
	// var guesses = [];
	// var distance = null;
	// var previousDistance = null;


	$(".game").function getRandomInt() {
  		return answer;
	}

	function getGuess() {
		$("#guessButton").click(game);
		$("#userGuess").keydown(function (enter) {
			if (enter.keyCode == 13) {
				game();
			}
		});
	}

	$("guessList").append(function) {
		if ("#userGuess" > answer);
			return "Your answer is too high";
		if ("#userGuess" < answer);
			return "Your answer is too low";
		else if ("#userGuess" == answer);
			return "You're Right! Nice job!";
	}




	getGuess();

	function game() {
    
    $('#newgame').click(function (e) {
        e.preventDefault();
        var answer = Math.floor((Math.random() * 100) + 1);
        	console.log(answer);
        var numberOfGuesses = 0;
        var guesses = [];
        var distance = null;
        var previousDistance = null;
        // $('#hint').html('');
        $('#guess').val('');
    });
}



















});


