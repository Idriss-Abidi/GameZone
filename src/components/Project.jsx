import { EVENTS } from "../constants"
import { motion } from "framer-motion"

const Project = () => {
  return (
    <div id="EVENTS" className="border-b border-neutral-900 pb-4">
        <motion.h2 whileInView={{opacity:1, y:0}} initial={{opacity:0, y:-100}} transition={{duration:1}} className="my-20 text-center text-4xl">EVENTS</motion.h2>
        <div>
            {EVENTS.map((project, index)=>(
                <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                <motion.div whileInView={{opacity:1, x:0}} initial={{opacity:0, x:-100}} transition={{duration:1.5}}  className="w-full lg:w-1/4 flex items-center justify-center">
                    <img src={project.image} alt={project.alt} width={150} height={150} className="mb-6 rounded"/>
                </motion.div>
                <motion.div whileInView={{opacity:1, x:0}} initial={{opacity:0, x:100}} transition={{duration:1.5}}  className="w-full max-w-xl lg:w-3/4">
                    <h6 className="mb-2 font-semibold">{project.title}</h6>
                    <p className="mb-4 text-neutral-400">{project.description}</p>
                    <div className="text-right">
                    {project.link ? (
                <div className="text-right mt-4">
                    <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:underline"
                    >
                        Read More
                    </a>
                </div>
            ) : null}
                    </div>
                    {project.tags.map((tech, index)=>(
                        <span key={index} className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">{tech}</span>
                    ))}
                </motion.div>
                </div>
            ))}

        </div>
    </div>
  )
}

export default Project
