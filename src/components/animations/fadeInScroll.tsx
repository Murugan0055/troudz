import React, { ReactNode, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface Props {
    children: ReactNode;
    duration: number;
    from: string;
    delay: number;
    className: string;
}
const FadeInSection = ({ children, duration, from, delay, className }: Props) => {
    const controls = useAnimation();
    const [ref, inView] = useInView({
        threshold: 0.1,
    });

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        } else {
            controls.start("hidden");
        }
    }, [controls, inView]);

    const variants = from == "down" ? {
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0 }
    } : {
        hidden: { opacity: 0, x: 10 },
        visible: { opacity: 1, x: 0 },
    };

    return (
        <motion.div
            ref={ref}
            variants={variants}
            initial="hidden"
            animate={controls}
            transition={{ duration, ease: "easeIn", delay }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export default FadeInSection;