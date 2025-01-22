import { Button } from "@/components/ui/button";
import { testimonial } from "@/lib/data";
import { useState } from "react";
import { FaArrowLeft as ArrowLeft, FaArrowRight as ArrowRight, } from "react-icons/fa";

// Testimonial card
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { TestimonialType } from "@/lib/types";
import { FaStar as Star } from "react-icons/fa";


const TestimonialCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex + 3 >= testimonial.length ? 0 : prevIndex + 3
        );
    };

    const handlePrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex - 3 < 0 ? testimonial.length - (testimonial.length % 3 || 3) : prevIndex - 3
        );
    };

    return (
        <div className="relative w-full md:py-12">
            {/* Carousel Container */}
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-2 place-items-center place-content-center">
                {
                    testimonial.slice(currentIndex, currentIndex + 3).map((e, i) => (
                        <TestimonialCard className={i == 1 ? ' md:py-24 md:bg-[#1B255E] ' : ' md:h-fit '} testimonial={e} />
                    ))
                }
            </div>

            {/* Navigation Buttons */}
            {
                testimonial.length > 3 ? (
                    <>
                        <Button className="absolute top-[45%] -left-10 border-gray-600 border bg-none bg-black p-5 py-7" onClick={handlePrevious} >
                            <ArrowLeft />
                        </Button>
                        <Button className="absolute top-[45%] -right-10 border-gray-600 border bg-none bg-black p-5 py-7" onClick={handleNext} >
                            <ArrowRight />
                        </Button>
                    </>
                ) : null
            }
        </div>
    );
};

interface Props {
    testimonial: TestimonialType,
    className: string
}

function TestimonialCard({ testimonial, className }: Props) {
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

export default TestimonialCarousel;
