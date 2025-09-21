package com.pacman;

import org.teavm.jso.browser.TimerHandler;
import org.teavm.jso.browser.Window;
import org.teavm.jso.dom.events.EventListener;
import org.teavm.jso.dom.events.KeyboardEvent;
import org.teavm.jso.dom.html.HTMLDocument;
import org.teavm.jso.dom.html.HTMLElement;

public class WebApp {
    private PacManGame game;
    private WebRenderer renderer;
    private int gameLoopId;

    public static void main(String[] args) {
        new WebApp().start();
    }

    public void start() {
        // Initialize game and renderer
        game = new PacManGame();
        renderer = new WebRenderer(game);

        // Setup keyboard input
        Window.current().getDocument().addEventListener("keydown", new EventListener<KeyboardEvent>() {
            @Override
            public void handleEvent(KeyboardEvent event) {
                game.handleKeyPress(event.getKeyCode());
                event.preventDefault(); // Prevent page scrolling
            }
        });

        // Make canvas focusable for keyboard events
        renderer.getCanvas().setTabIndex(0);
        renderer.getCanvas().focus();

        // Start game loop (equivalent to your Timer)
        startGameLoop();

        // Add instructions to the page
        addInstructions();
    }

    private void startGameLoop() {
        gameLoopId = Window.current().setInterval(new TimerHandler() {
            @Override
            public void onTimer() {
                if (!game.gameOver) {
                    game.move();
                }
                renderer.render();

                if (game.gameOver) {
                    // Game loop continues even when game over for restart functionality
                }
            }
        }, 50); // Same 50ms interval as your original Timer
    }

    private void addInstructions() {
        HTMLDocument document = Window.current().getDocument();

        // Create instruction div
        HTMLElement div = document.createElement("div").cast();
        div.getStyle().setProperty("text-align", "center");
        div.getStyle().setProperty("color", "white");
        div.getStyle().setProperty("font-family", "Arial");
        div.getStyle().setProperty("margin", "20px");

        // Create title
        HTMLElement title = document.createElement("h1").cast();
        title.setTextContent("Java Pac-Man Game");
        div.appendChild(title);

        // Create instructions
        HTMLElement instructions = document.createElement("p").cast();
        instructions.setTextContent("Use arrow keys to move. Press any key to restart when game over.");
        div.appendChild(instructions);

        // Create tech note
        HTMLElement techNote = document.createElement("p").cast();
        techNote.setTextContent("Built with Java, compiled to WebAssembly using TeaVM");
        techNote.getStyle().setProperty("font-size", "12px");
        div.appendChild(techNote);

        // Add to body
        document.getBody().appendChild(div);
    }
}