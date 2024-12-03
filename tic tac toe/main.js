const boxes = document.querySelectorAll(".box");
const turns = document.querySelector(".turn");
const reset = document.getElementById("reset");
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
reset.addEventListener("click", resetgame);
function resetgame() {
    turns.innerHTML = "Let's Play";
    game = true;
    turn = "X";
    boxes.forEach(box => box.innerHTML = "")
}
const handleClick = (event) => {
    if (game && event.target.innerHTML === "") {
        event.target.innerHTML = turn;
        if (checkGameOver()) {
            turns.innerHTML = `Player ${turn} Wins!`;
            setTimeout(() => { alert(`${turn} wins!!!`) }, 500);
            game = false;
            setTimeout(() => { resetgame() }, 3000);
        } else if (Array.from(boxes).every(box => box.innerHTML !== "")) {
            turns.innerHTML = "";
            setTimeout(() => { alert("It's a Tie!!") }, 500);
            game = false;
            setTimeout(() => { resetgame() }, 3000);
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