// select your elements first - what is the user going to interact with?

let navButtons = document.querySelectorAll("#buttonHolder img"),
theHeadline = document.querySelector("#headLine h1"),
puzzleBoard = document.querySelector(".puzzle-board");

//function go in the middle - this is a 1 to many or 1 to 1 connection to elements in the DOM

function changeBGImage() {
	debugger;
	puzzleBoard.style.backGroundImage = "url(../backGroundImage)"
} 

//event handling at the bottom - how is the user going to interact with the elements / controls you provide?

navButtons.forEach(button => button.addEventListener("click", changeBGImage));

