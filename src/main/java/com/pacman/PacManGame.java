package com.pacman;

import java.util.HashSet;
import java.util.Random;

public class PacManGame {
    // All your original constants
    private int rowCount = 21;
    private int colCount = 19;
    private int tileSize = 32;
    private int boardWidth = colCount * tileSize;
    private int boardHeight = rowCount * tileSize;

    // Image paths (instead of Image objects)
    private String wallImagePath = "images/wall.png";
    private String blueGhostImagePath = "images/blueGhost.png";
    private String orangeGhostImagePath = "images/orangeGhost.png";
    private String pinkGhostImagePath = "images/pinkGhost.png";
    private String redGhostImagePath = "images/redGhost.png";
    private String cherryImagePath = "images/cherry.png";
    private String pacmanUpImagePath = "images/pacmanUp.png";
    private String pacmanDownImagePath = "images/pacmanDown.png";
    private String pacmanLeftImagePath = "images/pacmanLeft.png";
    private String pacmanRightImagePath = "images/pacmanRight.png";

    // Your exact same tile map
    private String[] tileMap = {
            "XXOXXXXXXXXXXXXXOXX",
            "X   C    X    C   X",
            "X XX XXX X XXX XX X",
            "X                 X",
            "X XX X XXXXX X XX X",
            "X C  X       X    X",
            "XXXX XXXX XXXX XXXX",
            "OOOX X   C   X XOOO",
            "XXXX X XXrXX X XXXX",
            "O C     bpo       O",
            "XXXX X XXXXX X XXXX",
            "OOOX X       X XOOO",
            "XXXX X XXXXX X XXXX",
            "X    C   X   C    X",
            "X XX XXX X XXX XX X",
            "X  X  C  P     X  X",
            "XX X X XXXXX X X XX",
            "X    X   X   X    X",
            "X XXXXXX X XXXXXX X",
            "XC       C        X",
            "XXOXXXXXXXXXXXXXOXX"
    };

    // Your exact same game objects
    public HashSet<Block> walls;
    public HashSet<Block> foods;
    public HashSet<Block> ghosts;
    public HashSet<Block> cherries;
    public Block pacman;

    // Game state
    private char[] directions = {'U', 'D', 'L', 'R'};
    private Random random = new Random();
    public int score = 0;
    public int lives = 3;
    public boolean gameOver = false;

    public PacManGame() {
        loadMap();
        for (Block ghost : ghosts) {
            char newDirection = directions[random.nextInt(4)];
            ghost.updateDirection(newDirection);
        }
    }

    // Your exact same loadMap method (just paths instead of Images)
    public void loadMap() {
        walls = new HashSet<Block>();
        foods = new HashSet<Block>();
        ghosts = new HashSet<Block>();
        cherries = new HashSet<Block>();

        for (int r = 0; r < rowCount; r++) {
            for (int c = 0; c < colCount; c++) {
                String row = tileMap[r];
                char tileMapChar = row.charAt(c);
                int x = c * tileSize;
                int y = r * tileSize;

                if (tileMapChar == 'X') {
                    Block wall = new Block(wallImagePath, x, y, tileSize, tileSize);
                    walls.add(wall);
                } else if (tileMapChar == 'b') {
                    Block ghost = new Block(blueGhostImagePath, x, y, tileSize, tileSize);
                    ghost.setWalls(walls, tileSize);
                    ghosts.add(ghost);
                } else if (tileMapChar == 'o') {
                    Block ghost = new Block(orangeGhostImagePath, x, y, tileSize, tileSize);
                    ghost.setWalls(walls, tileSize);
                    ghosts.add(ghost);
                } else if (tileMapChar == 'p') {
                    Block ghost = new Block(pinkGhostImagePath, x, y, tileSize, tileSize);
                    ghost.setWalls(walls, tileSize);
                    ghosts.add(ghost);
                } else if (tileMapChar == 'r') {
                    Block ghost = new Block(redGhostImagePath, x, y, tileSize, tileSize);
                    ghost.setWalls(walls, tileSize);
                    ghosts.add(ghost);
                } else if (tileMapChar == 'C') {
                    Block cherry = new Block(cherryImagePath, x, y, tileSize, tileSize);
                    cherries.add(cherry);
                } else if (tileMapChar == 'P') {
                    pacman = new Block(pacmanRightImagePath, x, y, tileSize, tileSize);
                    pacman.setWalls(walls, tileSize);
                } else if (tileMapChar == ' ') {
                    Block food = new Block(null, x + 14, y + 14, 4, 4);
                    foods.add(food);
                }
            }
        }
    }

    // Your exact same move method
    public void move() {
        pacman.x += pacman.velocityX;
        pacman.y += pacman.velocityY;

        for (Block wall : walls) {
            if (Block.collision(pacman, wall)) {
                pacman.x -= pacman.velocityX;
                pacman.y -= pacman.velocityY;
                break;
            }
        }

        // Wrap around screen
        if (pacman.x > tileSize * colCount) {
            pacman.x = 0;
        } else if (pacman.y > tileSize * rowCount) {
            pacman.y = 0;
        } else if (pacman.x < 0) {
            pacman.x = tileSize * colCount;
        } else if (pacman.y < 0) {
            pacman.y = tileSize * rowCount;
        }

        // Ghost movement and collision
        for (Block ghost : ghosts) {
            if (Block.collision(ghost, pacman)) {
                lives -= 1;
                if (lives == 0) {
                    gameOver = true;
                    return;
                }
                resetPositions();
            }
            if (ghost.y == tileSize * 9 && ghost.direction != 'U' && ghost.direction != 'D') {
                ghost.updateDirection('U');
            }
            ghost.x += ghost.velocityX;
            ghost.y += ghost.velocityY;
            for (Block wall : walls) {
                if (Block.collision(ghost, wall) || ghost.x <= 0 || ghost.x + ghost.width >= boardWidth) {
                    ghost.x -= ghost.velocityX;
                    ghost.y -= ghost.velocityY;
                    char newDirection = directions[random.nextInt(4)];
                    ghost.updateDirection(newDirection);
                }
            }
        }

        // Food eating
        Block foodEaten = null;
        for (Block food : foods) {
            if (Block.collision(pacman, food)) {
                foodEaten = food;
                score += 10;
            }
        }
        foods.remove(foodEaten);

        // Cherry eating
        Block cherryEaten = null;
        for (Block cherry : cherries) {
            if (Block.collision(pacman, cherry)) {
                cherryEaten = cherry;
                score += 50;
            }
        }
        cherries.remove(cherryEaten);

        // Level complete
        if (foods.isEmpty() && cherries.isEmpty()) {
            loadMap();
            resetPositions();
        }
    }

    public void resetPositions() {
        pacman.reset();
        pacman.velocityX = 0;
        pacman.velocityY = 0;
        for (Block ghost : ghosts) {
            ghost.reset();
            char newDirection = directions[random.nextInt(4)];
            ghost.updateDirection(newDirection);
        }
    }

    // Input handling
    public void handleKeyPress(int keyCode) {
        if (gameOver) {
            loadMap();
            resetPositions();
            lives = 3;
            score = 0;
            gameOver = false;
            return;
        }

        // Arrow key constants (same as KeyEvent)
        final int VK_UP = 38;
        final int VK_DOWN = 40;
        final int VK_LEFT = 37;
        final int VK_RIGHT = 39;

        if (keyCode == VK_UP) {
            pacman.updateDirection('U');
            pacman.imagePath = pacmanUpImagePath;
        } else if (keyCode == VK_DOWN) {
            pacman.updateDirection('D');
            pacman.imagePath = pacmanDownImagePath;
        } else if (keyCode == VK_LEFT) {
            pacman.updateDirection('L');
            pacman.imagePath = pacmanLeftImagePath;
        } else if (keyCode == VK_RIGHT) {
            pacman.updateDirection('R');
            pacman.imagePath = pacmanRightImagePath;
        }
    }

    // Getters for the renderer
    public int getBoardWidth() { return boardWidth; }
    public int getBoardHeight() { return boardHeight; }
    public int getTileSize() { return tileSize; }
}