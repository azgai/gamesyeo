import { useState } from "react";

export default function MemoryGame() {
    const [cards, setCards] = useState(
        ["🍎", "🍌", "🍇", "🍒", "🍎", "🍌", "🍇", "🍒"]
            .sort(() => 0.5 - Math.random())
            .map((emoji, i) => ({ id: i, emoji, flipped: false }))
    );

    const [first, setFirst] = useState(null);

    function flipCard(index) {
        if (cards[index].flipped) return;

        let newCards = [...cards];
        newCards[index].flipped = true;
        setCards(newCards);

        if (!first) {
            setFirst(index);
        } else {
            if (newCards[first].emoji !== newCards[index].emoji) {
                setTimeout(() => {
                    newCards[first].flipped = false;
                    newCards[index].flipped = false;
                    setCards([...newCards]);
                }, 500);
            }
            setFirst(null);
        }
    }

    return (
        <div>
            <h2>Memory Game</h2>
            <div className="grid">
                {cards.map((card, i) => (
                    <div key={card.id} className="card" onClick={() => flipCard(i)}>
                        {card.flipped ? card.emoji : ""}
                    </div>
                ))}
            </div>
        </div>
    );
}