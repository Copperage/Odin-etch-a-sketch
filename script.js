const grid = document.querySelector('.grid');

let squareSize = 5;
createGrid(squareSize);

// create square divs
function createSquare(size) {
	const square = document.createElement('div');
	square.classList.add('square');
	square.style.width = `${size}px`;
	square.style.height = `${size}px`;

	return square;
}

// create the grid + append squares
function createGrid(num) {
	for (let i = 0; i < num; i++) {
		for (let x = 0; x < num; x++) {
			grid.appendChild(createSquare(grid.clientWidth / num));
		}
	}
}
