import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Pwd = () => {
  const [inputs, setInputs] = useState(['', '', '', '']); // Initialize state for inputs
  const [showAlert, setShowAlert] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleInputChange = (index, value) => {
    const newInputs = [...inputs];
    newInputs[index] = value.toUpperCase(); // Convert input to uppercase
    setInputs(newInputs);
  };

  const handleSubmit = () => {
    const wordEntered = inputs.join('');
    if (wordEntered === '221B') {
      setSuccess(true);
    } else {
      setSuccess(false);
    }
    setShowAlert(true);
  };

  const handleCloseAlert = () => {
    setShowAlert(false);
    setInputs(['', '', '', '']); // Reset inputs
  };

  return (
    <motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ y: -100, opacity: 0 }} transition={{ duration: 1.5 }} className='grid justify-items-stretch  '>
      <h2 className="text-4xl font-bold bg-gradient-to-r from-pink-300 via-slate-500 to-purple-800 bg-clip-text text-transparent my-10 text-center">
        GUESS THE WORD
      </h2>

      <p className="text-center text-xl mb-2">
        <strong className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-2xl tracking-tight text-transparent'>Objective: </strong> After Finding The 3 Hints You Need to Search The Winning Password!
      </p> 
      <p className="text-center text-xl mb-2">
        <strong className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-2xl tracking-tight text-transparent'> Bonus Hint: </strong> 3 numbers and 1 letter.
      </p> 
      
      <div className="space-y-8 p-4 justify-self-center">
        <div className="flex space-x-4 justify-center">
          {inputs.map((value, index) => (
            <input
              key={index}
              type="text"
              maxLength="1"
              className="border-2 border-gray-400 text-gray-800 text-center text-1xl font-bold w-8 h-8"
              value={value}
              onChange={(e) => handleInputChange(index, e.target.value)}
            />
          ))}
        </div>
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
          className={`fixed inset-0 flex items-center justify-center ${success ? 'bg-yellow-500' : 'bg-red-500'} p-8`}
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
}

export default Pwd;
