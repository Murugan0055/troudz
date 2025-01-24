import { useEffect, ReactNode } from "react";
import { useInView } from "react-intersection-observer";

interface Props {
    id: string;
    children: ReactNode;
    className: string;
    setActiveSection: (id: string) => void
}

const Section = ({ id, children, setActiveSection, className }: Props) => {
    const [ref, inView] = useInView({
        threshold: 0.5,
    });

    useEffect(() => {
        if (inView) {
            setActiveSection(id);
        }
    }, [inView, id, setActiveSection]);

    return (
        <div id={id} ref={ref} className={className}>
            {children}
        </div>
    );
};

export default Section;