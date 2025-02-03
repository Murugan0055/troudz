import { Separator } from "@/components/ui/separator";
import { IoMdArrowRoundBack as ArrowLeft } from "react-icons/io";
import { Link, useParams } from "react-router-dom";

function Services() {
    const { id } = useParams();

    const getServiceTitle = (): string => {
        switch (id) {
            case 'intelligent-task-automation':
                return 'Intelligent Task Automation';
            case 'ai-power-assitants':
                return 'AI-Powered Assistants';
            case 'ai-enhanced-copilots':
                return 'AI-Enhanced Copilots';
            case 'smart-conversational-solutions':
                return 'Smart Conversational Solutions';
            case 'predictive-insights':
                return 'Predictive Insights';
            case 'data-intelligent-enrichment':
                return 'Data Intelligence & Enrichment';
            case 'ai-driven-creativity-strategy':
                return 'AI-Driven Creativity and Strategy';
            case 'resource-management-optimization':
                return 'Resource Management & Optimization';
            default:
                return 'Service not found';
        }
    };

    const title = getServiceTitle();

    return (
        <div className="bg-dark flex flex-col justify-between h-screen overflow-auto  mx-auto  p-4 md:p-10 md:py-5 space-y-6">
            <div className="flex gap-3 py-5">
                <Link to='/' className='z-10'>
                    <ArrowLeft className='text-white text-4xl cursor-pointer' />
                </Link>
                <h1 className="text-4xl text-gray-300 font-bold">{title}</h1>
            </div>
            <div className="flex flex-col space-y-5">
                <p className="text-gray-400 text-lg">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores facere obcaecati debitis deserunt veniam quae amet accusantium. Reiciendis, tempore temporibus distinctio cupiditate asperiores ducimus vitae assumenda repellat. Nostrum fugit voluptates ipsa aperiam repellendus consectetur esse est. Repellendus, nulla repudiandae similique dolorum eos odio repellat, nihil harum exercitationem modi, esse magni?</p>
                <p className="text-gray-400 text-lg">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque vel commodi maiores, aspernatur consequuntur eveniet voluptates dicta soluta natus numquam quas non, esse autem corrupti molestias ipsam iste recusandae perferendis fuga vero. Consectetur maxime alias repudiandae hic nobis? Voluptatum beatae fuga, omnis vel aliquid cupiditate quidem vero alias consequatur consectetur sunt! Nihil eaque veniam cupiditate placeat error, a, at reiciendis animi atque dolorem culpa incidunt quaerat odit aliquid non ab ullam soluta quia ea magni, deleniti hic unde? Voluptates exercitationem tempore aliquid cumque libero maxime voluptas ut sit, autem officiis illo temporibus laudantium perspiciatis non nam, harum vero rerum architecto!</p>
                <p className="text-gray-400 text-lg">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad itaque molestias minima ratione quo beatae debitis! Explicabo tempora officiis, vitae nostrum cum reprehenderit aut pariatur ducimus adipisci id mollitia quisquam a illum nemo, excepturi amet necessitatibus aspernatur quaerat, dicta quidem? Voluptates fugiat harum optio expedita. Velit error facere voluptates vel, assumenda voluptatem? Dolore reprehenderit voluptas ratione id ab atque, eius error optio qui odio quae mollitia quibusdam, natus tenetur corrupti, quidem officiis quaerat voluptate dolores aperiam et minus. Doloribus quam consequuntur incidunt at labore fuga sunt assumenda molestias ullam quibusdam? Natus tempora commodi quia deleniti in possimus dicta saepe, dolores laborum corporis eaque, iure quo eum dolor vitae fuga iste et inventore animi? Deleniti maxime a fuga laudantium sed quasi.</p>

            </div>
            <div>
                <Separator className='bg-gradient-to-r from-[#006CFC] to-[#00DDE8] mb-6 h-0.5 rounded-full max-w-full' />
                <div className="flex justify-between">
                    <p className="text-sm text-gray-400">&copy; 2025 Troudz AI Labs</p>
                    <p className="text-sm text-gray-400"> All rights reserved.</p>
                </div>
            </div>
        </div>
    );
}

export default Services;