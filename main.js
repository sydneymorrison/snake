/*----- constants -----*/

const DIRECTIONS = {
    up: { x: 0, y: -1 },
    down: { x: 0, y: 1 },
    left: { x: -1, y: 0 },
    right: { x: 1, y: 0 },
};


/*----- state variables -----*/

let snakeBoard; //40 x 40 array
let currentScore; // 'p' will be for player results
let snakeLocation; //'s' for snake and 't' for target
let snakesCurrentDirection; // 's' for snake
let gameStatus; //if the game is continuing or over 
let snakePrimary; //snake class
let snakeMovementInterval; //snake movement


/*----- cached elements  -----*/

const snakeBoardEl = document.querySelector('#snake-board'); // Capture the board
//Add snake to snakeBoard
const snakeEl = document.querySelector('.snake'); 
//Add target Object to snakeBoard
const targetEl = document.querySelector('.target');
//Message Element
const messageEl = document.querySelector('#game-message');
//Play again button
const playAgainBtn = document.querySelector('#stop-button'); 
//Start game button
const startGameBtn = document.querySelector('#start-button');

/*----- event listeners -----*/


//Event listener for arrow keys in innit function 
//Event listener 


/*----- classes -----*/
 
class Snake1 {
     constructor(snakeEl, body, length, x, y, direction) {
         this.snakeEl = snakeEl; //new snakeEl
         this.body = [{x: x, y: y}]; //snake body
         this.length = 1; //length of snake
         this.position = {x:x, y:y}; //position of snake
         this.direction = DIRECTIONS[direction]; //direction of snake
     }

     move () {
        //Update the snake position
        this.position.x += this.direction.x;
        this.position.y += this.direction.y;
        //Snake doesnt grow remove the last part of body
        if(this.body.length < this.length) {
            //Add a new segment to the current body
            this.body.unshift({x: this.position.x, y:this.position.y});
        } else {
            //move to new position
            const lastSegment = this.body.pop();
            lastSegment.x = this.position.x;
            lastSegment.y = this.position.y;
            this.body.unshift(lastSegment);
        }
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
        //Grow snake by +1 if it bumps into a target  
        const snakeBody = this.body[this.body.length -1];

        //Add a new segment at the same position as the current last segment
        this.body.push({ x: snakeBody.x, y: snakeBody.y});
        this.length++;
    }
}

/*----- functions -----*/
 init();


function init() {
    startGameBtn.style.display = 'block'; //show start game button
    playAgainBtn.style.display = 'none'; //hide game button at start
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

    //Instantiating new snake class
    snakePrimary = new Snake1(snakeEl, [{x: 5, y: 5}], 1, 5, 5, 'right');
    // snakeBoardEl.appendChild(snakeEl);
    // snakeBoardEl.appendChild(targetEl);
    snakePrimary.move(); 

    //Keydown Event Listener
    document.addEventListener('keydown', (event) => {
        snakePrimary.changeDirection(snakePrimary, event.code);
      });

    //Set the targets starting position
    renderTargetPosition(7,7);

    //sets snake movement 
    snakeMovementInterval = setInterval(function() {
        snakePrimary.move();
        renderSnakeBody();
        gameLogic();
    }, 1000);

    render();
 }

 

 function render() {
    renderBoard();
    renderCurrentScore();
    renderSnakeBody();
 }


 function renderBoard() {
    snakeBoardEl.appendChild(snakeEl);
    snakeBoardEl.appendChild(targetEl);
 }

 function startGame () {
    messageEl.appendChild(startGameBtn);
    messageEl.innerHTML = '';
    startGameBtn.style.display = 'none';
    init(); 
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

        //Grow the snake by +1 square
        snakePrimary.grow();
        
        //Update target to new area on the snakeBoard grid
        renderMoveTarget();

        //Hide the game over message
        messageEl.innerText = '';
        playAgainBtn.style.display = 'none';
    }
    
    renderSnakeBody();
 }


 function renderTargetPosition (x,y) {
    targetEl.style.gridColumnStart = x + 1;
    targetEl.style.gridRowStart = y + 1;
 }

 function renderRandomPosition () {
    return {
        x: Math.floor(Math.random() * 10),
        y: Math.floor(Math.random() * 10),
    };
 }

 function renderCurrentScore() {
    const scoreDisplay = document.querySelector('#power-score-counter');
    scoreDisplay.textContent = `${currentScore.p}`;
 }

 function renderMoveTarget() {
    //Move target on grid in random position
    const x = Math.floor(Math.random() * snakeBoard.length);
    const y = Math.floor(Math.random() * snakeBoard[0].length);

    targetEl.style.gridColumnStart = x + 1;
    targetEl.style.gridRowStart = y + 1;

    let newPosition;

    do {
        newPosition = renderRandomPosition();
    } while (snakePrimary.body.some(function(segment){
        return segment.x === newPosition.x && segment.y === newPosition.y;
    }));
    
    targetEl.style.gridColumnStart = x + 1;
    targetEl.style.gridRowStart = y + 1;
 };


 function moveSnake () {
    if (gameStatus !== "over") {
        snakePrimary.move();
        renderSnakeBody();
        gameLogic();
    }
 }


 function renderSnakeBody() {
    //Other parts and remove
    const bodyElements = document.querySelectorAll('.body');
    bodyElements.forEach(function(bodySegment){
        bodySegment.remove();
    });

    //Render the segments on the board and add snake body parts
    snakePrimary.body.slice(1).forEach(function(segment){
        const bodySegment = document.createElement('div');
        bodySegment.className = 'body';
        bodySegment.style.gridColumnStart = segment.x + 1;
        bodySegment.style.gridRowStart = segment.y + 1;
        snakeBoardEl.appendChild(bodySegment);
    });
 }

 //Stop game and render message
 function gameOver() {
    clearInterval(snakeMovementInterval);
    messageEl.innerHTML ='game over!';
    startGameBtn.style.display = 'none'; //hide button when the game stops
    playAgainBtn.style.display = 'block'; //show button when the game stops
    

    //Event listener for gameover button
    playAgainBtn.addEventListener('click', function(){
        messageEl.innerText = '';
        playAgainBtn.style.display = 'none';
        init();
    });
 }


 
