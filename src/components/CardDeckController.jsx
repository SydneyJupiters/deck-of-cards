import { cardDeck } from "../mixins/cards";
import Button from "./Button";
import { useState } from "react";

function CardDeckController() {
  const [deck, setDeck] = useState(cardDeck);

  //Shuffles the deck when clicked
  const shuffleDeck = () => {
    setDeck((deck) => [...deck].sort(() => Math.random() - 0.5));
  };

  //Sorts the deck back to original order
  const sortDeck = () => {
    setDeck((deck) => [...deck].sort((a, b) => (a.id > b.id ? 1 : -1)));
  };

  //Removes a card from the deck
  const drawCard = (index) => {
    const newDeck = deck.filter((_, i) => i !== index);
    setDeck(newDeck);
  };

  return (
    <div className="w-3/4">
      <div>
        <Button
          onClick={shuffleDeck}
          name="Shuffle Cards"
          extraClasses="text-white bg-blue-700 hover:bg-white hover:text-blue-700"
        />

        <Button
          onClick={sortDeck}
          name="Sort Cards"
          extraClasses="text-blue-700 bg-white hover:bg-blue-700 hover:text-white"
        />
      </div>

      <ul className="flex flex-row border border-black w-full flex-wrap justify-center py-5">
        {deck.map((card, index) => {
          return (
            <button
              onClick={() => drawCard(index)}
              key={index}
              className={`text-9xl ${
                card.name.includes("Hearts") || card.name.includes("Diamonds")
                  ? " text-red-600"
                  : "text-black"
              }`}
            >
              {card.image}
            </button>
          );
        })}
      </ul>
    </div>
  );
}

export default CardDeckController;
