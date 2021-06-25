// VARIABLES ##################################################

// get a list of every cell
let cells = document.querySelectorAll ('.cell');

// cursor div
let cursor = document.getElementById ('cursor');

// stage element
let stage = document.getElementById ('stage');

// mouse position
let mouse = {
    x: 0, y: 0, click: false, t: 0
}

// free cells
let freeCells = [0, 0, 0, 0, 0, 0, 0, 0, 0]; // 1 vaccine 2 covid

// game over?
let end = {gameOver: false, check: false};

// FUNCTIONS ##################################################

// check if game has over
let gameOver = () => {
    let go = freeCells;
    if (go[0] == go[1] && go[1] == go[2] && go[0] != 0) { // rows
        cells[0].classList.add ('cW'); cells[1].classList.add ('cW'); cells[2].classList.add ('cW');
        cells[0].style.backgroundColor = 'rgb(240, 240, 240)';
        cells[1].style.backgroundColor = 'rgb(240, 240, 240)';
        cells[2].style.backgroundColor = 'rgb(240, 240, 240)';
        cells[0].style.boxShadow = 'inset 0 0 10px 5px rgb(110, 110, 110)';
        cells[1].style.boxShadow = 'inset 0 0 10px 5px rgb(110, 110, 110)';
        cells[2].style.boxShadow = 'inset 0 0 10px 5px rgb(110, 110, 110)';
        return true;
    } else if (go[3] == go[4] && go[4] == go[5] && go[3] != 0) {
        cells[3].classList.add ('cW'); cells[4].classList.add ('cW'); cells[5].classList.add ('cW');
        cells[3].style.backgroundColor = 'rgb(240, 240, 240)';
        cells[4].style.backgroundColor = 'rgb(240, 240, 240)';
        cells[5].style.backgroundColor = 'rgb(240, 240, 240)';
        cells[3].style.boxShadow = 'inset 0 0 10px 5px rgb(110, 110, 110)';
        cells[4].style.boxShadow = 'inset 0 0 10px 5px rgb(110, 110, 110)';
        cells[5].style.boxShadow = 'inset 0 0 10px 5px rgb(110, 110, 110)';
        return true;
    } else if (go[6] == go[7] && go[7] == go[8] && go[6] != 0) {
        cells[6].classList.add ('cW'); cells[7].classList.add ('cW'); cells[8].classList.add ('cW');
        cells[6].style.backgroundColor = 'rgb(240, 240, 240)';
        cells[7].style.backgroundColor = 'rgb(240, 240, 240)';
        cells[8].style.backgroundColor = 'rgb(240, 240, 240)';
        cells[6].style.boxShadow = 'inset 0 0 10px 5px rgb(110, 110, 110)';
        cells[7].style.boxShadow = 'inset 0 0 10px 5px rgb(110, 110, 110)';
        cells[8].style.boxShadow = 'inset 0 0 10px 5px rgb(110, 110, 110)';
        return true;
    } else if (go[0] == go[3] && go[3] == go[6] && go[0] != 0) { // columns
        cells[0].classList.add ('cW'); cells[3].classList.add ('cW'); cells[6].classList.add ('cW');
        cells[0].style.backgroundColor = 'rgb(240, 240, 240)';
        cells[3].style.backgroundColor = 'rgb(240, 240, 240)';
        cells[6].style.backgroundColor = 'rgb(240, 240, 240)';
        cells[0].style.boxShadow = 'inset 0 0 10px 5px rgb(110, 110, 110)';
        cells[3].style.boxShadow = 'inset 0 0 10px 5px rgb(110, 110, 110)';
        cells[6].style.boxShadow = 'inset 0 0 10px 5px rgb(110, 110, 110)';
        return true;
    } else if (go[1] == go[4] && go[4] == go[7] && go[1] != 0) {
        cells[1].classList.add ('cW'); cells[4].classList.add ('cW'); cells[7].classList.add ('cW');
        cells[1].style.backgroundColor = 'rgb(240, 240, 240)';
        cells[4].style.backgroundColor = 'rgb(240, 240, 240)';
        cells[7].style.backgroundColor = 'rgb(240, 240, 240)';
        cells[1].style.boxShadow = 'inset 0 0 10px 5px rgb(110, 110, 110)';
        cells[4].style.boxShadow = 'inset 0 0 10px 5px rgb(110, 110, 110)';
        cells[7].style.boxShadow = 'inset 0 0 10px 5px rgb(110, 110, 110)';
        return true;
    } else if (go[2] == go[5] && go[5] == go[8] && go[2] != 0) {
        cells[2].classList.add ('cW'); cells[5].classList.add ('cW'); cells[8].classList.add ('cW');
        cells[2].style.backgroundColor = 'rgb(240, 240, 240)';
        cells[5].style.backgroundColor = 'rgb(240, 240, 240)';
        cells[8].style.backgroundColor = 'rgb(240, 240, 240)';
        cells[2].style.boxShadow = 'inset 0 0 10px 5px rgb(110, 110, 110)';
        cells[5].style.boxShadow = 'inset 0 0 10px 5px rgb(110, 110, 110)';
        cells[8].style.boxShadow = 'inset 0 0 10px 5px rgb(110, 110, 110)';
        return true;
    } else if (go[0] == go[4] && go[4] == go[8] && go[0] != 0) { // diagonals
        cells[0].classList.add ('cW'); cells[4].classList.add ('cW'); cells[8].classList.add ('cW');
        cells[0].style.backgroundColor = 'rgb(240, 240, 240)';
        cells[4].style.backgroundColor = 'rgb(240, 240, 240)';
        cells[8].style.backgroundColor = 'rgb(240, 240, 240)';
        cells[0].style.boxShadow = 'inset 0 0 10px 5px rgb(110, 110, 110)';
        cells[4].style.boxShadow = 'inset 0 0 10px 5px rgb(110, 110, 110)';
        cells[8].style.boxShadow = 'inset 0 0 10px 5px rgb(110, 110, 110)';
        return true;
    } else if (go[2] == go[4] && go[4] == go[6] && go[2] != 0) {
        cells[2].classList.add ('cW'); cells[4].classList.add ('cW'); cells[6].classList.add ('cW');
        cells[2].style.backgroundColor = 'rgb(240, 240, 240)';
        cells[4].style.backgroundColor = 'rgb(240, 240, 240)';
        cells[8].style.backgroundColor = 'rgb(240, 240, 240)';
        cells[2].style.boxShadow = 'inset 0 0 10px 5px rgb(110, 110, 110)';
        cells[4].style.boxShadow = 'inset 0 0 10px 5px rgb(110, 110, 110)';
        cells[8].style.boxShadow = 'inset 0 0 10px 5px rgb(110, 110, 110)';
        return true;
    } else {
        return false;
    }
}

// EVENTS #####################################################

// get mouse position
document.addEventListener ('mousemove', (event) => {
    mouse.x = event.clientX; mouse.y = event.clientY;
})

// add vaccine when clicking
document.addEventListener ('click', (event) => {
    for (let i = 0; i < 9; i++) {
        // get the right cell
        if ((mouse.x < cells[i].getBoundingClientRect().left + 140 && mouse.x > cells[i].getBoundingClientRect().left)&&
        (mouse.y < cells[i].getBoundingClientRect().top + 140 && mouse.y > cells[i].getBoundingClientRect().top)) {
            let vaccine = document.createElement ('i');
            vaccine.classList.add ('fas'); vaccine.classList.add ('fa-syringe'); vaccine.classList.add('vaccine');
            document.body.appendChild (vaccine);
            vaccine.style.left = (cells[i].getBoundingClientRect().left + 20) + 'px';
            vaccine.style.top = (cells[i].getBoundingClientRect().top + 20) + 'px';
            vaccine.classList.add ('vA');
            mouse.click = true;
            freeCells[i] = 1;
            // check if game is over
            console.log (gameOver());
        }
    }
})

// main clock
setInterval (() => {
    // control cells shadow
    for (let cell of cells) {
        // if cell is hovered
        if ((mouse.x < cell.getBoundingClientRect().left + 140 && mouse.x > cell.getBoundingClientRect().left)&&
        (mouse.y < cell.getBoundingClientRect().top + 140 && mouse.y > cell.getBoundingClientRect().top)) {
            // emove class if not removed before
            if (cell.className == 'cell cUH') {
                cell.classList.remove ('cUH');
            }
            cell.classList.add ('cH');
            cell.style.boxShadow = 'inset 0 0 10px 5px rgb(110, 110, 110)';
        }
        // if cell is no longer hovered
        if (((mouse.x < cell.getBoundingClientRect().left + 140 && mouse.x > cell.getBoundingClientRect().left)&&
        (mouse.y < cell.getBoundingClientRect().top + 140 && mouse.y > cell.getBoundingClientRect().top)) == false &&
        cell.className == 'cell cH') {
            cell.classList.remove ('cH');
            cell.classList.add ('cUH');
            cell.style.boxShadow = 'inset 0 0 0px 0px rgb(110, 110, 110)';
        }
    }
    // control cursor behavior
    cursor.style.left = (mouse.x - 15) + 'px'; cursor.style.top = (mouse.y - 15) + 'px'; // move cursor div
    // cursor hovering stage
    if ((mouse.x < stage.getBoundingClientRect().left + 432 && mouse.x > stage.getBoundingClientRect().left) && 
    (mouse.y < stage.getBoundingClientRect().top + 432 && mouse.y > stage.getBoundingClientRect().top)) {
        // remove class if not removed before
        if (cursor.className == 'cDOWN') {
            cursor.classList.remove ('cDOWN');
        }
        cursor.classList.add ('cUP');
        cursor.style.border = '10px solid rgb(190, 190, 190)';
    } else {
        // if cursor is not hovering stage any more
        cursor.classList.remove ('cUP');
        cursor.classList.add ('cDOWN');
        cursor.style.border = '5px solid rgb(190, 190, 190)';
    }
    // covid behavior control
    if (mouse.click == true) {
        mouse.t++;
        if (mouse.t % 40 == 0) {
            // a second later covid appears
            mouse.click = false; mouse.t = 0;
            while (true) {
                if (freeCells.includes(0)) {} else {
                    break;
                }
                // check if game is over
                console.log (gameOver());
                let factor = Math.floor(Math.random()*100 + 1);
                factor = Math.floor ((factor * 9)/100);
                let vaccines = document.querySelectorAll ('vaccine');
                let viruses = document.querySelectorAll ('covid');
                if (freeCells[factor] == 0) {
                    let virus = document.createElement ('i');
                    virus.classList.add ('fas'); virus.classList.add ('fa-virus'); virus.classList.add ('covid');
                    document.body.appendChild (virus);
                    virus.style.left = (cells[factor].getBoundingClientRect().left + 20) + 'px';
                    virus.style.top = (cells[factor].getBoundingClientRect().top + 20) + 'px';
                    virus.classList.add ('vA');
                    freeCells[factor] = 2;
                    // check if game is over
                    console.log (gameOver());
                    break;
                }
            }
            
        }
    }
}, 25)
