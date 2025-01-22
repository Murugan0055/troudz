import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { TestimonialType } from "@/lib/types";
import { FaStar as Star } from "react-icons/fa";


function TestimonialCard(testimonial: TestimonialType) {
    return (
        <Card className={` py-4 px-2 mt-14  bg-gray-900 border-none hover:bg-[#1B255E] transform transition-transform duration-800 hover:scale-y-125 cursor-pointer`}>
            <div className="h-fit w-fit p-4 absolute -top-10 left-[40%] bg-black rounded-full overflow-hidden flex justify-center items-center">
                <img src={testimonial.img} alt="" />
            </div>
            <CardHeader className="flex flex-col gap-3 items-center my-4">
                <CardTitle className="text-white text-2xl tracking tracking-widest">{testimonial.name}</CardTitle>
                <CardDescription className="flex gap-2 text-lg text-cyan-300">
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                </CardDescription>
            </CardHeader>
            <CardContent>
                <p className="text-white text-center">{testimonial.review}</p>
            </CardContent>
        </Card>

    )
}

export default TestimonialCard
