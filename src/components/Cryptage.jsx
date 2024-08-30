import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiArrowCircleRight } from "react-icons/hi";

const words = [
  ['C', 'S', 'C', 'M', 'C'],
  ['I', 'D', 'F'],
  ['2', 'I', 'A'],
  ['G', 'L'],
  ['2', 'S', 'C', 'L'],
];
const randomShift = Math.floor(Math.random() * 3) + 2;
const caesarShift = (letter) => {
  
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const index = alphabet.indexOf(letter.toUpperCase());
  if (index === -1) return letter; // If the letter is not in the alphabet, return it unchanged.
  const shiftedIndex = (index + randomShift) % 26; // Apply the shift and wrap around using modulo 26.
  return alphabet[shiftedIndex];
};

const shiftedwords = [
  [caesarShift('C'), caesarShift('S'), caesarShift('C'), caesarShift('M'), caesarShift('C')],
  [caesarShift('I'), caesarShift('D'), caesarShift('F')],
  ['2', caesarShift('I'), caesarShift('A')],
  [caesarShift('G'), caesarShift('L')],
  ['2', caesarShift('S'), caesarShift('C'), caesarShift('L')],
];

const Cryptage = () => {
  const [shift, setShift] = useState(0);
  const [showAlert, setShowAlert] = useState(false);
  const [success, setSuccess] = useState(false);
  const [inputs, setInputs] = useState(words.map(word => word.map(() => '')));
  const [results, setResults] = useState(Array(words.length).fill(''));

  const handleInputChange = (wordIndex, letterIndex, value) => {
    const newInputs = [...inputs];
    newInputs[wordIndex][letterIndex] = value.toUpperCase(); // Convert to uppercase
    setInputs(newInputs);

    // Check if the input matches the letters for that word
    const isMatch = newInputs[wordIndex].every((input, i) => input === words[wordIndex][i]);

    const newResults = [...results];
    newResults[wordIndex] = isMatch ? 'Matched!' : 'Not Matched!';
    setResults(newResults);
  };

  const handleSubmit = () => {
    // Check if all words are matched
    const allMatched = results.every(result => result === 'Matched!');
    setSuccess(allMatched);
    setShowAlert(true);
  };

  const handleCloseAlert = () => {
    setShowAlert(false);
    setInputs(words.map(word => word.map(() => ''))); // Reset inputs
    setResults(Array(words.length).fill('')); // Reset results
  };

  return (
    <motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ y: -100, opacity: 0 }} transition={{ duration: 1.5 }} className='grid justify-items-stretch '>
     <h2 className="text-4xl font-bold bg-gradient-to-r from-pink-300 via-slate-500 to-purple-800 bg-clip-text text-transparent my-10 text-center">
  Cipher Quest
</h2>

      <p className="text-center text-xl mb-2">
        <strong className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-2xl tracking-tight text-transparent'>Objective: </strong> Find the correct shift number to decrypt the message.
      </p>  
      <p className="text-center text-2xl mb-8">
        <strong className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-2xl tracking-tight text-transparent'>Hint: </strong> ENSIAS
      </p>
    
      <div className="space-y-8 p-4 justify-self-center">
        {shiftedwords.map((word, wordIndex) => (
          <div key={wordIndex} className="flex space-x-8">
            {/* Letters Display */}
            <div className="flex space-x-4">
              {word.map((letter, index) => (
                <div
                  key={index}
                  className="border-2 border-gray-400 p-4 text-center text-1xl font-bold w-8 h-8 flex items-center justify-center"
                >
                  {letter}
                </div>
              ))}
            </div>
            <HiArrowCircleRight className='text-1xl w-8 h-8 flex items-center justify-center' />
            {/* Input Fields */}
            <div className="flex space-x-4">
              {word.map((letter, index) => (
                <input
                  key={index}
                  type="text"
                  maxLength="1"
                  className="border-2 border-gray-400 text-gray-800 text-center text-1xl font-bold w-8 h-8"
                  value={inputs[wordIndex][index]}
                  onChange={(e) => handleInputChange(wordIndex, index, e.target.value)}
                />
              ))}
            </div>

            {/* Result Display */}
            <div className="flex items-center ml-4 text-1xl font-bold">
              {results[wordIndex]}
            </div>
          </div>
        ))}
      </div>

      {/* Submit Button */}
      <button
        onClick={handleSubmit}
        className="mt-4 bg-blue-500 text-white py-2 px-4 rounded w-24 justify-self-center"
      >
        Submit
      </button>

      {/* Alert */}
      {showAlert && (
        <motion.div
          className={`fixed inset-0 flex items-center justify-center ${success ? 'bg-green-500' : 'bg-red-500'} p-8`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center text-white">
            <h2 className="text-2xl font-bold mb-4">
              {success ? 'Congrats, You solved it!' : 'Keep Trying!'}
            </h2>
            <p className="text-lg mb-4">
              {success ? 'The Hint is : London' : 'Better luck next time!'}
            </p>
            <button
              className="bg-white text-black py-2 px-4 rounded-lg shadow-lg hover:bg-gray-200 transition duration-300"
              onClick={handleCloseAlert}
            >
              Close
            </button>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}

export default Cryptage;
