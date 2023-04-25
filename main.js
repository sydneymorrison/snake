/*----- constants -----*/

const TARGET = {
    color: 'red'
};



/*----- state variables -----*/

let board; //40 x 40 array
let currentScore; // p will be for player results


/*----- cached elements  -----*/

const snakeBoard = document.querySelector('#snake-board'); //Capture the board

const snakeEl = document.querySelector('.snake'); 
snakeEl.style.gridRowStart = 5;
snakeEl.style.gridColumnStart = 5; 
snakeBoard.appendChild(snakeEl);

const targetObjEl = document.querySelector('.target-object');
targetObjEl.style.gridRowStart = 7;
targetObjEl.style.gridColumnStart = 8; 
snakeBoard.appendChild(targetObjEl);


/*----- event listeners -----*/



/*----- functions -----*/
