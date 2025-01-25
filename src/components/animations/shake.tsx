import { motion } from "framer-motion";
import { ReactNode } from 'react';

function Shake({ children, className }: { children: ReactNode, className: string }) {
    return (
        <motion.div
            animate={{
                x: [0, 1, 0, -1, 0],
                y: [0, 1, 0, -1, 0]
            }}
            transition={{
                duration: 1,
                ease: "easeInOut",
                repeat: Infinity,
            }}
            className={className}
        >
            {children}
        </motion.div>
    )
}

export default Shake
