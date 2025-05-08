//initializing required contents
const audio = new Audio('music.mp3');
const winaudio = new Audio('win.mp3');
const drawaudio = new Audio('draw.mp3');
const cells = document.querySelectorAll(".cell");
const statusText = document.querySelector("#statusText");
const restartBtn = document.querySelector("#restartBtn");
const rtartBtn = document.querySelector("#startBtn");
const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
let options = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let running = false;
//initalization with start button
startBtn.addEventListener("click", startGame);
//list of all required functions
function startGame(){
    document.getElementById('startBtn').style.padding = "0px";
    document.getElementById('startBtn').style.margin = "0px";
    startBtn.textContent ="";
    const cellContainer = document.getElementById('cellContainer');
    cellContainer.style.display = "grid";
    requestAnimationFrame(() => {
        cellContainer.classList.add('show');
    });
    document.getElementById('restartBtn').style.opacity = "1";
    document.getElementById('statusText').style.opacity = "1";
    initializeGame();
    audio.play();
}
function initializeGame(){
    cells.forEach(cell => cell.addEventListener("click", cellClicked));
    restartBtn.addEventListener("click", restartGame);
    statusText.textContent = `${currentPlayer}'s turn`;
    document.getElementById('restartBtn').style.padding = "5px";
    restartBtn.textContent = `Restart`;
    running = true;
}
function cellClicked(){
    const cellIndex = this.getAttribute("cellIndex");
    if(options[cellIndex] != "" || !running){
        return;
    }
    updateCell(this, cellIndex);
    checkWinner();
}
function updateCell(cell, index){
    options[index] = currentPlayer;
    cell.textContent = currentPlayer;
}
function changePlayer(){
    currentPlayer = (currentPlayer == "X") ? "O" : "X";
    statusText.textContent = `${currentPlayer}'s turn`;
}
function checkWinner(){
    let roundWon = false;
    let winningCells = [];  // To store the winning cells

    for (let i = 0; i < winConditions.length; i++) {
        const condition = winConditions[i];
        const cellA = options[condition[0]];
        const cellB = options[condition[1]];
        const cellC = options[condition[2]];

        if (cellA == "" || cellB == "" || cellC == "") {
            continue;
        }
        if (cellA == cellB && cellB == cellC) {
            roundWon = true;
            // Store the winning cells based on the condition
            winningCells = condition;
            break;
        }
    }
    if (roundWon) {
        statusText.textContent = `${currentPlayer} WINS!`;
        document.getElementById('imagewin').style.opacity = "1";
        audio.pause();
        winaudio.play();
        celebrate();
        fallPieces();
        // Change color of the winning cells
        winningCells.forEach(index => {
            const winningCell = document.querySelector(`.cell[cellIndex="${index}"]`);
            winningCell.style.backgroundColor = "#e1adfa";
        });
        running = false;
    }
    else if (!options.includes("")) {
        statusText.textContent = `No Result! TIE!`;
        document.getElementById('imagetie').style.opacity = "1";
        audio.pause();
        drawaudio.play();
        celebrateDraw();
        fallPieces();
        running = false;
    }
    else {
        changePlayer();
    }
}
function restartGame(){
    cells.forEach(cell => {
    cell.style.animation = 'none';
    cell.style.opacity = '1';
    cell.style.transform = 'translateY(0)';
    cell.style.backgroundColor="";
    cell.textContent = "";
    });
    currentPlayer = "X";
    options = ["", "", "", "", "", "", "", "", ""];
    statusText.textContent = `${currentPlayer}'s turn`;
    document.getElementById('imagewin').style.opacity = "0";
    document.getElementById('imagetie').style.opacity = "0";
    running = true;
    audio.currentTime = 0;
    audio.play(); 
}
function celebrate() {
    var duration = 2 * 1000;
    var end = Date.now() + duration;
  
    (function frame() {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 , y: 0.75 }
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 , y: 0.75 }
      });
  
      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
}
function celebrateDraw() {
    var duration = 2 * 1000;
    var end = Date.now() + duration;      
    
    (function frame() {
        confetti({
        particleCount: 10,
        angle: Math.random() * 360,
        spread: 100,
        origin: { x: Math.random(), y: Math.random() },
        colors: ['#ff4d4d', '#ff6666', '#ff9999']
        });
      
        if (Date.now() < end) {
         requestAnimationFrame(frame);
        }
    })();
}      
function fallPieces() {
    var cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
      cell.style.animation = 'fall 1s ease-out forwards';
    });
}