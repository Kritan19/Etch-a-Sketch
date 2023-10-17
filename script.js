
function createGrid( min , max) {
    //function to create a grid of squares.
    for (let i = 0; i < min * max; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        Container.appendChild(square);
    }
}
const rangeInput = document.getElementById("rangeInput");
const output = document.getElementById("output");

rangeInput.addEventListener("input", function() {
    const value = this.value;
    const result = `${value}x${value}`;
    output.textContent = result;
});
