const gridContainer = document.querySelector('#grid-container');
const resetButton = document.querySelector('#reset');
const changeButton = document.querySelector('#size')
window.addEventListener("load", setGrid);

function setGrid() {
    setGridSize(16);
    createGrid(16);
}

function setNewGrid(n) {
    setGridSize(n);
    createGrid(n);
}

function setGridSize(size) {
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
}

function createGrid(size) {
    for (let i = 0; i < size * size; i++) {
        const gridDiv = document.createElement("div");
        gridDiv.classList = "grid-div";
        gridDiv.addEventListener('mouseover', changeColor);
        gridContainer.appendChild(gridDiv);
    }
}



function changeColor(e) {
    const randomRed = Math.floor(Math.random() * 256);
    const randomGreen = Math.floor(Math.random() * 256);
    const randomBlue = Math.floor(Math.random() * 256);
    e.target.style.backgroundColor = `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`;
}

resetButton.addEventListener('click', () => {
    location.reload();
});

changeButton.addEventListener('click', () => {
    let size = parseInt(prompt("Insert new size:"));
    clearGrid();
    setNewGrid(size)
})

function clearGrid() {
    const gridArray = Array.from(gridContainer.childNodes);
    gridArray.forEach((element) => {
      gridContainer.removeChild(element);
    });
}