import { useState } from "react";
import { motion } from "framer-motion";
import cp from "../assets/cells/cp.jpg";
import gamedev from "../assets/cells/gamedev.jpg";
import media from "../assets/cells/media.jpg";
import training from "../assets/cells/training.jpg";
import sponsoring from "../assets/cells/sponsoring.jpg";

const iconMove = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        }
    }
});

const textAnimation = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 },
    transition: { duration: 1 }
};

const descriptions = {
    sponsoring: "Sponsoring helps support various initiatives and projects.",
    gamedev: "Game development involves creating interactive games.",
    training: "Training focuses on improving skills and knowledge.",
    cp: "Competitive programming hones problem-solving abilities.",
    media: "Media encompasses content creation and management."
};

const Technologies = () => {
    const [selectedCell, setSelectedCell] = useState(null);

    const handleCloseCard = () => {
        setSelectedCell(null);
    };

    return (
        <div id="CELLS" className="border-b border-neutral-800 pb-24">
            <motion.h2 whileInView={{ opacity: 1, y: 0 }} initial={{ y: -100, opacity: 0 }} transition={{ duration: 1.5 }} className="my-20 text-center text-4xl">CELLS</motion.h2>
            <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ x: -100, opacity: 0 }} transition={{ duration: 1.5 }} className="flex flex-wrap items-center justify-center gap-4">
                {Object.keys(descriptions).map((key) => (
                    <motion.div
                        key={key}
                        variants={iconMove(2.5)}
                        initial="initial"
                        animate="animate"
                        className="rounded-full border-4 border-neutral-800 flex items-center justify-center cursor-pointer"
                        style={{ width: '100px', height: '100px' }}
                        onClick={() => setSelectedCell(key)}
                    >
                        <img
                            src={key === 'sponsoring' ? sponsoring : key === 'gamedev' ? gamedev : key === 'training' ? training : key === 'cp' ? cp : media}
                            alt={key}
                            className="w-full h-full rounded-full object-cover"
                        />
                    </motion.div>
                ))}
            </motion.div>
            {selectedCell && (
                <motion.div
                    className="relative mt-8 mx-auto p-6 bg-gray-800 text-white rounded-lg w-3/4"
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 100 }}
                    transition={{ duration: 1.5 }}
                >
                    <button
                        onClick={handleCloseCard}
                        className="absolute top-2 right-2 text-xl text-gray-300 hover:text-gray-100 mx-2"
                    >
                        ×
                    </button>
                    <motion.h3
                        key={selectedCell}  // This will trigger re-animation
                        className="text-xl font-bold mb-2"
                        variants={textAnimation}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                    >
                        {selectedCell.charAt(0).toUpperCase() + selectedCell.slice(1)}
                    </motion.h3>
                    <motion.p
                        key={selectedCell + "-desc"}  // Unique key to trigger re-animation
                        variants={textAnimation}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                    >
                        {descriptions[selectedCell]}
                    </motion.p>
                </motion.div>
            )}
        </div>
    );
};

export default Technologies;
