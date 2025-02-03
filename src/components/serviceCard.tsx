import { ServicesType } from "@/lib/types.js";
import FadeInOnScroll from "./animations/fadeIn.js";
import SpotlightCard from "./animations/reactbits/SpotlightCard.js";

function ServiceCard(data: ServicesType) {
    return (
        <FadeInOnScroll direction="left" delay={(data.id / 10)}>
            <SpotlightCard className="group rounded-sm z-20 shadow-md h-full p-6 bg-gray-900 hover:bg-[#1B255E] transition duration-700 cursor-pointer" spotlightColor="#4d4e4e">
                <div className={`h-16 w-16 p-2 rounded-sm bg-[#1B255E] group-hover:bg-gray-900 transition duration-1000 '}`}>
                    <img src={data.img} alt={data.title} className="object-cover object-center w-full h-full" />
                </div>
                <div className="flex flex-col justify-between space-y-5 mt-3">
                    <div className="space-y-3">
                        <h2 className="text-xl font-semibold tracking-wide">{data.title}</h2>
                        <p className="text-gray-300">{data.para}</p>
                    </div>
                    {/* <Link to={data.link} type="button" className="text-gradient w-full font-semibold tracking-wide rounded-md">LEARN MORE</Link> */}
                </div>
            </SpotlightCard>
        </FadeInOnScroll >
    )
}

export default ServiceCard
