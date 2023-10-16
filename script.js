
const Container = document.getElementById("container");

function createGrid() {
    for (let i = 0; i < 16 * 16; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        Container.appendChild(square);
    }
}
createGrid();
