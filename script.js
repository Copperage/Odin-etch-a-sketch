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
function squarePaint(e) {
	const gridSquare = document.querySelectorAll('.square');
	let clicked = false;

	gridSquare.forEach((square) => {
		square.addEventListener('mousedown', (event) => {
			// square.classList.add('drawn');
			clicked = true;
			if (clicked === true) {
				square.addEventListener('mouseenter', (event) => {
					square.classList.add('drawn');
				});
			}
		});
	});
}
