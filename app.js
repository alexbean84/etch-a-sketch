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

const button = document.getElementById('btn');

function initialize() {
    const question = prompt('How many squares do you want? (The range is 5-30)')
    if (question == 5) {
        makeRows(5, 5);
        button.removeAttribute('onclick');
    } else if (question == 6) {
        makeRows(6, 6);
        button.removeAttribute('onclick');
    } else if (question == 7) {
        makeRows(7, 7);
        button.removeAttribute('onclick');
    } else if (question == 8) {
        makeRows(8, 8);
        button.removeAttribute('onclick');
    } else if (question == 9) {
        makeRows(9, 9);
        button.removeAttribute('onclick');
    } else if (question == 10) {
        makeRows(10, 10);
        button.removeAttribute('onclick');
    } else if (question == 11) {
        makeRows(11, 11);
        button.removeAttribute('onclick');
    } else if (question == 12) {
        makeRows(12, 12);
        button.removeAttribute('onclick');
    } else if (question == 13) {
        makeRows(13, 13);
        button.removeAttribute('onclick');
    } else if (question == 14) {
        makeRows(14, 14);
        button.removeAttribute('onclick');
    } else if (question == 15) {
        makeRows(15, 15);
        button.removeAttribute('onclick');
    } else if (question == 16) {
        makeRows(16, 16);
        button.removeAttribute('onclick');
    } else if (question == 17) {
        makeRows(17, 17);
        button.removeAttribute('onclick');
    } else if (question == 18) {
        makeRows(18, 18);
        button.removeAttribute('onclick');
    } else if (question == 19) {
        makeRows(19, 19);
        button.removeAttribute('onclick');
    } else if (question == 20) {
        makeRows(20, 20);
        button.removeAttribute('onclick');
    } else if (question == 21) {
        makeRows(21, 21);
        button.removeAttribute('onclick');
    } else if (question == 22) {
        makeRows(22, 22);
        button.removeAttribute('onclick');
    } else if (question == 23) {
        makeRows(23, 23);
        button.removeAttribute('onclick');
    } else if (question == 24) {
        makeRows(24, 24);
        button.removeAttribute('onclick');
    } else if (question == 25) {
        makeRows(25, 25);
        button.removeAttribute('onclick');
    } else if (question == 26) {
        makeRows(26, 26);
        button.removeAttribute('onclick');
    } else if (question == 27) {
        makeRows(27, 27);
        button.removeAttribute('onclick');
    } else if (question == 28) {
        makeRows(28, 28);
        button.removeAttribute('onclick');
    } else if (question == 29) {
        makeRows(29, 29);
        button.removeAttribute('onclick');
    } else if (question == 30) {
        makeRows(30, 30);
        button.removeAttribute('onclick');
    } else {
        alert('Try again!');
    }
    
}

function reset() {
    location.reload();
}