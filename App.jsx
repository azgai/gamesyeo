import { useState } from "react";
import MemoryGame from "./components/MemoryGame";
import GuessGame from "./components/GuessGame";
import ClickGame from "./components/ClickGame";
import "./App.css";

function App() {
    const [game, setGame] = useState(null);

    return (
        <div className="container">
            <h1>🎮 Fun Games Hub</h1>

            <div className="menu">
                <button onClick={() => setGame("memory")}>Memory Game</button>
                <button onClick={() => setGame("guess")}>Guess Number</button>
                <button onClick={() => setGame("click")}>Click Speed</button>
            </div>

            <div className="game-area">
                {!game && <p>Select a game to start!</p>}
                {game === "memory" && <MemoryGame />}
                {game === "guess" && <GuessGame />}
                {game === "click" && <ClickGame />}
            </div>
        </div>
    );
}

export default App;