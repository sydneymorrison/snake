/*----- constants -----*/




/*----- state variables -----*/

let board; //40 x 40 array
let currentScore; // p will be for player results


/*----- cached elements  -----*/

const snakeBoardEl = document.querySelector('#snake-board'); //Capture the board


//Add snake to snakeBoard
const snakeEl = document.querySelector('.snake'); 
snakeEl.style.gridRowStart = 5;
snakeEl.style.gridColumnStart = 5; 
snakeBoardEl.appendChild(snakeEl);

//Add target Object to snakeBoard
const targetEl = document.querySelector('.target');
targetEl.style.gridRowStart = 7;
targetEl.style.gridColumnStart = 8; 
snakeBoardEl.appendChild(targetEl);


/*----- event listeners -----*/


/*----- classes -----*/
 class Snake1 {
     constructor(x, y, direction) {
//         //this.snakeEl = snakeEl; //new snakeEl
         this.body = [
            {x:x, y:y} //Square element
         ];
         this.position = {x, y}; //position of snake
         this.direction = direction; //direction of snake
     }

     

 }



/*----- functions -----*/
 init();

 function init () {
    //Instantiating snake class
    snakeObject1 = new Snake1(body, 5, 5, direction);

    //Render's message to Snake Board
    //function renderMessage();


 }


