import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Start = () => {
    const navigate = useNavigate(); // React Router's hook for navigation

  const handleButtonClick = () => {
    navigate('/games'); // Navigate to the /games route
  };
  return (
    <motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ y: -100, opacity: 0 }} transition={{ duration: 1.5 }} className='grid justify-items-stretch '>
      <div className="boxs">
  <button className="buttons" onClick={handleButtonClick}>PLAY</button>
  <div class="space">
    <span style={{ '--i': 31 }} class="star"></span>
    <span style={{ '--i': 12 }} class="star"></span>
    <span style={{ '--i': 57 }} class="star"></span>
    <span style={{ '--i': 93 }} class="star"></span>
    <span style={{ '--i': 23 }} class="star"></span>
    <span style={{ '--i': 70 }} class="star"></span>
    <span style={{ '--i': 6 }} class="star"></span>
  </div>
</div>
    </motion.div>
  );
}

export default Start;
