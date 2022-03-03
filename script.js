// query selection and init
let resetButton = document.querySelector('.reset-button');
let gridButton = document.querySelector('.grid-size');

let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

let squareSize = 16;
createGrid(squareSize);
squarePaint();

function createGrid(num) {
	const container = document.querySelector('.container');
	const grid = document.createElement('div');
	grid.id = 'grid';
	container.appendChild(grid);

	// create square divs
	function createSquare(size) {
		const squareDiv = document.createElement('div');
		squareDiv.classList.add('square');
		squareDiv.style.width = `${size}px`;
		squareDiv.style.height = `${size}px`;

		return squareDiv;
	}

	// create the grid + append the square divs
	for (let i = 0; i < num * num; i++) {
		grid.appendChild(createSquare(grid.clientWidth / num));
	}
}

// paint the divs
function squarePaint() {
	let gridSquare = document.querySelectorAll('.square');

	gridSquare.forEach((square) => {
		square.addEventListener('mouseenter', (event) => {
			if (mouseDown) {
				square.style.backgroundColor = 'black';
			}
		});
	});
}

// grid size button functions
function gridSize() {}

// reset button functions
resetButton.addEventListener('click', (event) => {
	let grid = document.querySelectorAll('.square');

	grid.forEach((square) => {
		square.style.backgroundColor = '#faebd7';
	});
});
