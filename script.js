// query selection and init
let resetButton = document.querySelector('.reset-button');

let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

GridSize();
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
		square.addEventListener('mouseover', (event) => {
			if (mouseDown) {
				square.style.backgroundColor = 'black';
			}
		});
	});
}

// grid size button functions
function GridSize() {
	let answer = prompt('Please enter your grid size (Max 32)', 16);
	let answerInt = parseInt(answer);

	if (answer <= 32 && !isNaN(answer)) {
		squareSize = answerInt;
	} else if (answer > 32) {
		answer = alert('Invalid number, please try again!');
	}
	createGrid(squareSize);
}

// reset button functions
resetButton.addEventListener('click', (event) => {
	let grid = document.querySelectorAll('.square');

	grid.forEach((square) => {
		square.style.backgroundColor = '#faebd7';
	});
});
