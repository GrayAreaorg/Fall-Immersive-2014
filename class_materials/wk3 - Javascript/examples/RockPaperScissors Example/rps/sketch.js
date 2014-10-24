var win_lose_draw = "start";
var user_input = '';
var computer_input = '';

function setup() {
  // put setup code here
  var result = createCanvas(640,480);
  result.parent('result');

}

function draw() {
  // put drawing code here
 	drawScreen();
}

function drawScreen() {
	background(255);
	if (win_lose_draw == "start") {
		fill(0);
  		textSize(32);
 		text("Let's play Rock Paper Scissors!", 200, 200);
	}
	else if (win_lose_draw == "win") {
		fill(0);
  		textSize(32);
  		text ("Win",100,50);
  		text ("Computer: " + computer_input,100,100);
 		text(user_input, 100, 200);
	}
	else if (win_lose_draw == "lose") {
		fill(0);
  		textSize(32);
  		text ("Lose",100,50);
  		text ("Computer: " + computer_input,100,100);
 		text(user_input, 100, 200);
	}
	else if (win_lose_draw == "draw") {
		fill(0);
  		textSize(32);
  		text ("Draw",100,50);
  		text ("Computer: " + computer_input,100,100);
 		text(user_input, 100, 200);
	}

}

function getInput() {
	win_lose_draw = "draw";
	var inputBox = document.getElementById('user_guess');
	user_input = inputBox.value;
	var random_number = Math.floor(Math.random() * 3);  // 0 , 1, 2
	if ( random_number == 0 ) {
		computer_input = 'rock';
	}
	else if ( random_number == 1 ) {
		computer_input = 'paper';
	}
	else if ( random_number == 2 ) {
		computer_input = 'scissors';
	}

	if (user_input == 'rock') {
		if (computer_input == 'rock') {
			win_lose_draw = 'draw';
		}
		if (computer_input == 'paper') {
			win_lose_draw = 'lose';
		}
		if (computer_input == 'scissors') {
			win_lose_draw = 'win';
		}

	}
	else if (user_input == 'paper') {
		if (computer_input == 'rock') {
			win_lose_draw = 'win';
		}
		if (computer_input == 'paper') {
			win_lose_draw = 'draw';
		}
		if (computer_input == 'scissors') {
			win_lose_draw = 'lose';
		}
		
	}
	else if (user_input == 'scissors') {
		if (computer_input == 'rock') {
			win_lose_draw = 'lose';
		}
		if (computer_input == 'paper') {
			win_lose_draw = 'win';
		}
		if (computer_input == 'scissors') {
			win_lose_draw = 'draw';
		}
		
	}	
	else {

	}

	inputBox.value = '';
}
































































