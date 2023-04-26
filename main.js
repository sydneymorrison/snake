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
let snakePrimary;


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
     }
     
     

     move () {
        this.position.x += this.direction.x;
        this.position.y += this.direction.y;

        this.snakeEl.style.gridColumn = this.position.x + 1;
        this.snakeEl.style.gridRow = this.position.y + 1;
    }

     changeDirection (snake, code) {
        //if the player hits the up, right, down, left arrow key the
        //the snake should move
        switch (code) {
            case "ArrowUp":
                if (snakePrimary.direction !== DIRECTIONS.down) {
                    snakePrimary.direction = DIRECTIONS.up;
                }
                break;

            case "ArrowRight":
                if (snakePrimary.direction !== DIRECTIONS.left) {
                    snakePrimary.direction = DIRECTIONS.right;
                }
                break;
            
            case "ArrowDown":
                if(snakePrimary.direction !== DIRECTIONS.up) {
                    snakePrimary.direction = DIRECTIONS.down;
                }
                break;
            
            case "ArrowLeft":
                if (snakePrimary.direction !== DIRECTIONS.right) {
                        snakePrimary.direction = DIRECTIONS.left;
                    }
                break;
        }
     }

     grow (){
        //If the snake bumps into an element on the grid with a value of 2 
        //then it should grow in size by +1 square
        
        const snakeBody = this.body[this.body.length -1];

        //
        
        switch (this.direction) {
            case DIRECTIONS.up:
                    this.body.push({x: snakeBody.x, y: snakeBody.y - 1});
                break;
            
            case DIRECTIONS.right:
                    this.body.push({x: snakeBody.x + 1, y: snakeBody.y});
                break;
            
            case DIRECTIONS.down:
                    this.body.push({x: snakeBody.x, y: snakeBody.y + 1});
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
    snakePrimary = new Snake1(snakeEl, [{x: 5, y: 5}], 1, 5, 5, 'right');
    snakeBoardEl.appendChild(snakeEl);
    snakeBoardEl.appendChild(targetEl);
    snakePrimary.move(); 

    //Event Listener
    document.addEventListener('keydown', (event) => {
        snakePrimary.changeDirection(snakePrimary, event.code);
      });

    //Set the targets starting position
    renderTargetPosition(7,7);
    
    render();
 }

 
 function render() {
    renderBoard();
    gameLogic();
    renderCurrentScore();
    renderTargetPosition();
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
        snakeHead.y < 0 || snakeHead.y >= snakeBoard[0].length) {
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
    const targetPosition = {
        x: parseInt(targetEl.style.gridColumnStart) -1,
        y: parseInt(targetEl.style.gridRowStart) -1,
    }

    if (snakeHead.x === targetPosition.x && snakeHead.y === targetPosition.y) {
        currentScore.p += 1;
        renderCurrentScore();
    

    //Grow the snake by 1
    snakePrimary.grow();

    //Update target to new area on grid
    renderMoveTarget();
    }
 }

 function renderTargetPosition (x,y) {
    targetEl.style.gridColumnStart = x + 1;
    targetEl.style.gridRowStart = y + 1;
 }

 function renderCurrentScore() {
    const scoreDisplay = document.querySelector('#power-score-counter');
    scoreDisplay.textContent = `${currentScore.p}`;
 }

 function renderMoveTarget() {
    //Move target on grid in random position
    const x = Math.floor(Math.random() * snakeBoard.length);
    const y = Math.floor(Math.random() * snakeBoard[0].length);

    targetEl.style.gridRowStart = y + 1;
    targetEl.style.gridColumnStart = x + 1;
 }


//Snake movement 
const snakeMovementInterval = setInterval(function() {
    snakePrimary.move();
    gameLogic();
}, 1000);


 
