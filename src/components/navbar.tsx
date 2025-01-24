import { useState } from 'react';
import { CgMenuLeft as MenuIcon } from "react-icons/cg";
import { RxCross2 as Cross } from "react-icons/rx";
import { FaArrowRight as ArrowRight } from "react-icons/fa";

import logo from '../assets/logo.webp';
import { Button } from './ui/button';
import { navigations } from '@/lib/data';
import { scrollTo } from '@/lib/utils';


interface Props {
    className: string,
    activeSection: string;
}

const Navbar = ({ className, activeSection }: Props) => {

    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <nav className={`w-full absolute z-40 md:text-sm ${className}`}>
            <div className={`items-center md:flex md:px-8 px-4`}>
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
                        <button className="text-white text-2xl bg-none" onClick={() => setSidebarOpen(!sidebarOpen)}>
                            <MenuIcon />
                        </button>
                    </div>
                </div>
                <div className={`flex-1 pb-3 md:block md:pb-0 md:mt-0 ${sidebarOpen ? 'absolute block bg-black z-30 w-2/3 h-screen top-0 right-0 mt-0 px-4 py-3' : 'hidden'}`}>
                    {
                        sidebarOpen ? (
                            <div className='flex justify-end px-5 pt-2'>
                                {/* <a href="/">
                                    <img
                                        src={logo}
                                        width={40}
                                        height={40}
                                        alt="Float UI logo"
                                        className='mb-5'
                                    />
                                </a> */}
                                <button className="text-white text-xl bg-none" onClick={() => setSidebarOpen(!sidebarOpen)}>
                                    <Cross className='z-20' />
                                </button>
                            </div>
                        ) : null
                    }
                    <ul className={`justify-end items-center space-y-6 md:flex md:space-x-6 md:space-y-0 ${sidebarOpen ? 'px-2 mt-4' : ''}`}>
                        {
                            navigations.map((item, idx) => {
                                return (
                                    <li key={idx} className="flex justify-center md:justify-start">
                                        <Button onClick={() => { scrollTo(item.to); setSidebarOpen(false) }} className={`bg-gradient-to-r from-[#006CFC] to-[#00DDE8] bg-clip-text hover:text-transparent text-md md:text-lg font-medium ${activeSection == item.to ? 'text-transparent' : 'text-white'}`}>
                                            {item.title}
                                        </Button>
                                    </li>
                                )
                            })
                        }
                        <div className='items-center justify-center flex'>
                            <Button>
                                <a href="/" className="flex items-center justify-center gap-2 py-3 px-4 md:px-3 text-[15px] font-bold text-center text-white active:shadow-none shadow ">
                                    GET STARTED
                                    <ArrowRight />
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