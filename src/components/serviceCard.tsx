import { ServicesType } from "@/lib/types"
import FadeInSection from "./animations/fadeInScroll"


function ServiceCard(data: ServicesType) {
    return (
        <FadeInSection duration={0.3} from="left" delay={0} className={`group rounded-sm z-10 shadow-md h-full p-6 bg-gray-900 hover:bg-[#1B255E] transition duration-700 cursor-pointer`}>
            <div className={`h-16 w-16 p-2 rounded-sm bg-gray-900 '}`}>
                <img src={data.img} alt={data.title} className="object-cover object-center w-full h-full" />
            </div>
            <div className="flex flex-col justify-between space-y-5 mt-3">
                <div className="space-y-3">
                    <h2 className="text-xl font-semibold tracking-wide">{data.title}</h2>
                    <p className="dark:text-gray-800">{data.para}</p>
                </div>
                {/* <a href={data.link} type="button" className="text-gradient w-full font-semibold tracking-wide rounded-md">LEARN MORE</a> */}
            </div>
        </FadeInSection >
    )
}

export default ServiceCard
