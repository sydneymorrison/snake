/*----- constants -----*/

const DIRECTIONS = {
    up: { x: 0, y: -1 },
    down: { x: 0, y: 1 },
    left: { x: -1, y: 0 },
    right: { x: 1, y: 0 },
};

// const x = 5; //starting x position
// const y = 5; //starting y position

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
         this.body = [{x: x, y: y}];
         this.length = 1; //length of snake
         this.position = {x:x, y:y}; //position of snake
         this.direction = DIRECTIONS[direction]; //direction of snake

         document.addEventListener('keydown', function(event) {
            this.changeDirection(event.code);
          });

     }
     

     move () {
        this.position.x += this.direction.x;
        this.position.y += this.direction.y;

        this.snakeEl.style.gridColumnStart = this.position.x + 1;
        this.snakeEl.style.gridRowStart = this.position.y + 1;
    }

     changeDirection (code) {
        //if the player hits the up, right, down, left arrow key the
        //the snake should move
        switch (code) {
            case "ArrowUp":
                if(this.direction !== DIRECTIONS.down) {
                    this.direction = DIRECTIONS.up;
                }
                break;

            case "ArrowRight":
                if (this.direction !== DIRECTIONS.left) {
                    this.direction = DIRECTIONS.right;
                }
                break;
            
            case "ArrowDown":
                if(this.direction !== DIRECTIONS.up) {
                    this.direction = DIRECTIONS.down;
                } 
            
            case "ArrowLeft":
                if (this.direction !== DIRECTIONS.right) {
                        this.direction = DIRECTIONS.left;
                    }
                break;
        }
     }

     grow (){
        //If the snake bumps into an element on the grid with a value of 2 
        //then it should grow in size by +1 square
        
        const snakeBody = this.body[this.body.length -1];
        
        switch (this.direction) {
            case DIRECTIONS.up:
                    this.body.push({x: snakeBody.x, y: snakeBody.y - 1});
                break;
            
            case DIRECTIONS.right:
                    this.body.push({x: snakeBody.x + 1, y: snakeBody.y});
                break;
            
            case DIRECTIONS.down:
                    this.body.push({x: snakeBody.x + 1, y: snakeBody.y + 1});
                break;
            
            case DIRECTIONS.left:
                this.body.push({x: snakeBody.x - 1, y: snakeBody.y});
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
    const snakePrimary = new Snake1(snakeEl, [], 1, 5, 5, 'right');
    snakeBoardEl.appendChild(snakeEl);
    snakeBoardEl.appendChild(targetEl);
    snakePrimary.move(); 
    
    setInterval(function(){
        snakePrimary.move();
    }, 1000);
    
    render();
 }

 
 function render() {
    renderBoard();
    gameLogic();
 }


 function renderBoard() {
    // //Adding Snake to Board
    // const addSnakeEl = document.querySelector('.snake');
    // snakeBoardEl.appendChild(snakeEl);

    // //Adding Target to Board
    // const addTargetEl = document.querySelector('.target');
    // snakeBoardEl.appendChild(targetEl);
  

 }


 function gameLogic() {

    //Check for snake collision
    const snakeHead = snakePrimary.body[0];
    if (snakeHead.x < 0 || snakeHead.x >= snakeBoard.length ||
        snakeHead.y < 0 || snakeHead.y >= snakeBoard[0].length ) {
        gameOver();
        return;
     }

    //Check if the snakes head hits the snakes tail (x & y)
    for(let i = 1; i < snakePrimary.body.length; i++) {
        if (snakeHead.x === snakePrimary.body[i].x && snakeHead.y === snakePrimary.body[i].y) {
        gameOver();
        return;
        }
    }
    
    //Target Collision





 }
