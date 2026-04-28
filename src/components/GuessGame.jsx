import { useState } from "react";

export default function GuessGame() {
    const [number] = useState(Math.floor(Math.random() * 100) + 1);
    const [guess, setGuess] = useState("");
    const [result, setResult] = useState("");

    function checkGuess() {
        if (guess == number) setResult("🎉 Correct!");
        else if (guess > number) setResult("Too high!");
        else setResult("Too low!");
    }

    return (
        <div>
            <h2>Guess the Number</h2>
            <input value={guess} onChange={(e) => setGuess(e.target.value)} />
            <button onClick={checkGuess}>Guess</button>
            <p>{result}</p>
        </div>
    );
}