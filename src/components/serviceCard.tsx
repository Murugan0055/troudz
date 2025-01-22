import { ServicesType } from "@/lib/types"


function ServiceCard(data: ServicesType) {
    return (
        <div className={`rounded-sm shadow-md h-full p-6 ${[2, 4, 5, 7].includes(data.id) ? 'bg-[#1B255E]' : 'bg-gray-900'}`}>
            <div className={`h-16 w-16 p-2 rounded-sm bg-slate-700 ${[2, 4, 5, 7].includes(data.id) ? 'bg-gray-900' : 'bg-[#1B255E]'}`}>
                <img src={data.img} alt={data.title} className="object-cover object-center w-full h-full" />
            </div>
            <div className="flex flex-col justify-between space-y-5 mt-3">
                <div className="space-y-3">
                    <h2 className="text-xl font-semibold tracking-wide">{data.title}</h2>
                    <p className="dark:text-gray-800">{data.para}</p>
                </div>
                <a href={data.link} type="button" className="text-gradient w-full font-semibold tracking-wide rounded-md">LEARN MORE</a>
            </div>
        </div>
    )
}

export default ServiceCard
