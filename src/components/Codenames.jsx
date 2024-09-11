import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import correct from "../assets/test/correct.png";
import wrong from "../assets/test/wrong.png";
import blackCard from "../assets/test/blackCard.png";

// Sample images data
const images = [
  { front: 'Coding.png', back: 'correct.png' },
  { front: 'games.png', back: 'correct.png' },
  { front: 'web.png', back: 'wrong.png' },
  { front: 'Coding.png', back: 'blackCard.png' },
  { front: 'Coding.png', back: 'correct.png' },
  { front: 'games.png', back: 'correct.png' },
  { front: 'web.png', back: 'wrong.png' },
  { front: 'Coding.png', back: 'blackCard.png' },
  { front: 'Coding.png', back: 'correct.png' },
  { front: 'games.png', back: 'correct.png' },
  { front: 'web.png', back: 'wrong.png' },
  { front: 'Coding.png', back: 'blackCard.png' },
  { front: 'Coding.png', back: 'correct.png' },
  { front: 'games.png', back: 'correct.png' },
  { front: 'web.png', back: 'wrong.png' },
  { front: 'Coding.png', back: 'blackCard.png' },
  { front: 'Coding.png', back: 'correct.png' },
  { front: 'games.png', back: 'correct.png' },
  { front: 'web.png', back: 'wrong.png' },
  { front: 'Coding.png', back: 'blackCard.png' },
];

const descriptions = {
  correct: "It's one of the cards that you need to find.",
  wrong: "It's a wrong card, you lose 5 seconds of the time, so be careful!",
  blackCard: "The Death Card. If you choose it, you will directly lose this game and so is the hint and points of this game."
};

const cardVariants = {
  front: { rotateY: 0 },
  back: { rotateY: 180 },
};

const Card = ({ front, back, isFlipped, onClick, isDisabled }) => {
  return (
    <motion.div
      className="relative cursor-pointer"
      style={{ perspective: 1000, width: '95%', height: '30vh', margin: 'auto' }} // Dynamic resizing
      onClick={isDisabled ? null : onClick}
    >
      <motion.div
        className="absolute w-full h-full"
        variants={cardVariants}
        initial="front"
        animate={isFlipped ? "back" : "front"}
        transition={{ duration: 0.6 }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        <motion.img
          src={front}
          className="absolute w-full h-full object-contain"
          style={{ backfaceVisibility: 'hidden' }}
        />
        <motion.img
          src={back}
          className="absolute w-full h-full object-contain"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        />
      </motion.div>
    </motion.div>
  );
};


const CardGrid = () => {
  const [flippedCards, setFlippedCards] = useState({});
  const [time, setTime] = useState(60);
  const [intervalId, setIntervalId] = useState(null);
  const [answers, setAnswers] = useState(7);
  const [gameOver, setGameOver] = useState(false);
  const [success, setSuccess] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [disabledCards, setDisabledCards] = useState(new Set());
  const [tries, setTries] = useState(1); // State to manage tries

  useEffect(() => {
    if (time <= 0) {
      setTime(0);
      setGameOver(true);
      clearInterval(intervalId);
    }
  }, [time, intervalId]);

  useEffect(() => {
    if (gameOver) return;

    if (gameStarted) {
      const id = setInterval(() => {
        setTime(prevTime => prevTime - 1);
      }, 1000);
      setIntervalId(id);

      return () => clearInterval(id);
    }
  }, [gameStarted, gameOver]);

  const handleCardClick = (index) => {
    if (!gameStarted || gameOver || disabledCards.has(index)) return;

    const cardBack = images[index].back;
    if (cardBack === 'blackCard.png') {
      setTime(0);
      setGameOver(true);
      clearInterval(intervalId);
    } else if (cardBack === 'wrong.png') {
      setTime(prevTime => Math.max(prevTime - 5, 0));
      if (time <= 0) {
        setGameOver(true);
        clearInterval(intervalId);
      }
    } else if (cardBack === 'correct.png') {
      setAnswers(prevAnswers => {
        const newAnswers = prevAnswers - 1;
        if (newAnswers <= 0) {
          setSuccess(true);
          setGameOver(true);
          clearInterval(intervalId);
        }
        return newAnswers;
      });
    }

    setFlippedCards(prev => ({
      ...prev,
      [index]: !prev[index],
    }));
    setDisabledCards(prev => new Set(prev).add(index));
  };

  const handleStartClick = () => {
    if (gameStarted || tries <= 0) return; // Prevent starting if game already started or tries are exhausted
    // Reset game state and start the timer
    setTime(60);
    setAnswers(7);
    setGameOver(false);
    setSuccess(false);
    setGameStarted(true);
    setDisabledCards(new Set()); // Enable all cards on start
    setTries(prevTries => prevTries - 1); // Decrement tries
  };

  const handleClose = () => {
    setGameStarted(false);
    setGameOver(false);
    setSuccess(false);
    setDisabledCards(new Set()); // Reset disabled cards for a new game
  };

  return (
    <div id="EVENTS" className="p-4 mt-20 relative grid justify-items-stretch">
      {/* Timer and Hints (conditionally rendered) */}
      {gameStarted && !gameOver && (
        <>
          <div className="fixed top-4 left-4 p-2 rounded shadow-lg z-50">
            <p className="text-lg font-semibold">{`Time: ${time}s`}</p>
          </div>

          <div className="fixed top-4 right-4 p-2 rounded shadow-lg z-50">
            <p className="text-lg font-semibold">{`Found: ${7-answers} / 7`}</p>
          </div>
        </>
      )}

      {/* Title and Paragraph */}
      <motion.h2 whileInView={{ opacity: 1, y: 0 }} initial={{ y: -100, opacity: 0 }} transition={{ duration: 1.5 }} className="text-4xl font-bold bg-gradient-to-r from-pink-300 via-slate-500 to-purple-800 bg-clip-text text-transparent my-10 text-center">
        CODE NAMES
      </motion.h2>
      <motion.p
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        className="text-center text-xl mb-8"
      >
        You have 20 words, each one in a card form, and there are 3 types of cards
      </motion.p>

      {/* Card Descriptions */}
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ x: -100, opacity: 0 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4 mb-8"
      >
        {Object.keys(descriptions).map((key) => (
          <motion.div
            key={key}
            className="w-64 h-64 p-4 rounded-lg shadow-lg flex flex-col items-center text-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={key === 'correct' ? correct : key === 'wrong' ? wrong : blackCard}
              alt={key}
              className="w-64 h-32 object-cover mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{key.charAt(0).toUpperCase() + key.slice(1)}</h3>
            <p className="text-sm">{descriptions[key]}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Description and Start Button */}
      <div
        className="text-center mb-8"
      >
        <p className="text-lg mb-4"> <strong className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-2xl tracking-tight text-transparent'>Objective: </strong>You need to find the correct 7 words in 60 seconds based on the hints that we will give you!
        So take your time to read the words before starting the game.</p>
        <button
          className={`bg-blue-500 text-white px-6 py-3 rounded-lg ${gameStarted || tries <= 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-600'}`}
          onClick={handleStartClick}
        >
          Start
        </button>
      </div>

      {/* Cards */}
      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 flex-wrap w-full">
  {images.map((img, index) => (
    <Card
      className="mx-auto"
      key={index}
      front={img.front}
      back={img.back}
      isFlipped={flippedCards[index]}
      onClick={() => handleCardClick(index)}
      isDisabled={disabledCards.has(index)}
    />
  ))}
</div>



      {/* Game Over Message */}
      {gameOver && (
        <motion.div
          className={`fixed inset-0 flex items-center justify-center ${success ? 'bg-green-500' : 'bg-red-500'} p-8`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center text-white">
            <h2 className="text-2xl font-bold mb-4">
              {success
                ? `Congrats, You solved it with time rest = ${time}s`
                : 'Game Over!'}
            </h2>
            <p className="text-lg mb-4">
              {success ? 'The hint is "Address"' : 'Better luck next time!'}
            </p>
            <button
              className="bg-white text-black py-2 px-4 rounded-lg shadow-lg hover:bg-gray-200 transition duration-300"
              onClick={handleClose}
            >
              Close
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default CardGrid;
