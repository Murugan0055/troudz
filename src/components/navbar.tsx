import { Link } from 'react-router-dom';
import { CgMenuLeft as MenuIcon } from "react-icons/cg";
import { RxCross2 as Cross } from "react-icons/rx";


import logo from '../assets/logo.svg';
import { Button } from './ui/button';
import { useState } from 'react';

const Navbar = () => {

    const [sidebarOpen, setsSidebarOpen] = useState(false);

    const navigation = [
        { title: "Home", path: "javascript:void(0)" },
        { title: "About Us", path: "javascript:void(0)" },
        { title: "Services", path: "javascript:void(0)" },
        { title: "Testimonial", path: "javascript:void(0)" },
        { title: "Contact Us", path: "javascript:void(0)" },
    ]

    return (
        <nav className="w-full md:static md:text-sm">
            <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
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
                        <Button className="text-white text-3xl bg-none" onClick={() => setsSidebarOpen(!sidebarOpen)}>
                            <MenuIcon className='text-2xl' />
                        </Button>
                    </div>
                </div>
                <div className={`flex-1 pb-3 mt-8 md:block md:pb-0 md:mt-0 ${sidebarOpen ? 'absolute block bg-black z-10 w-full h-full top-0 mt-0 p-5' : 'hidden'}`}>
                    {
                        sidebarOpen ? (
                            <div className='flex justify-between pe-5'>
                                <a href="/">
                                    <img
                                        src={logo}
                                        width={40}
                                        height={40}
                                        alt="Float UI logo"
                                        className='mb-5'
                                    />
                                </a>
                                <Button className="text-white text-3xl bg-none" onClick={() => setsSidebarOpen(!sidebarOpen)}>
                                    <Cross className='text-2xl z-20' />
                                </Button>
                            </div>
                        ) : null
                    }
                    <ul className="justify-end items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
                        {
                            navigation.map((item, idx) => {
                                return (
                                    <li key={idx} className="text-white hover:bg-gradient-to-r from-[#006CFC] to-[#00DDE8] bg-clip-text hover:text-transparent">
                                        <a href='/' className="block text-lg font-medium">
                                            {item.title}
                                        </a>
                                    </li>
                                )
                            })
                        }
                        <div className='space-y-3 items-center gap-x-6 md:flex md:space-y-0'>
                            <Button>
                                <a href="/" className="block py-3 px-4 font-bold text-center text-white active:shadow-none shadow md:inline">
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