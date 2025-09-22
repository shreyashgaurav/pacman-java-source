# Java Pac-Man Game

A classic Pac-Man game built entirely in Java, then compiled to run in web browsers using TeaVM. This project demonstrates how traditional desktop Java applications can be modernized for web deployment while maintaining their original Java code.

## Play the Game

**[Live Demo](https://shreyashgaurav.github.io/java-pacman-teavm/)** - Play directly in the browser

### Key Features
- **Pure Java Implementation**: All game logic written in Java using familiar concepts like collision detection, game loops, and object-oriented design
- **Smooth Controls**: Responsive input buffering allows for fluid movement - we don't have to time your key presses perfectly
- **Cross-Device Support**: Works on both desktop (arrow keys) and mobile devices (swipe gestures)
- **Web Deployment**: Compiles to WebAssembly for optimal browser performance - Near Native

## How It Works

The game uses TeaVM to compile Java bytecode directly to WebAssembly and JavaScript. This means:
- The core game runs at near-native performance
- All game logic remains in Java - no JavaScript rewriting required
- Modern browsers can run it without plugins

## Game Rules

- **Movement**: Arrow keys (desktop) or swipe gestures (mobile)
- **Scoring**: Food pellets = 10 points, Cherries = 50 points  
- **Lives**: Start with 3 lives
- **Objective**: Eat all food while avoiding ghosts
- **Transportation**: Use screen edges to wrap around the maze

## Technical Implementation

### Architecture
- **Java Core**: Game engine, collision detection, Random movements of ghosts
- **TeaVM Compilation**: Java → WebAssembly/JavaScript
- **HTML5 Canvas**: Browser rendering
- **Maven**: Build automation and dependency management


## Building and Running Locally

### Prerequisites
- Java 11 or higher
- Maven 3.6+

### Quick Start
```bash
# Clone the repository
git clone https://github.com/shreyashgaurav/pacman-java-source.git
cd pacman-java-source

# Build the project
mvn clean package

# Start local server
cd target/generated/js
python -m http.server 8000

# Open http://localhost:8000 in your browser
```

## Project Structure
```
src/main/java/com/pacman/
├── PacManGame.java      # Core game logic and state management
├── Block.java           # Game entity base class
├── WebApp.java          # Browser entry point
└── WebRenderer.java     # Canvas rendering system
```

## Repository Links

- **[Source Code](https://github.com/shreyashgaurav/pacman-java-source)** - Complete Java implementation
- **[Live Demo](https://shreyashgaurav.github.io/java-pacman-teavm/)** - Playable web version

## License

This project is open source and available under the MIT License.
