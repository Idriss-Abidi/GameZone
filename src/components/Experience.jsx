import { EXPERIENCES } from "../constants"
import { motion } from "framer-motion"

const Experience = () => {
  return (
    <div id="FORMATIONS" className="border-b border-neutral-900 pb-4">
        <motion.h2 whileInView={{opacity:1, y:0}} initial={{opacity:0, y:-100}} transition={{duration:1}} className="my-20 text-center text-4xl">FORMATIONS</motion.h2>
        <div>
            {EXPERIENCES.map((experience, index)=>(
                <motion.div whileInView={{opacity:1, y:0}} initial={{opacity:0, y:100}} transition={{duration:1.5}} key={index} className="mb-8 flex flex-wrap lg:justify-center">
                    <div className="w-full lg:w-1/4">
                    <p className="mb-2 text-sm text-neutral-400">{experience.year}</p>
                    </div>
                    <div className="w-full max-w-xl lg:w-3/4">
                    <h6 className="mb-2 font-semibold">{experience.role} - <span className="text-sm text-purple-100">{experience.company}</span></h6>
                    <p className="mb-4 text-neutral-400" >{experience.description}</p>
                    {experience.technologies.map((tech, index) => (
                        <span key={index} className="mt-2 mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800">{tech}</span>
                    ) )}
                    </div>
                </motion.div>
            ))}
        </div>
    </div>
  )
}

export default Experience
