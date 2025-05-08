# Tic-Tac-Toe
Basic Project - 1 : Tic Tac Toe Game
# Interactive Tic Tac Toe Game with Animations and Sound Effects

This is an engaging implementation of the classic Tic Tac Toe game featuring modern web technologies, animations, and interactive elements for an enhanced gaming experience.

## Features

- **Stunning Visual Design**: Animated background with hue rotation effects
- **Interactive Game Elements**: Responsive cell clicks with hover effects
- **Sound Effects**: Background music during gameplay with unique sounds for win and draw scenarios
- **Victory Celebrations**: Confetti animations and GIF displays for wins and ties
- **Animated Transitions**: Smooth transitions between game states
- **Responsive Layout**: Optimized for various screen sizes
- **Falling Animation**: Pieces "fall" off the board after game completion
- **Highlighting Winning Combinations**: Visual indication of the winning cells

## Technologies Used

- HTML5
- CSS3 (with animations and keyframes)
- JavaScript
- Canvas Confetti library for celebration effects
- Custom fonts via Google Fonts API

## Installation

To run the game locally on your machine, follow these steps:

1. Clone or download the repository to your local machine
2. Ensure all the required files are there:
   - HTML file (`index.html`)
   - CSS file (`style.css`)
   - JavaScript file (`script.js`)
   - Background image (`bg3.jpg`)
   - GIF files (`celebrate1.gif` and `sad.gif`)
   - Sound files (`music.mp3`, `win.mp3`, and `draw.mp3`)
3. Open the `index.html` file in a modern web browser[11]

## How to Play

Tic Tac Toe is a simple two-player game where each player takes turns placing their symbol (X or O) on a 3×3 grid. The first player to get three of their symbols in a row (horizontally, vertically, or diagonally) wins the game.

### Game Instructions:

1. Click the "Start The Game!!!" button to begin
2. The first player will be X, followed by O
3. Click on any empty cell to place your symbol
4. The game will automatically check for a winner after each move
5. If a player wins, a celebration animation and victory GIF will appear
6. If the game ends in a tie, a different animation and tie GIF will display
7. Click the "Restart" button to play another round

## Project Structure

```
├── index.html         # Main HTML structure for the game
├── style.css          # CSS styling with animations
├── script.js          # Game logic and functionality
├── bg3.jpg            # Background image
├── celebrate1.gif     # Victory celebration GIF
├── sad.gif            # Tie scenario GIF
├── music.mp3          # Background game music
├── win.mp3            # Victory sound effect
└── draw.mp3           # Draw/tie sound effect
```

### File Descriptions:

- **index.html**: Contains the game structure including the cell container, game info section, and necessary elements for displaying game status
- **style.css**: Provides styling for the game including animations, responsive design, and visual effects
- **script.js**: Implements the game logic, handles player turns, determines winners, and controls animations/sound effects
- **additional**: additional files for music(.mp3), animations(.gif), and background(.jpg) are provided for more better user experience

## Code Highlights

### Game Initialization
The game features a start button that must be clicked to begin gameplay. This triggers the display of the game board with a smooth fade-in animation and starts the background music.

### Win Detection
The game automatically checks for a winner after each move using predefined winning combinations. When a player wins, the winning cells are highlighted, victory sounds play, and celebration animations are displayed.

### Animation Effects
Several animations enhance the game experience:
- Background color cycling using CSS animation
- Confetti celebration effects using the Canvas Confetti library
- Falling animation for game pieces when a game concludes
- Fade transitions between game states

## Credits

- Canvas Confetti library for celebration effects
- Google Fonts for the custom typography
- Inspiration from various Tic Tac Toe implementations

## Support

- Help taken from learning modules provided by Unified Mentor
- Different youtube videos for coding help and design inspiration
