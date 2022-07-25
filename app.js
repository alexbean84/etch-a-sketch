function startGame() {

}

const grids = document.querySelector('.grid');

function makeRows(rows, cols) {
    grids.style.setProperty('--grid-rows', rows);
    grids.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
        let cell = document.createElement('div');
        cell.innerText = (c + 1);
        grids.appendChild(cell).className = 'grid-item';
    }
}

makeRows(16, 16);