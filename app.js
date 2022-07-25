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


function initialize() {
    const question = prompt('How many squares do you want? (The range is 5-30)')
    if (question == 5) {
        makeRows(5, 5);
    } else if (question == 6) {
        makeRows(6, 6);
    } else if (question == 7) {
        makeRows(7, 7);
    } else if (question == 8) {
        makeRows(8, 8);
    } else if (question == 9) {
        makeRows(9, 9);
    } else if (question == 10) {
        makeRows(10, 10);
    } else if (question == 11) {
        makeRows(11, 11);
    } else if (question == 12) {
        makeRows(12, 12);
    } else if (question == 13) {
        makeRows(13, 13);
    } else if (question == 14) {
        makeRows(14, 14);
    } else if (question == 15) {
        makeRows(15, 15);
    } else if (question == 16) {
        makeRows(16, 16);
    } else if (question == 17) {
        makeRows(17, 17);
    } else if (question == 18) {
        makeRows(18, 18);
    } else if (question == 19) {
        makeRows(19, 19);
    } else if (question == 20) {
        makeRows(20, 20);
    } else if (question == 21) {
        makeRows(21, 21);
    } else if (question == 22) {
        makeRows(22, 22);
    } else if (question == 23) {
        makeRows(23, 23);
    } else if (question == 24) {
        makeRows(24, 24);
    } else if (question == 25) {
        makeRows(25, 25);
    } else if (question == 26) {
        makeRows(26, 26);
    } else if (question == 27) {
        makeRows(27, 27);
    } else if (question == 28) {
        makeRows(28, 28);
    } else if (question == 29) {
        makeRows(29, 29);
    } else if (question == 30) {
        makeRows(30, 30);
    } else {
        alert('Try Again!');
    }
}

function reset() {
    location.reload();
}