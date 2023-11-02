const container = document.getElementById('grid-container');
const createGridButton = document.getElementById('create-grid-btn');
const clearGridButton = document.getElementById('clear-grid-btn');
let isDrawing = false;

// Function to create the grid and add click-and-drag effect
function createGrid(rows, cols) {
    // Clear the existing grid
    container.innerHTML = '';

    container.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${rows}, 1fr)`;

    for (let i = 0; i < rows * cols; i++) {
        const cell = document.createElement('div');
        cell.className = 'cell';
        container.appendChild(cell);

        cell.addEventListener('mousedown', () => {
            isDrawing = true;
            cell.style.backgroundColor = 'black'; // Change the color as needed
        });

        cell.addEventListener('mouseover', () => {
            if (isDrawing) {
                cell.style.backgroundColor = 'black'; // Change the color as needed
            }
        });

        cell.addEventListener('mouseup', () => {
            isDrawing = false;
        });

        cell.addEventListener('mouseout', () => {
            if (isDrawing) {
                cell.style.backgroundColor = 'black'; // Change the color as needed
            }
        });
    }
}

// Set the default grid size to 16x16 when opening the page
createGrid(16, 16);

createGridButton.addEventListener('click', () => {
    const gridSize = prompt('Enter the size of rows and columns (e.g., "16x16" for a 16x16 grid):');
    
    if (gridSize) {
        const [rowStr, colStr] = gridSize.split('x');
        const rows = parseInt(rowStr, 10);
        const cols = parseInt(colStr, 10);

        if (!isNaN(rows) && !isNaN(cols)) {
            createGrid(rows, cols);
        } else {
            alert('Please enter valid row and column sizes.');
        }
    }
});

clearGridButton.addEventListener('click', () => {
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        cell.style.backgroundColor = 'lightgray'; // Reset color to default
    });
});
