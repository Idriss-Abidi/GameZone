import { motion } from 'framer-motion';
import { FaHandSparkles, FaStar } from 'react-icons/fa';

const textVariants = {
  initial: { y: 100 },
  animate: { y: 0, transition: { duration: 1.5 } }
};

const welcomeVariants = {
  initial: { x: -100 },
  animate: { x: 0, transition: { duration: 1.5 } }
};

const waveVariants = {
  animate: {
    rotate: [0, 20, -20, 0],
    transition: { duration: 1, repeat: Infinity, repeatType: 'loop' }
  }
};

const starVariants = {
  animate: {
    y: [0, -10, 0],
    transition: { duration: 1, repeat: Infinity, repeatType: 'loop' }
  }
};

const WelcomeSection = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      <motion.h1
        variants={textVariants}
        initial="initial"
        animate="animate"
        className="text-6xl mb-4"
      >
        Hello there!
      </motion.h1>
      
      <div className="flex items-center">
        <motion.h2
          variants={welcomeVariants}
          initial="initial"
          animate="animate"
          className="text-4xl mb-4"
        >
          Welcome to our website
        </motion.h2>
        <motion.div
          variants={waveVariants}
          animate="animate"
          className="text-4xl ml-4"
        >
          <FaHandSparkles />
        </motion.div>
      </div>

      <div className="flex items-center">
        <motion.h3
          className="text-3xl mb-4"
          initial={{ x: 100 }}
          animate={{ x: 0, transition: { duration: 1.5 } }}
        >
          Where IT minds get creative
        </motion.h3>
        <motion.div
          variants={starVariants}
          animate="animate"
          className="text-3xl ml-4"
        >
          <FaStar />
        </motion.div>
      </div>
    </div>
  );
};

export default WelcomeSection;
