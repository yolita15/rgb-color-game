
var numColors = 6;
var colors = [];
var pickedColor;


var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var mode = document.querySelectorAll(".mode");

init();

function init(){
	setUpMode();
	setUpSquares();
	reset();
}


function setUpMode() {
	for(var i = 0; i < mode.length; i++){
	mode[i].addEventListener("click", function(){

			mode[0].classList.remove("selected");
			mode[1].classList.remove("selected");
			this.classList.add("selected");

			if(this.textContent === "Easy"){
				numColors = 3;
			} else {
				numColors = 6;
			}
			reset();
		});
 	}
}

function setUpSquares(){
	for(var i = 0; i < squares.length; i++){
	 	squares[i].addEventListener("click", function(){

			var clickedColor = this.style.backgroundColor;

			if(clickedColor === pickedColor){
				message.textContent = "Correct!";
				h1.style.backgroundColor = pickedColor;
				resetButton.textContent = "Play again?";
				correctColor(pickedColor);
			} else {
				this.style.backgroundColor = "#232323";
				message.textContent = "Try again!";
			}
	 	});
 	}
}

resetButton.addEventListener("click", function(){
	reset();
});

//Reset the game
function reset(){
	colors = generateRandomColors(numColors);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;

	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}

	h1.style.backgroundColor = "steelblue";
	resetButton.textContent = "New colors";
	message.textContent = " ";
}

//Generate random colors.
function randomColor(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);

	return "rgb(" + r + ", " + g + ", " + b + ")";
}

//Array with random colors.
function generateRandomColors(num){
	var arr = [];
	for(var i = 0; i < num; i++){
		arr.push(randomColor());
	}
	return arr;
}

//Picking random color from the array.
function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

//Make all squares in the correct color.
function correctColor(color){
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = color;
	}
}