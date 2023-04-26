/*----- constants -----*/

const COLOR = {
    '0': 'lightpink', //grid color
    '1': document.querySelector('.snake'), //snake element
    '2': document.querySelector('.target'), //target element
};

const DIRECTIONS = {
        up: "up",
        down: "down",
        left: "left",
        right: "right",
};

const x = 5; //starting x position
const y = 5; //starting y position

/*----- state variables -----*/

let snakeBoard; //40 x 40 array
let currentScore; // p will be for player results
let snakeLocation; //'s' for snake and 't' for target
let snakesCurrentDirection; // 's' for snake
let gameStatus; //if the game is continuing or over 


/*----- cached elements  -----*/

const snakeBoardEl = document.querySelector('#snake-board'); // Capture the board
//Add snake to snakeBoard
const snakeEl = document.querySelector('.snake'); 
//Add target Object to snakeBoard
const targetEl = document.querySelector('.target');


/*----- event listeners -----*/

//Event listener for arrow keys in Snake1 class

/*----- classes -----*/
 class Snake1 {
     constructor(snakeEl, body, length, x, y, direction) {
         this.snakeEl = snakeEl; //new snakeEl
         this.body = [{x:x, y:y}];
         this.length = 1; //length of snake
         this.position = {x:x, y:y}; //position of snake
         this.direction = 'right'; //direction of snake

         document.addEventListener('keydown', function(event) {
            this.changeDirection(event.code);
          });
     }
     

     move () {
        //Updating the position of the snake in grid
        this.position.x += this.direction.x; //this statement = this.position.x = this.position.x + this.direction.x
        this.position.y += this.direction.y;

        //Update the position in CSS leveraging CSS & DOM
        this.style.gridColumnStart = this.position.x;
        this.style.gridRowStart = this.position.y;

        //interval for how fast the snake will move
        setInterval(function(){
           this.move();
        }, 1000);
     }

     changeDirection (code) {
        //if the player hits the up, right, down, left arrow key the
        //the snake should move
        switch (code) {
            case "ArrowUp":
                if(this.direction !== "down") {
                    this.direction = "up";
                }
                break;

            case "ArrowRight":
                if (this.direction !== "left") {
                    this.direction = "right";
                }
                break;
            
            case "ArrowDown":
                if(this.direction !== "up") {
                    this.direction = "down";
                } 
            
            case "ArrowLeft":
                if (this.direction !== "right") {
                        this.direction = "left";
                    }
                break;
        }
     }

     grow (){
        //If the snake bumps into an element on the grid with a value of 2 
        //then it should grow in size by +1 square
        const snakeBody = this.body[this.body.length -1];
        
        switch (this.direction) {
            case 'up':
                if(this.direction === "up"){
                    this.body.push({x: snakeBody.x, y: snakeBody.y - 1});
                } 
                break;
            
            case 'right':
                if (this.direction === "right") {
                    this.body.push({x: snakeBody.x + 1, y: snakeBody.y});
                }
                break;
            
            case 'down':
                if (this.direction === "down") {
                    this.body.push({x: snakeBody.x + 1, y: snakeBody.y + 1});
                }
                break;
            
            case 'left':
                if (this.direction === "left") {
                this.body.push({x: snakeBody.x - 1, y: snakeBody.y});
                }
                break;
      }
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

    currentScore = {
        p: 0,
    };
    
    snakeLocation = {
        x: 0,
        y: 0,
    };
    
    snakesCurrentDirection = 'right';
    
    gameStatus = null;


    //Instantiating snake class
    const snakePrimary = new Snake1(snakeEl, [], 1, 0, 0, 'right');
    render();
 }

 
 function render() {
    renderBoard();
    gameLogic();
 }


 function renderBoard() {
    //Adding Snake to Board
    const addSnakeEl = document.querySelector('.snake');
    snakeBoardEl.appendChild(snakeEl);

    //Adding Target to Board
    const addTargetEl = document.querySelector('.target');
    snakeBoardEl.appendChild(targetEl);
  
 }

 function gameLogic {





 }
