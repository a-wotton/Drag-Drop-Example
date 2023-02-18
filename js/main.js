// select your elements first - what is the user going to interact with?

let navButtons = document.querySelectorAll("#buttonHolder img"),
theHeadline = document.querySelector("#headLine h1"),
puzzlePieces = document.querySelectorAll(".puzzle-pieces img"),
dropZones = document.querySelectorAll(".drop-zone"),
puzzleBoard = document.querySelector(".puzzle-board"),
pieceZone = document.querySelector(".puzzle-pieces"),
piece1, piece2, piece3, piece4,
draggedPiece;


//function go in the middle - this is a 1 to many or 1 to 1 connection to elements in the DOM

function changeBGImage() {
	puzzleBoard.style.backgroundImage = `url(images/backGround${this.id}.jpg)`;
	piece1 = dropZones[0].childElement;
	piece2 = dropZones[1].childElement;
	piece3 = dropZones[2].childElement;
	piece4 = dropZones[3].childElement;	
	dropZones[0].remove(piece1);
	dropZones[1].remove(piece2);
	dropZones[2].remove(piece3);
	dropZones[3].remove(piece4);
	pieceZone.appendChild(puzzlePieces[0]);
	pieceZone.appendChild(puzzlePieces[1]);
	pieceZone.appendChild(puzzlePieces[2]);
	pieceZone.appendChild(puzzlePieces[3]);
	debugger;
}	

function handleStartDrag() {
	console.log("dragged", this, "piece");
	draggedPiece = this;
}

function handleDragOver(e) {
	console.log ("dragged over the piece");
	e.preventDefault();
}

function handleDrop(e) {
	console.log ("dropped the piece");
	if (this.children.length == 0) {
	e.target.appendChild(draggedPiece);	
	}
}

function childDisplay(e) {
	if (this.hasChildNodes()){
		console.log(e.target, "has children");
	}
}

function remChild() {
	childPiece.parentElement.removeChild(childPiece);
}

//event handling at the bottom - how is the user going to interact with the elements / controls you provide?

navButtons.forEach(button => button.addEventListener("click", changeBGImage));

puzzlePieces.forEach(piece => piece.addEventListener("dragstart", handleStartDrag));

dropZones.forEach(zone => zone.addEventListener("dragover", handleDragOver));
dropZones.forEach(zone => zone.addEventListener("drop", handleDrop));
dropZones.forEach(zone => zone.addEventListener("mouseover", childDisplay));





