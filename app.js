function startGame() {

}

const grids = document.querySelector('.grid');

function makeRows(rows, cols) {
    grids.style.setProperty('--grid-rows', rows);
    grids.style.setProperty('--grid-cols', cols);
    
}