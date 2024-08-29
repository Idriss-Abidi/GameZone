import { HERO_CONTENT } from "../constants"
import eitcLogo from "../assets/eitcLogo.png"
import { delay, motion } from 'framer-motion';
import { FaHandSparkles, FaStar } from 'react-icons/fa';

const textVariants = {
  initial: { y: -20 },
  animate: { y: 0, transition: { duration: 1.5} }
};

const waveVariants = {
  animate: {
    rotate: [0, 10, -10, 0],
    transition: { duration: 2, repeat: Infinity, repeatType: 'loop' }
  }
};

const starVariants = {
  animate: {
    y: [0, -10, 0],
    transition: { duration: 3, repeat: Infinity, repeatType: 'loop' }
  }
};


const container1=(delay)=>({
    hidden:{x:-100, opacity:0},
    visible:{
        x:0,
        opacity:1,
        transition:{duration:0.5,delay: delay},
    },
})
const container2=(delay)=>({
    hidden:{x:100, opacity:0},
    visible:{
        x:0,
        opacity:1,
        transition:{duration:0.5,delay: delay},
    },
})
const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2"> 
                <div className="flex flex-col items-center lg:items-start">
                    <motion.h1 variants={container1(0)} initial="hidden" animate="visible" className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl ">EITC</motion.h1>
                    <motion.span variants={container1(0.5)} initial="hidden" animate="visible" className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent">ENSIAS IT CLUB</motion.span>
                    <motion.div variants={container1(1)} initial="hidden" animate="visible" className="my-2 max-w-xl py-6 font-light tracking-tighter">
                        {/* <WelcomeSection/> */}
                        <motion.h1
        variants={textVariants}
        initial="initial"
        animate="animate"
        className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent mb-4"
      >
        Hello there!
      </motion.h1>
      
      <div className="flex items-center">
        <motion.h2
          variants={textVariants}
          initial="initial"
          animate="animate"
          className="mb-4 bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"
        >
          Welcome to our club
        </motion.h2>
        <motion.div
          variants={waveVariants}
          animate="animate"
          className="text-4xl ml-4 text-purple-600"
        >
          <FaHandSparkles />
        </motion.div>
      </div>

      <div className="flex items-center">
        <motion.h3
          variants={textVariants}
          initial="initial"
          animate="animate"
          className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent mb-4"
        >
          Where IT minds get creative
        </motion.h3>
        <motion.div
          variants={starVariants}
          animate="animate"
          className="text-3xl ml-4 text-purple-600"
        >
          <FaStar />
        </motion.div>
      </div>
                    </motion.div>
                </div>
            </div>
            <div className="w-full lg:w-1/2 lg:p-8"> 
                <div className="flex justify-center ">
                    <motion.img variants={container2(1.2)} initial="hidden" animate="visible" src={eitcLogo} alt=""/>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Hero
