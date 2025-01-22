import { CgMenuLeft as MenuIcon } from "react-icons/cg";
import { RxCross2 as Cross } from "react-icons/rx";


import { useState } from 'react';
import logo from '../assets/logo.svg';
import { Button } from './ui/button';

const Navbar = () => {

    const [sidebarOpen, setSidebarOpen] = useState(false);

    const navigation = [
        { title: "Home", path: "javascript:void(0)" },
        { title: "About Us", path: "javascript:void(0)" },
        { title: "Services", path: "javascript:void(0)" },
        { title: "Testimonial", path: "javascript:void(0)" },
        { title: "Contact Us", path: "javascript:void(0)" },
    ]

    return (
        <nav className="w-full md:static md:text-sm">
            <div className={`items-center max-w-screen-xl mx-auto md:flex md:px-8 ${sidebarOpen ? 'px-0' : 'px-4'}`}>
                <div className="flex items-center justify-between py-3 md:py-5 md:block">
                    <a href="/">
                        <img
                            src={logo}
                            width={40}
                            height={40}
                            alt="Float UI logo"
                        />
                    </a>
                    <div className="md:hidden">
                        <Button className="text-white bg-none" onClick={() => setSidebarOpen(!sidebarOpen)}>
                            <MenuIcon size={40} />
                        </Button>
                    </div>
                </div>
                <div className={`flex-1 pb-3 mt-8 md:block md:pb-0 md:mt-0 ${sidebarOpen ? 'absolute block bg-black z-30 w-2/3 h-full top-0 mt-0 px-4 py-3 overflow-hidden' : 'hidden'}`}>
                    {
                        sidebarOpen ? (
                            <div className='flex justify-between'>
                                <a href="/">
                                    <img
                                        src={logo}
                                        width={40}
                                        height={40}
                                        alt="Float UI logo"
                                        className='mb-5'
                                    />
                                </a>
                                <Button className="text-white text-3xl bg-none" onClick={() => setSidebarOpen(!sidebarOpen)}>
                                    <Cross className='text-2xl z-20' />
                                </Button>
                            </div>
                        ) : null
                    }
                    <ul className={`justify-end items-center space-y-6 md:flex md:space-x-6 md:space-y-0 ${sidebarOpen ? 'px-2 mt-2' : ''}`}>
                        {
                            navigation.map((item, idx) => {
                                return (
                                    <li key={idx} className="text-white hover:bg-gradient-to-r from-[#006CFC] to-[#00DDE8] bg-clip-text hover:text-transparent">
                                        <a href='/' className="block text-md md:text-lg font-medium">
                                            {item.title}
                                        </a>
                                    </li>
                                )
                            })
                        }
                        <div className='items-center md:flex'>
                            <Button>
                                <a href="/" className="block py-3 px-4 md:px-3 text-[15px] font-bold text-center text-white active:shadow-none shadow md:inline">
                                    GET STARTED
                                </a>
                            </Button>
                        </div>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;