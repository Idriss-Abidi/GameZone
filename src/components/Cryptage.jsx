import React, { useState } from 'react';
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
  if (index === -1) return letter;
  const shiftedIndex = (index + randomShift) % 26;
  return alphabet[shiftedIndex];
};

const shiftedwords = words.map(word => word.map(letter => caesarShift(letter)));

const Cryptage = ({ addPoints, onSubmit }) => {
  const [inputs, setInputs] = useState(words.map(word => word.map(() => '')));
  const [results, setResults] = useState(Array(words.length).fill(''));
  const [showAlert, setShowAlert] = useState(false);
  const [success, setSuccess] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const handleInputChange = (wordIndex, letterIndex, value) => {
    const newInputs = [...inputs];
    newInputs[wordIndex][letterIndex] = value.toUpperCase();
    setInputs(newInputs);

    const isMatch = newInputs[wordIndex].every((input, i) => input === words[wordIndex][i]);
    const newResults = [...results];
    newResults[wordIndex] = isMatch ? 'Matched!' : 'Not Matched!';
    setResults(newResults);
  };

  const handleSubmit = () => {
    const matchedWordsCount = results.filter(result => result === 'Matched!').length;
    setSuccess(matchedWordsCount > 0);
    setShowAlert(true);
    addPoints(matchedWordsCount*2);
    onSubmit();
    setButtonDisabled(true); // Disable the button after submission
  };

  const handleCloseAlert = () => {
    setShowAlert(false);
    setInputs(words.map(word => word.map(() => '')));
    setResults(Array(words.length).fill(''));
    // Do not re-enable the button
  };

  return (
    <motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ y: -100, opacity: 0 }} transition={{ duration: 1.5 }} className='grid justify-items-stretch'>
      <h2 className="text-4xl font-bold bg-gradient-to-r from-pink-300 via-slate-500 to-purple-800 bg-clip-text text-transparent my-10 text-center">
        Cipher Quest
      </h2>

      <p className="text-center text-xl mb-2">
        <strong className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-2xl tracking-tight text-transparent'>Objective: </strong> Find the correct shift number to the left for the letters (not numbers) to decrypt the words.
      </p>
      <p className="text-center text-2xl mb-8">
        <strong className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-2xl tracking-tight text-transparent'>Hint: </strong> ENSIAS
      </p>

      <div className="space-y-8 p-4 justify-center max-w-full">
        {shiftedwords.map((word, wordIndex) => (
          <div key={wordIndex} className="flex space-x-4 justify-center flex-wrap ">
            <div className="flex space-x-2 my-[10px]">
              {word.map((letter, index) => (
                <div key={index} className="border-2 border-gray-400 p-2 text-center font-bold w-[8vw] h-[8vw] md:w-[4vw] md:h-[4vw] flex items-center justify-center">
                  {letter}
                </div>
              ))}
            </div>
            <HiArrowCircleRight className="text-xl w-8 h-8 md:w-10 md:h-10 text-gray-600 my-[10px] " />
            <div className="flex space-x-2 my-[10px]">
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

            <div className="flex items-center ml-4 text-1xl font-bold">
              {results[wordIndex]}
            </div>
          </div>
        ))}
      </div>

      {/* <button
        onClick={handleSubmit}
        className={`bg-white text-black py-2 px-4 rounded-lg shadow-lg hover:bg-gray-200 transition duration-300 mt-4 justify-self-center ${buttonDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
        disabled={buttonDisabled} // Keep button disabled
      >
        Submit
      </button> */}


      <div className='items-center text-center my-[10px]'>
        <button className={` hover:bg-blue-600  ${buttonDisabled ? 'opacity-50 cursor-not-allowed' : ''}`} 
        onClick={handleSubmit} 
        disabled={buttonDisabled}>
        <span class=" button_top"> Submit </span>
      </button>
      </div>


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
              {success ? '' : 'Better luck next time!'}
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
};

export default Cryptage;
