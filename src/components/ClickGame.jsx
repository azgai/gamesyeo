import { useState } from "react";

export default function ClickGame() {
    const [clicks, setClicks] = useState(0);
    const [active, setActive] = useState(true);

    function startGame() {
        setClicks(0);
        setActive(true);

        setTimeout(() => {
            setActive(false);
            alert("Time's up! Score: " + clicks);
        }, 5000);
    }

    return (
        <div>
            <h2>Click Speed Test</h2>
            <button onClick={() => active && setClicks(clicks + 1)}>
                Click Me
            </button>
            <p>Clicks: {clicks}</p>
            <button onClick={startGame}>Start</button>
        </div>
    );
}