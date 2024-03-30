let board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let gameActive = true;

const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
];

function checkWinner() {
    for (let combination of winningCombinations) {
        const [a, b, c] = combination;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return board[a];
        }
    }
    if (!board.includes('')) return 'T'; // Tie
    return null;
}

function playerMove(index) {
    if (!gameActive || board[index] !== '') return;
    board[index] = currentPlayer;
    document.getElementsByClassName('cell')[index].textContent = currentPlayer;
    const winner = checkWinner();
    if (winner) {
        endGame(winner);
    } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
}

function endGame(winner) {
    gameActive = false;
    let message = '';
    if (winner === 'T') {
        message = 'เสมอกัน เริ่มใหม่!!!!';
    } else {
        message = `${winner} ชนะแล้ว!!!! XD`;
    }
    document.getElementById('result').textContent = message;
}

function restartGame() {
    board = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';
    gameActive = true;
    document.getElementById('result').textContent = '';
    const cells = document.getElementsByClassName('cell');
    for (let cell of cells) {
        cell.textContent = '';
    }
}