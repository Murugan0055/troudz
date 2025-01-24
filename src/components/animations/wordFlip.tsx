import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

interface Props {
    words: string[];
    duration: number;
    className: string
}
const FlipText = ({ words, duration, className }: Props) => {
    const [currentWordIndex, setCurrentWordIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        }, duration);
        return () => clearInterval(interval);
    }, []);

    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={words[currentWordIndex]}
                initial={{ rotateX: -90, opacity: 0 }}
                animate={{ rotateX: 0, opacity: 1 }}
                exit={{ rotateX: 90, opacity: 0 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className={className}
            >
                {words[currentWordIndex]}
            </motion.div>
        </AnimatePresence>
    );
};

export default FlipText;
