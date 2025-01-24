import { FaFacebook as FB, FaInstagram as Insta, FaYoutube as YT } from "react-icons/fa";
import { FaXTwitter as X } from "react-icons/fa6";
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Separator } from './ui/separator';



function Footer() {
    return (
        <footer className="z-20 mx-auto w-full px-4 sm:px-6 lg:px-20 pt-14 pb-5 lg:grid lg:grid-cols-1">
            <div className="grid grid-cols-4 gap-8 sm:grid-cols-5">
                <div className="col-span-3 md:col-span-2 max-w-3xl sm:order-last">
                    <div className="space-y-5">
                        <h3 className="text-xl text-white font-bold"> Subscribe To Newsletter </h3>
                    </div>
                    <div className="mt-6 flex flex-col sm:flex-row items-start">
                        <Input
                            type="email"
                            placeholder="Enter your email"
                            className="text-gray-500 p-5 border outline-none rounded-full"
                        />
                        <Button className="mt-3 px-5 py-3 rounded-full text-white border-none sm:mt-0 sm:ml-3">
                            SUBSCRIBE
                        </Button>
                    </div>
                </div>

                <div className='col-span-2 sm:col-span-1 flex flex-col space-y-5'>
                    <p className="font-medium text-white text-xl">Company</p>
                    <ul className="space-y-2.5 text-sm">
                        <li>
                            <a href="#" className="text-white transition hover:opacity-75"> About Us </a>
                        </li>
                        <li>
                            <a href="#" className="text-white transition hover:opacity-75"> Services </a>
                        </li>
                        <li>
                            <a href="#" className="text-white transition hover:opacity-75"> Pricing </a>
                        </li>
                        <li>
                            <a href="#" className="text-white transition hover:opacity-75"> Testimonials </a>
                        </li>
                    </ul>
                </div>

                <div className='col-span-2 sm:col-span-1 flex flex-col space-y-5'>
                    <p className="font-medium text-white text-xl">Help</p>
                    <ul className="space-y-2.5 text-sm">
                        <li>
                            <a href="#" className="text-white transition hover:opacity-75"> Customer Support </a>
                        </li>

                        <li>
                            <a href="#" className="text-white transition hover:opacity-75"> Terms & Conditions </a>
                        </li>

                        <li>
                            <a href="#" className="text-white transition hover:opacity-75"> Privacy Policy </a>
                        </li>
                    </ul>
                </div>

                <div className='col-span-4 sm:col-span-3 md:col-span-1 flex flex-col space-y-5'>
                    <p className="font-medium text-white text-xl">Contact Us</p>
                    <ul className="space-y-2.5 text-sm">
                        <li> Troudz AI</li>
                        <li> Layout, 8th Block Koramangala, </li>
                        <li> Bangalore- 560095 </li>
                        <li> support@troudz.com </li>
                    </ul>
                </div>
            </div>
            <div className="flex md:justify-end space-x-4 py-6">
                <FB className='text-3xl text-slate-600' />
                <Insta className='text-3xl text-slate-600' />
                <YT className='text-3xl text-slate-600' />
                <X className='text-3xl text-slate-600' />
            </div>
            <Separator className='bg-gradient-to-r from-[#006CFC] to-[#00DDE8] mb-6 h-0.5 rounded-full' />
            <div className="flex justify-between">
                <p className="text-sm text-gray-400">&copy; 2024 Troudz AI Labs</p>
                <p className="text-sm text-gray-400"> All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer
