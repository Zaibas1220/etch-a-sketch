const gridContainer = document.querySelector('#grid-container');
const resetButton = document.querySelector('#reset');
window.addEventListener("load", setGrid);

function setGrid() {
    setGridSize(16);
    createGrid(16);
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