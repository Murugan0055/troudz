import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useParams } from "react-router-dom";

function Services() {
    const { id } = useParams();

    console.log("Service ID:", id);

    return (
        <div className="bg-dark h-screen overflow-auto  mx-auto px-6 md:px-14 pt-16 space-y-6">
            <h1 className="text-4xl text-gray-300 font-bold">Intelligent Task Automatione</h1>

            <p className="text-gray-400 text-lg md:w-4/5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores facere obcaecati debitis deserunt veniam quae amet accusantium. Reiciendis, tempore temporibus distinctio cupiditate asperiores ducimus vitae assumenda repellat. Nostrum fugit voluptates ipsa aperiam repellendus consectetur esse est. Repellendus, nulla repudiandae similique dolorum eos odio repellat, nihil harum exercitationem modi, esse magni?</p>

            <Button className="px-8 py-2 text-white">Button</Button>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-5">
                <Card className="bg-primary border-none">
                    <CardContent className="text-white p-4 md:text-center h-60">Content 1</CardContent>
                </Card>
                <Card className="bg-primary border-none">
                    <CardContent className="text-white p-4 md:text-center h-60">Content 2</CardContent>
                </Card>
                <Card className="bg-primary border-none">
                    <CardContent className="text-white p-4 md:text-center h-60">Content 3</CardContent>
                </Card>
            </div>

            <Separator className='bg-gradient-to-r from-[#006CFC] to-[#00DDE8] mb-6 h-0.5 rounded-full max-w-full' />
            <div className="flex justify-between">
                <p className="text-sm text-gray-400">&copy; 2024 Troudz AI Labs</p>
                <p className="text-sm text-gray-400"> All rights reserved.</p>
            </div>
        </div>
    );
}

export default Services;