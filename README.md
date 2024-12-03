# 🕹️ Tic-Tac-Toe Game

## Project link - [*Tic-Tac-Toe*](https://tictactoeforsure.netlify.app/)

A browser-based **Tic-Tac-Toe** game developed using **HTML**, **CSS**, and **Vanilla JavaScript**, showcasing fundamental concepts of DOM manipulation, event handling, and game logic.

---

## ✨ Highlights

### 🧩 Game Logic
- Implements a **turn-based system** with alternating players (`X` and `O`).
- Checks for **winning conditions** based on predefined combinations (rows, columns, diagonals).
- Declares a **tie** when the grid is filled with no winner.
- Prevents overwriting moves by ensuring only empty cells can be played.

### 🔄 Dynamic UI Updates
- Uses **JavaScript DOM manipulation** to dynamically update the game board and player turn indicator.
- **Event listeners** handle user clicks efficiently, minimizing repetitive code.

### 🛠 Modular Design
- Separation of concerns:
  - Game state logic is encapsulated in functions like `checkGameOver`.
  - Presentation logic updates UI elements dynamically.
- Easy to extend with features like a reset button, score tracking, or an AI opponent.

### 🚦 Event Handling
- Uses a single **click event handler** for all game cells.
- Avoids redundant code by iterating through grid elements with `querySelectorAll`.

### 🧪 State Management
- Game state (`turn`, `game` status) is managed with simple variables.
- Ensures immutability for played cells, preventing changes after a move.

---

## 🛠 Concepts Demonstrated

1. **DOM Manipulation**
   - Dynamically updates HTML elements using `innerHTML` and `querySelector`.
   - Simplifies multiple event bindings with loops.

2. **Event Listeners**
   - Attaches click events to each cell for user interaction.
   - Provides feedback to users based on game state.

3. **Conditional Rendering**
   - Displays winner, turn indicator, or tie messages based on game logic.

4. **Game Logic Optimization**
   - Efficient win-check algorithm using predefined combinations.
   - Implements core game mechanics in an extensible manner.

---

## 🛡 Challenges Tackled
- Handling multiple winning conditions efficiently without hardcoding checks for every possible scenario.
- Managing turn-based interactions seamlessly in real time.
- Preventing redundant operations, such as overwriting already marked cells.

---

## 🚀 Future Enhancements
- **Single-Player Mode**: Introduce AI with difficulty levels.
- **Restart Button**: Reset the board without refreshing the page.
- **Score Tracking**: Maintain player scores across multiple rounds.
- **Responsive Design**: Fully optimize for various screen sizes.

---

## 🔧 Tools and Technologies Used
- **HTML**: Game structure and layout.
- **CSS**: Basic styling for the game board and visual cues.
- **JavaScript**: Core game logic, state management, and DOM interaction.
