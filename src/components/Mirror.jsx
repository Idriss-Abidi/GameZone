import React, { useState } from 'react';
import { motion } from 'framer-motion';
import msg from "../assets/test/msg.png"

const Mirror = () => {
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
    if (wordEntered === 'EITC') {
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
    <motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ y: -100, opacity: 0 }} transition={{ duration: 1.5 }} className='mt-20 grid justify-items-stretch '>
      <h2 className="text-4xl font-bold bg-gradient-to-r from-pink-300 via-slate-500 to-purple-800 bg-clip-text text-transparent my-10 text-center">
      Mysterious Message
      </h2>

      <p className="text-center text-xl mb-2">
        <strong className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-2xl tracking-tight text-transparent'>Objective: </strong> You need to understand this message so you can find the missing word and get the second hint.
      </p> 
      <p className="text-center text-2xl mb-8">
        <strong className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-2xl tracking-tight text-transparent'>Hint: </strong> Mirror
      </p>
      <motion.div 
  whileInView={{ opacity: 1, x: 0 }} 
  initial={{ opacity: 0, x: -100 }} 
  transition={{ duration: 0.5 }} 
  className="w-full lg:w-1/2 lg:p-8 flex justify-center mx-auto"
>
  <div className="flex items-center justify-center">
    <img className="rounded-2xl shadow-lg shadow-indigo-500/90" src={msg} alt="message" />
  </div>
</motion.div>

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
              {success ? 'The hint is "Detective"' : 'Better luck next time!'}
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

export default Mirror;