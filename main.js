/*----- constants -----*/




/*----- state variables -----*/

let board; //40 x 40 array
let currentScore; // p will be for player results
let elementLocation; //'s' for snake and 't' for target
let direction; // 's' for snake


/*----- cached elements  -----*/

const snakeBoardEl = document.querySelector('#snake-board'); // Capture the board


//Add snake to snakeBoard
const snakeEl = document.querySelector('.snake'); 
// snakeEl.style.gridRowStart = 5;
// snakeEl.style.gridColumnStart = 5; 
// snakeBoardEl.appendChild(snakeEl);

//Add target Object to snakeBoard
const targetEl = document.querySelector('.target');
// targetEl.style.gridRowStart = 7;
// targetEl.style.gridColumnStart = 8; 
// snakeBoardEl.appendChild(targetEl);


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

     move () {
        //Updating the position of the snake in grid
        this.position.x += this.direction.x; //this statement = this.position.x = this.position.x + this.direction.x
        this.position.y += this.direction.y;

        //Update the position in CSS leveraging DOM
        
     }
 }



/*----- functions -----*/
 init();


 function init() {
    //Instantiating snake class
    //snakeObject1 = new Snake1(body, 5, 5, direction);
    render();
 }

 
 function render() {
    //Render's message to Snake Board
    //renderMessage();
    //Render board
    renderBoard();
 }


 function renderBoard() {
    snakeEl.style.gridRowStart = 5;
    snakeEl.style.gridColumnStart = 5; 
    snakeBoardEl.appendChild(snakeEl);

    targetEl.style.gridRowStart = 7;
    targetEl.style.gridColumnStart = 8; 
    snakeBoardEl.appendChild(targetEl);

 }
