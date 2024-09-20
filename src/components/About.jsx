import crypt from "../assets/gifs/crypt.gif"
import mirror from "../assets/gifs/mirror.gif"
import codenames from "../assets/gifs/codenames.gif"
import time from "../assets/gifs/time.gif"
import { motion } from "framer-motion"

const About = () => {
  return (
    <div id="ABOUT" className="border-b border-neutral-900 pb-4 "  style={{ fontFamily: "'Press Start 2P', cursive" }}>
      <motion.h1 whileInView={{opacity:1, y:0}} initial={{opacity:0, y:-50}} transition={{duration:0.5}} className=" text-neon my-20 text-center text-4xl">Games</motion.h1>
      <div className="flex flex-wrap">
      <motion.div whileInView={{opacity:1, x:0}} initial={{opacity:0, x:-100}} transition={{duration:0.5}} className="w-full lg:w-1/2 lg:p-8 py-[30px]">
         <h4 className="flex items-center justify-center pb-[17px]">Cipher Quest</h4>
        <div className="flex items-center justify-center">
        <img className="rounded-2xl shadow-lg shadow-indigo-500/90" src={crypt} alt="about" />
        </div>
      </motion.div>
      <motion.div whileInView={{opacity:1, x:0}} initial={{opacity:0, x:-100}} transition={{duration:0.5}} className="w-full lg:w-1/2 lg:p-8 py-[30px]">
        <h4 className="flex items-center justify-center pb-[17px]">Mysterious Message</h4>
        <div className="flex items-center justify-center">
        <img className="rounded-2xl shadow-lg shadow-indigo-500/90" src={mirror} alt="about" />
        </div>
      </motion.div>
      <motion.div whileInView={{opacity:1, x:0}} initial={{opacity:0, x:-100}} transition={{duration:0.5}} className="w-full lg:w-1/2 lg:p-8 py-[30px]">
        <h4 className="flex items-center justify-center pb-[17px]">CODE NAMES</h4>
        <div className="flex items-center justify-center">
        <img className="rounded-2xl shadow-lg shadow-indigo-500/90" src={codenames} alt="about" />
        </div>
      </motion.div>
      <motion.div whileInView={{opacity:1, x:0}} initial={{opacity:0, x:-100}} transition={{duration:0.5}} className="w-full lg:w-1/2 lg:p-8 py-[30px]">
      <h4 className="flex items-center justify-center pb-[17px]">Manage your time; You only have 5 minutes!</h4>
        <div className="flex items-center justify-center">
        <img className="rounded-2xl shadow-lg shadow-indigo-500/90" src={time} alt="about" />
        </div>
      </motion.div>
      </div>
    </div>
  )
}
export default About