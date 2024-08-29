import React, { useEffect, useState } from "react";
import "../App.css";

const images = [
  "img1.svg",
  "img2.png",
  "img3.png",
  "img4.png",
  "img5.png",
  "img6.png",
];

const generateCards = () => {
  const doubleImages = images.concat(images);
  const shuffledImages = doubleImages.sort(() => Math.random() - 0.5);
  return shuffledImages.map((image, index) => ({
    id: index,
    image,
    matched: false,
  }));
};

const Card = ({ card, onClick, isFlipped }) => {
  return (
    <div
      className={`card ${isFlipped ? "flipped" : ""} w-24 h-32 lg:w-36 lg:h-44 m-2`}
      onClick={() => onClick(card)}
    >
      <div
        className={`inner-card w-full h-full flex items-center justify-center bg-white border border-gray-300 rounded-xl ${
          card.matched ? "matched" : ""
        }`}
      >
        {isFlipped || card.matched ? (
          <img
            src={card.image}
            alt="card"
            className="w-full h-full object-cover rounded-xl"
          />
        ) : (
          <div className="bg-violet-400 rounded-xl w-full h-full flex items-center justify-center text-2xl text-white">
            ?
          </div>
        )}
      </div>
    </div>
  );
};

const Codenames = () => {
  const [cards, setCards] = useState(generateCards());
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedPairs, setMatchedPairs] = useState(0);

  const handleClick = (card) => {
    if (flippedCards.length < 2 && !flippedCards.includes(card) && !card.matched) {
      setFlippedCards([...flippedCards, card]);

      if (flippedCards.length === 1) {
        if (flippedCards[0].image === card.image) {
          setMatchedPairs(matchedPairs + 1);
          setCards((prevCards) =>
            prevCards.map((c) =>
              c.image === card.image ? { ...c, matched: true } : c
            )
          );
        }

        setTimeout(() => setFlippedCards([]), 1000);
      }
    }
  };

  return (
    <div className="container flex justify-center items-center">
      <div className="game-board grid grid-cols-3 md:grid-cols-4 gap-4 p-4">
        {cards.map((card) => (
          <Card
            key={card.id}
            onClick={handleClick}
            card={card}
            isFlipped={
              flippedCards.some((flippedCard) => flippedCard.id === card.id) ||
              card.matched
            }
          />
        ))}

        {matchedPairs === cards.length / 2 && (
          <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-white bg-opacity-50">
            <h1 className="text-3xl font-bold">You Win</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default Codenames;
