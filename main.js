/*----- constants -----*/

const COLOR = {
    '0': 'lightpink', //grid color
    '1': snakeEl, //snake element
    '2': targetEl, //target element
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

document.addEventListener('')





/*----- classes -----*/
 class Snake1 {
     constructor(body, length, x, y, direction) {
//         //this.snakeEl = snakeEl; //new snakeEl
         this.body = [ {x:x, y:y}]; //Square element
         this.length = 1; //length of snake
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
        //if the player hits the up, right, down, left arrow key the
        //the snake should move
        function snakeDirection(direction) {
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
            } else if (this.direction !== "right") {
                this.direction = "left";
            }
        }
     }

     grow (){
        //If the snake bumps into an element on the grid with a value of 2 
        //then it should grow in size by +1 square
        const snakeBody = this.body[this.body.length -1];
        
        function snakeGrow (direction) {
            //if snake is moving up
            if(this.direction === "up"){
                this.body.push({x: snakeBody.x, y: snakeBody.y - 1})
            } else if (this.direction === "right") {
                this.body.push({x: snakeBody.x + 1, y: snakeBody.y})
            } else if (this.direction === "down") {
                this.body.push({x: snakeBody.x + 1, y: snakeBody.y + 1})
            } else if (this.direction === "left") {
                this.body.push({x: snakeBody.x - 1, y: snakeBody.y})
        }

     }

    }
 

/*----- functions -----*/
 init();


 function init() {

const snakeBoard = [
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
    //snakeObject1 = new Snake1(body, 1, 0, 0, right);
    render();
 }

 
 function render() {
    renderBoard();
 }


 function renderBoard() {
    //Adding Snake to Board
    const addSnakeEl = document.querySelector('.snake');
    snakeBoardEl.appendChild(snakeEl);

    //Adding Target to Board
    const addTargetEl = document.querySelector('.target');
    snakeBoardEl.appendChild(targetEl);

    
 }


