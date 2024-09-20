import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion'; // Importing framer-motion for animations
import Codenames from "../components/Codenames";
import Cryptage from "../components/Cryptage";
import Mirror from "../components/Mirror";

const Games = () => {
  const [totalPoints, setTotalPoints] = useState(0);
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes in seconds
  const [alertMessage, setAlertMessage] = useState(''); // Message for when time's up
  const [submissionCount, setSubmissionCount] = useState(0); // Track number of game submissions
  const [showAlert, setShowAlert] = useState(false); // State to handle the alert visibility

  useEffect(() => {
    const timer = setInterval(() => {
      if (timeLeft > 0) {
        setTimeLeft(prev => prev - 1);
      } else {
        clearInterval(timer);
        setAlertMessage(`Time's up! You earned ${totalPoints} points.`);
        setShowAlert(true); // Show the alert when time's up
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, totalPoints]);

  const addPoints = (points) => {
    setTotalPoints(prev => prev + points);
  };

  const handleGameSubmit = () => {
    setSubmissionCount(prevCount => {
      const newCount = prevCount + 1;
      if (newCount === 3) {
        setTimeLeft(0); // End the timer once all 3 games are submitted
        setShowAlert(true); // Show the alert when all submissions are done
      }
      return newCount;
    });
  };

  const handleCloseAlert = () => {
    setShowAlert(false); // Close the alert
  };

  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      {/* Timer and Score */}
      <div className="fixed top-0 left-1/2 transform -translate-x-1/2 bg-gray-800 rounded-full py-5 px-4 z-10">
        <h2 className="text-white text-xl text-center">
          Time Left: {Math.floor(timeLeft / 60)}:{('0' + (timeLeft % 60)).slice(-2)}
          <br />
          Score: {totalPoints}
        </h2>
      </div>

      {/* Conditional Alert for Time's Up or Submissions */}
      {alertMessage && showAlert && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-yellow-500 p-8 z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center text-white">
            <h2 className="text-2xl font-bold mb-4">{alertMessage}</h2>
            <button
              className="bg-white text-black py-2 px-4 rounded-lg shadow-lg hover:bg-gray-200 transition duration-300"
              onClick={handleCloseAlert}
            >
              Close
            </button>
          </div>
        </motion.div>
      )}

      {/* Background */}
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      </div>

      {/* Game Components */}
      <div className="container mx-auto px-20 mb-2 flex flex-col items-center py-30">
        <Cryptage addPoints={addPoints} onSubmit={handleGameSubmit} />
        <Mirror addPoints={addPoints} onSubmit={handleGameSubmit} />
        <Codenames addPoints={addPoints} onSubmit={handleGameSubmit} />
      </div>
    </div>
  );
};

export default Games;
