import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { PiLineVerticalBold as Line } from "react-icons/pi";


interface Props {
    delay: number;
    text: string;
    duration: number;
    textStyle: string
}

const TypingEffect = ({ delay, text, duration, textStyle }: Props) => {
    const [displayedText, setDisplayedText] = useState("");

    useEffect(() => {
        let currentIndex = 0;

        const interval = setInterval(() => {
            if (currentIndex < text.length) {
                setDisplayedText((prev) => prev + text[currentIndex]);
                currentIndex += 1;
            } else {
                clearInterval(interval);
            }
        }, delay);

        return () => clearInterval(interval);
    }, [text]);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration }}
            className={`${textStyle}`}
        >
            {displayedText}
            <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="text-xl "
            >
                <Line />
            </motion.span>
        </motion.div>
    );
};

export default TypingEffect;
