const boxes = document.querySelectorAll(".box");
const turns = document.querySelector(".turn");

let game = true;
let turn = "X";

turns.innerHTML = "Let's Play";

const winningCombinations = [
    [0, 1, 2], 
    [3, 4, 5], 
    [6, 7, 8], 
    [0, 3, 6], 
    [1, 4, 7], 
    [2, 5, 8],
    [0, 4, 8], 
    [2, 4, 6] 
] 


const handleClick = (event) => {
    if (game && event.target.innerHTML === "") { 
        event.target.innerHTML = turn;
        if (checkGameOver()) {
            turns.innerHTML = `Player ${turn} Wins!`;
            game = false; 
        } else if (Array.from(boxes).every(box => box.innerHTML !== "")) {
            turns.innerHTML = "It's a Tie!";
            game = false; 
        } else {
            turn = turn === "X" ? "O" : "X"; 
            turns.innerHTML = `Chance of ${turn}`;
        }
    }
};

boxes.forEach(box => box.addEventListener("click", handleClick));

const checkGameOver = () => {
    return winningCombinations.some(combination => {
        const [a, b, c] = combination;
        return (
            boxes[a].innerHTML === turn &&
            boxes[b].innerHTML === turn &&
            boxes[c].innerHTML === turn
        );
    });
};
