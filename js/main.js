// select your elements first - what is the user going to interact with?

let navButtons = document.querySelectorAll("#buttonHolder img"),
theHeadline = document.querySelector("#headLine h1"),
puzzlePieces = document.querySelectorAll(".puzzle-pieces img"),
dropZones = document.querySelectorAll(".drop-zone"),
puzzleBoard = document.querySelector(".puzzle-board"),
draggedPiece;

//function go in the middle - this is a 1 to many or 1 to 1 connection to elements in the DOM

function changeBGImage() {
	puzzleBoard.style.backgroundImage = `url(images/backGround${this.id}.jpg)`;
} 

function handleStartDrag() {
	console.log("dragged", this, "piece");
	draggedPiece = this;
}

function handleDragOver(e) {
	e.preventDefault();
	console.log ("dragged over the piece")
}

function handleDrop(e) {
	e.preventDefault();
	console.log ("dropped the piece");
	e.target.appendChild(draggedPiece);
}

//event handling at the bottom - how is the user going to interact with the elements / controls you provide?

navButtons.forEach(button => button.addEventListener("click", changeBGImage));

puzzlePieces.forEach(piece => piece.addEventListener("dragstart", handleStartDrag));

dropZones.forEach(zone => zone.addEventListener("dragover", handleDragOver));
dropZones.forEach(zone => zone.addEventListener("drop", handleDrop));


