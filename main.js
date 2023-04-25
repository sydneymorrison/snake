/*----- constants -----*/

const COLOR = {
    '0': 'lightpink',
    '1': 'B77CE9',
    '2': ''
};


/*----- state variables -----*/

let snakeBoard; //40 x 40 array
let currentScore; // p will be for player results
let elementLocation; //'s' for snake and 't' for target
let direction; // 's' for snake


/*----- cached elements  -----*/

const snakeBoardEl = document.querySelector('#snake-board'); // Capture the board
//Add snake to snakeBoard
const snakeEl = document.querySelector('.snake'); 
//Add target Object to snakeBoard
const targetEl = document.querySelector('.target');


/*----- event listeners -----*/





/*----- classes -----*/
 class Snake1 {
     constructor(x, y, direction) {
//         //this.snakeEl = snakeEl; //new snakeEl
         this.body = [
            {x:x, y:y} //Square element
         ];
         this.position = {x: 5, y: 5}; //position of snake
         this.direction = right; //direction of snake
     }

     move () {
        //Updating the position of the snake in grid
        this.position.x += this.direction.x; //this statement = this.position.x = this.position.x + this.direction.x
        this.position.y += this.direction.y;

        //Update the position in CSS leveraging CSS & DOM
        snakeEl.style.gridColumnStart = this.position.x;
        snakeEl.style.gridRowStart = this.position.y;

        //interval for how fast the snake will move
        setInterval(function(){
           snake.move();
        }, 1000);
     }

     changeDirection () {
        function change(direction) {
            //Arrow Up
            if(this.direction !== "down") {
                this.direction = "up";
            //ArrowRight
            } else if (this.direction !== "left") {
                this.direction = "right";
            //ArrowDown
            } else if(this.direction !== "up") {
                this.direction = "down";
            //ArrowLeft
            } else (this.direction !== "right") {
                this.direction = "left";
            }
        }
     }

     grow (){

     }


    }
 

/*----- functions -----*/
 init();


 function init() {

    snakeBoard = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ];


    //Instantiating snake class
    //snakeObject1 = new Snake1(body, 0, 0, direction);
    render();
 }

 
 function render() {
    renderBoard();
 }


 function renderBoard() {

    const addSnakeEl = document.querySelector('.snake');
    snakeBoardEl.appendChild(snakeEl);

 
    const addTargetEl = document.querySelector('.target');
    snakeBoardEl.appendChild(targetEl);


    
 }


