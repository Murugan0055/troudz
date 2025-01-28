import { testimonial } from "@/lib/data";
import { useEffect, useRef } from "react";

// Testimonial card
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TestimonialType } from "@/lib/types";
import { motion } from "framer-motion";
import { FaStar as Star } from "react-icons/fa";
import TiltedCard from "./animations/reactbits/TiltedCard";

export const TestimonialCarousels: React.FC = () => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const duplicateTestimonials = [...testimonial, ...testimonial];

    const startInfiniteScroll = () => {
        if (scrollContainerRef.current) {
            const container = scrollContainerRef.current;

            const scroll = () => {
                if (container.scrollLeft >= container.scrollWidth / 2) {
                    container.scrollLeft = 0; // Reset scroll position when reaching the duplicate's end
                }
                container.scrollLeft += 1; // Adjust the increment for speed
            };

            const scrollInterval = setInterval(scroll, 16); // ~60fps for smooth scrolling

            return () => clearInterval(scrollInterval); // Clear interval on cleanup
        }
    };

    useEffect(() => {
        const cleanup = startInfiniteScroll();
        return cleanup; // Cleanup function
    }, []);

    return (
        <motion.div ref={scrollContainerRef} className="flex gap-5 overflow-x-scroll no-scrollbar w-full py-7 sm:py-16 px-10 ">
            {
                duplicateTestimonials.map((e, i) => {
                    if (window.innerWidth >= 600) {
                        return (
                            <TiltedCard key={i} scaleOnHover={1} rotateAmplitude={14}>
                                <TestimonialCard className="w-[350px]" testimonial={e} />
                            </TiltedCard>
                        )
                    }
                    return (
                        <div key={i} >
                            <TestimonialCard className="w-[350px]" testimonial={e} />
                        </div>
                    )
                })
            }
        </ motion.div >
    );
};

interface Props {
    testimonial: TestimonialType,
    className: string
}

export function TestimonialCard({ testimonial, className }: Props) {
    return (
        <Card className={` py-12 px-2 bg-gray-900 border-none hover:bg-[#1B255E] transform transition-transform duration-1000 cursor-pointer ${className}`}>
            <div className="h-24 w-auto p-4 absolute -top-10 left-[40%] bg-black rounded-full overflow-hidden flex justify-center items-center">
                <img src={testimonial.img} alt={testimonial.name} className="h-full w-full rounded-full" />
            </div>
            <CardHeader className="flex flex-col gap-3 items-center my-1">
                <CardTitle className="text-white text-2xl font-aoboshi font-medium tracking-widest">{testimonial.name}</CardTitle>
                <CardDescription className="flex gap-2 text-lg text-cyan-300">
                    {
                        Array.from({ length: testimonial.ratings }, (_) => (
                            <Star />
                        ))
                    }
                </CardDescription>
            </CardHeader>
            <CardContent>
                <p className="text-white text-center">{testimonial.review}</p>
            </CardContent>
        </Card>

    )
}

export default TestimonialCarousels;
