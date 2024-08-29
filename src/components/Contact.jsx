import { FaLinkedin, FaInstagram, FaFacebookF } from 'react-icons/fa';
import { motion } from 'framer-motion';

const iconMove = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: 'linear',
            repeat: Infinity,
            repeatType: 'reverse',
        }
    }
});

const ContactUs = () => {
  return (
    <div className="m-8">
      <div className="lg:grid lg:grid-cols-2 lg:gap-4" id="CONTACT">
      {/* Contact Form */}
      <motion.div whileInView={{opacity:1, x:0}} initial={{opacity:0, x:-100}} transition={{duration:1.5}} className="flex flex-col items-center py-3">
        <h2 className="text-3xl text-white mb-6">CONTACT US</h2>
        <form className="w-full max-w-md text-black/80 bg-white/10 p-6 rounded-lg">
          <div className="mb-4">
            <label htmlFor="name" className="block text-white">Name</label>
            <input id="name" type="text" className="w-full p-2 mt-1 rounded" required />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-white">Email</label>
            <input id="email" type="email" className="w-full p-2 mt-1 rounded" required />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-white">Message</label>
            <textarea id="message" rows="4" className="w-full p-2 mt-1 rounded" required></textarea>
          </div>
          <div className="flex justify-center"> 
          <button className="bg-purple-900/50 text-white font-semibold py-2 px-4 rounded-lg shadow-lg hover:bg-blue-900">Send Message</button>
          </div>
        </form>
      </motion.div>

      {/* Sponsoring */}
      <motion.div whileInView={{opacity:1, x:0}} initial={{opacity:0, x:100}} transition={{duration:1.5}} className="flex flex-col items-center py-3" id="SPONSORS">
      <h2 className="text-3xl bg-gradient-to-r from-yellow-700 via-gray-400 to-yellow-400 bg-clip-text text-transparent mb-6">SPONSORING</h2>
        <form className="w-full  max-w-md text-black/80 bg-gradient-to-r from-yellow-700/60 via-gray-400/70 to-yellow-300/70 p-6 rounded-lg">
          <div className="mb-4">
            <label htmlFor="name" className="block text-white">Name</label>
            <input id="name" type="text" className="w-full p-2 mt-1 rounded" required />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-white">Email</label>
            <input id="email" type="email" className="w-full p-2 mt-1 rounded" required />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-white">Message</label>
            <textarea id="message" rows="4" className="w-full p-2 mt-1 rounded" required></textarea>
          </div>
          <div className="flex justify-center"> 
          <button className="bg-gray-900/50 text-white font-semibold py-2 px-4 rounded-lg shadow-lg hover:bg-yellow-500/50">Send Message</button>
          </div>
        </form>
      </motion.div>
      </div>
      {/* Get in Touch Section */}
      <div className="flex flex-col items-center mt-8">
        <motion.h2 whileInView={{opacity:1, y:0}} initial={{opacity:0, y:-50}} transition={{duration:1.5}} className="text-3xl text-white mb-4">Get in Touch</motion.h2>
        <div className="flex items-center justify-center gap-4 text-2xl text-white">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ x: -100, opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="flex items-center justify-center"
            style={{ width: '50px', height: '50px' }}
          >
            <a href="https://www.linkedin.com/company/ensias-it-club/" target="_blank" rel="noopener noreferrer">
              <motion.div variants={iconMove(2.5)} initial="initial" animate="animate">
                <FaLinkedin />
              </motion.div>
            </a>
          </motion.div>

          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ x: -100, opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="flex items-center justify-center"
            style={{ width: '50px', height: '50px' }}
          >
            <a href="https://www.instagram.com/ensias_it_club/" target="_blank" rel="noopener noreferrer">
              <motion.div variants={iconMove(3)} initial="initial" animate="animate">
                <FaInstagram />
              </motion.div>
            </a>
          </motion.div>

          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ x: -100, opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="flex items-center justify-center"
            style={{ width: '50px', height: '50px' }}
          >
            <a href="https://www.facebook.com/ensiasitclub" target="_blank" rel="noopener noreferrer">
              <motion.div variants={iconMove(4)} initial="initial" animate="animate">
                <FaFacebookF />
              </motion.div>
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
