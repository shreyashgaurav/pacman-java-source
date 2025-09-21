package com.pacman;

import org.teavm.jso.browser.Window;
import org.teavm.jso.canvas.CanvasRenderingContext2D;
import org.teavm.jso.dom.html.HTMLCanvasElement;
import org.teavm.jso.dom.html.HTMLDocument;
import org.teavm.jso.dom.html.HTMLImageElement;

import java.util.HashMap;
import java.util.Map;

public class WebRenderer {
    private PacManGame game;
    private CanvasRenderingContext2D context;
    private HTMLCanvasElement canvas;
    private Map<String, HTMLImageElement> imageCache;

    public WebRenderer(PacManGame game) {
        this.game = game;
        this.imageCache = new HashMap<>();
        setupCanvas();
        preloadImages();
    }

    private void setupCanvas() {
        HTMLDocument document = Window.current().getDocument();
        canvas = document.getElementById("gameCanvas").cast();

        if (canvas == null) {
            // Create canvas if it doesn't exist
            canvas = document.createElement("canvas").cast();
            canvas.setId("gameCanvas");
            document.getBody().appendChild(canvas);
        }

        canvas.setWidth(game.getBoardWidth());
        canvas.setHeight(game.getBoardHeight());
        context = canvas.getContext("2d").cast();

        // Set canvas style
        canvas.getStyle().setProperty("border", "2px solid #fff");
        canvas.getStyle().setProperty("background", "#000");
        canvas.getStyle().setProperty("display", "block");
        canvas.getStyle().setProperty("margin", "20px auto");
    }

    private void preloadImages() {
        String[] imagePaths = {
                "images/wall.png",
                "images/blueGhost.png",
                "images/orangeGhost.png",
                "images/pinkGhost.png",
                "images/redGhost.png",
                "images/cherry.png",
                "images/pacmanUp.png",
                "images/pacmanDown.png",
                "images/pacmanLeft.png",
                "images/pacmanRight.png"
        };

        for (String path : imagePaths) {
            HTMLImageElement img = Window.current().getDocument().createElement("img").cast();
            img.setSrc(path);
            imageCache.put(path, img);
        }
    }

    public void render() {
        // Clear canvas
        context.clearRect(0, 0, game.getBoardWidth(), game.getBoardHeight());

        // Draw pac-man
        if (game.pacman != null && game.pacman.imagePath != null) {
            HTMLImageElement pacmanImg = imageCache.get(game.pacman.imagePath);
            if (pacmanImg != null) {
                context.drawImage(pacmanImg, game.pacman.x, game.pacman.y,
                        game.pacman.width, game.pacman.height);
            }
        }

        // Draw ghosts
        if (game.ghosts != null) {
            for (Block ghost : game.ghosts) {
                if (ghost.imagePath != null) {
                    HTMLImageElement ghostImg = imageCache.get(ghost.imagePath);
                    if (ghostImg != null) {
                        context.drawImage(ghostImg, ghost.x, ghost.y, ghost.width, ghost.height);
                    }
                }
            }
        }

        // Draw walls
        if (game.walls != null) {
            for (Block wall : game.walls) {
                if (wall.imagePath != null) {
                    HTMLImageElement wallImg = imageCache.get(wall.imagePath);
                    if (wallImg != null) {
                        context.drawImage(wallImg, wall.x, wall.y, wall.width, wall.height);
                    }
                }
            }
        }

        // Draw cherries
        if (game.cherries != null) {
            for (Block cherry : game.cherries) {
                if (cherry.imagePath != null) {
                    HTMLImageElement cherryImg = imageCache.get(cherry.imagePath);
                    if (cherryImg != null) {
                        context.drawImage(cherryImg, cherry.x, cherry.y, cherry.width, cherry.height);
                    }
                }
            }
        }

        // Draw food (white dots)
        context.setFillStyle("#ffffff");
        if (game.foods != null) {
            for (Block food : game.foods) {
                context.fillRect(food.x, food.y, food.width, food.height);
            }
        }

        // Draw UI text
        context.setFillStyle("#ffffff");
        context.setFont("18px Arial");

        if (game.gameOver) {
            context.fillText("Game Over: " + game.score, game.getTileSize() / 2, game.getTileSize() / 2);
        } else {
            context.fillText("x" + game.lives + " Score: " + game.score,
                    game.getTileSize() / 2, game.getTileSize() / 2);
        }
    }

    public HTMLCanvasElement getCanvas() {
        return canvas;
    }
}