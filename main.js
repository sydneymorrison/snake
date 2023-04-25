/*----- constants -----*/

const TARGET = {
    color: 'red'
};



/*----- state variables -----*/

let board; //40 x 40 array
let currentScore; // p will be for player results


/*----- cached elements  -----*/

const snakeBoard = document.querySelector('#snake-board'); //Capture the board

const snakeEl = document.createElement('div');
snakeEl.classList.add('snake');
snakeEl.style.gridRowStart = snake.position.y;
snakeEl.style.gridColumnStart = snake.position.x; 



/*----- event listeners -----*/

/*----- functions -----*/
