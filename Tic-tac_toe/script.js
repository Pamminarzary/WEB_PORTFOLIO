        let currentPlayer = 'X';
        let gameBoard = ['', '', '', '', '', '', '', '', ''];
        let gameActive = true;

        const statusDisplay = document.getElementById('status');
        const cells = document.querySelectorAll('.cell');
        const resetButton = document.getElementById('reset-button');

        const winningCombinations = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], 
            [0, 3, 6], [1, 4, 7], [2, 5, 8], 
            [0, 4, 8], [2, 4, 6]             
        ];

        initializeGame();

        function initializeGame() {
            cells.forEach(cell => {
                cell.addEventListener('click', cellClicked);
                cell.textContent = '';
                cell.classList.remove('x', 'o');
            });
            
            resetButton.addEventListener('click', resetGame);
            
            gameActive = true;
            currentPlayer = 'X';
            gameBoard = ['', '', '', '', '', '', '', '', ''];
            statusDisplay.textContent = `${currentPlayer}'s turn`;
        }

        function cellClicked() {
            const cellIndex = parseInt(this.getAttribute('data-index'));
            
            if (gameBoard[cellIndex] !== '' || !gameActive) {
                return;
            }
            
            gameBoard[cellIndex] = currentPlayer;
            this.textContent = currentPlayer;
            this.classList.add(currentPlayer.toLowerCase());
            
            if (checkWin()) {
                statusDisplay.textContent = `${currentPlayer} wins!`;
                gameActive = false;
                return;
            }
            
            if (checkDraw()) {
                statusDisplay.textContent = "It's a draw!";
                gameActive = false;
                return;
            }
            
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            statusDisplay.textContent = `${currentPlayer}'s turn`;
        }

        function checkWin() {
            for (let i = 0; i < winningCombinations.length; i++) {
                const [a, b, c] = winningCombinations[i];
                
                if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
                    cells[a].style.backgroundColor = '#d4edda';
                    cells[b].style.backgroundColor = '#d4edda';
                    cells[c].style.backgroundColor = '#d4edda';
                    return true;
                }
            }
            
            return false;
        }

        function checkDraw() {
            return !gameBoard.includes('');
        }

        function resetGame() {
            cells.forEach(cell => {
                cell.textContent = '';
                cell.classList.remove('x', 'o');
                cell.style.backgroundColor = '#fff';
            });
            
            gameActive = true;
            currentPlayer = 'X';
            gameBoard = ['', '', '', '', '', '', '', '', ''];
            statusDisplay.textContent = `${currentPlayer}'s turn`;
        }