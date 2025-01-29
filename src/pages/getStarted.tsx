import { useState } from 'react';

import FadeInOnScroll from '@/components/animations/fadeIn';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { contactMethods } from '@/lib/data';
import { Link } from 'react-router-dom';
import contactImg from '../assets/illustrations/contact.svg';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from '@/components/ui/separator';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, } from "@/components/ui/accordion"
import { IoMdArrowRoundBack as ArrowLeft } from "react-icons/io";


function GetStarted() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        country: "US",
        message: "",
    });

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log("Form Data:", formData);
    };

    return (
        <div className='relative app bg-dark  text-white h-screen overflow-y-auto overflow-x-hidden flex flex-col p-3 md:p-10 md:py-5'>
            <div className="absolute -top-40 -left-40 z-0  h-[400px] w-[400px] bg-[#131A44] blur-3xl rounded-full opacity-65"></div>
            <div className="absolute -bottom-40 -right-40 z-0  h-[400px] w-[400px] bg-[#131A44] blur-3xl rounded-full opacity-65"></div>


            <div className="flex py-5">
                <Link to='/' className='z-10'>
                    <ArrowLeft className='text-white text-4xl cursor-pointer' />
                </Link>
            </div>

            <main className="px-4 md:px-8 py-28">
                <div className="flex flex-col justify-center sm:items-center space-y-3 ">
                    <FadeInOnScroll direction="left" className=''>
                        <h1 className="text-5xl lg:text-7xl z-10 font-extrabold text-white opacity-30 leading-none">
                            Get Started
                        </h1>
                    </FadeInOnScroll>
                    <FadeInOnScroll direction="left" delay={0.3} duration={0.4}>
                        <p className="text-3xl font-semibold sm:text-4xl">
                            Let us know how we can help
                        </p>
                    </FadeInOnScroll>
                    <FadeInOnScroll direction="bottom" delay={0.3} duration={0.2}>
                        <p className='text-lg'>
                            We’re here to help and answer any question you might have, We look forward to hearing from you .
                        </p>
                    </FadeInOnScroll>


                </div>
                <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-stretch gap-5">
                    {
                        contactMethods.map((item, idx) => {
                            return (
                                <FadeInOnScroll direction="left" delay={idx / 10} duration={0.2}>
                                    <Card key={idx} className="z-10 flex gap-3 justify-between text-white border-none flex-col p-4 bg-primary">
                                        <CardHeader className='p-2 w-fit bg-secondary rounded-full rounded-bl-none'>
                                            <CardTitle className="flex items-center gap-2">
                                                <item.icon className='text-gray-300 text-3xl' />
                                            </CardTitle>
                                        </CardHeader>
                                        <CardContent className="p-0">
                                            <p className="text-xl font-medium mb-1">{item.title}</p>
                                            <>
                                                {
                                                    item.text.map((e, i) => (
                                                        <p className="text-md" key={i}>{e}</p>
                                                    ))
                                                }
                                            </>
                                            <Button className='p-[1px] mt-3 rounded-md'>
                                                <Link to={`call:${item.contact}`} className=' bg-gray-900 px-5 py-1.5 hover:bg-gradient-primary rounded-md text-sm'>{item.buttonText}</Link>
                                            </Button>
                                        </CardContent>
                                    </Card>
                                </FadeInOnScroll>

                            )
                        })
                    }
                </div>
            </main>
            <div className="flex flex-col justify-center items-center">
                <FadeInOnScroll direction="bottom" delay={0} duration={0.2}>
                    <p className="text-4xl font-bold mb-2">Message Us Here</p>
                </FadeInOnScroll>

                <div className="grid md grid-cols-1 md:grid-cols-2 mt-5">

                    <FadeInOnScroll direction="left" delay={0.3} duration={0.5} className="p-10 h-full hidden md:flex">
                        <img src={contactImg} alt="" />
                    </FadeInOnScroll>
                    <form onSubmit={handleSubmit} className="space-y-5 w-full md:p-10">
                        <div className="flex flex-col items-center gap-y-5 gap-x-6 [&>*]:w-full sm:flex-row">
                            <FadeInOnScroll direction="right" delay={0.1} duration={0.3}>
                                <Label className="font-medium">First Name</Label>
                                <Input
                                    type="text"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    placeholder="Enter Your First Name Here"
                                    required
                                    className="w-full mt-2 px-3 py-2  text-gray-500  placeholder:text-zinc-700 tracking-wider bg-transparent border border-gray-700 shadow-sm rounded-md"
                                />
                            </FadeInOnScroll>

                            <FadeInOnScroll direction="right" delay={0.3} duration={0.3}>
                                <Label className="font-medium">Last Name</Label>
                                <Input
                                    type="text"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    placeholder="Enter Your Last Name Here"
                                    required
                                    className="w-full mt-2 px-3 py-2  text-gray-500  placeholder:text-zinc-700 tracking-wider bg-transparent border border-gray-700 shadow-sm rounded-md"
                                />
                            </FadeInOnScroll>
                        </div>
                        <FadeInOnScroll direction="right" delay={0.4} duration={0.3}>
                            <Label className="font-medium">Email</Label>
                            <Input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Enter Your Email Id Here"
                                required
                                className="w-full mt-2 px-3 py-2  text-gray-500  placeholder:text-zinc-700 tracking-wider bg-transparent border border-gray-700 shadow-sm rounded-md"
                            />
                        </FadeInOnScroll>
                        <FadeInOnScroll direction="right" delay={0.5} duration={0.3}>
                            <Label className="font-medium">Phone Number</Label>
                            <div className="relative mt-2">
                                <div className="absolute inset-y-0 left-3 my-auto h-6 flex items-center border-r border-gray-700 pr-2">
                                    <Select >
                                        <SelectTrigger className="w-[60px] bg-transparent border-none">
                                            <SelectValue placeholder="US" />
                                        </SelectTrigger>
                                        <SelectContent onChange={handleChange} className="text-sm text-gray-400 bg-dark rounded-md h-full">
                                            <SelectItem value="US">US</SelectItem>
                                            <SelectItem value="IND">IND</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <Input
                                    type="text"
                                    name="phoneNumber"
                                    placeholder="+1 (555) 000-000"
                                    value={formData.phoneNumber}
                                    onChange={handleChange}
                                    required
                                    className="w-full pl-24  pr-3 py-2 bg-transparent border placeholder:text-zinc-700 tracking-wider border-gray-700 shadow-sm rounded-md"
                                />
                            </div>
                        </FadeInOnScroll>

                        <FadeInOnScroll direction="right" delay={0.6} duration={0.3}>
                            <Label className="font-medium">Message</Label>
                            <Textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Leave Your Message Here"
                                required
                                className="w-full mt-2 h-36 px-3 py-2 resize-none bg-transparent placeholder:text-zinc-700 tracking-wider border border-gray-700 shadow-sm rounded-md"
                            ></Textarea>
                        </FadeInOnScroll>
                        <FadeInOnScroll direction="right" delay={0.7} duration={0.3}>
                            <Button
                                type="submit"
                                className="w-full px-4 py-3 text-white font-medium rounded-md duration-150"
                            >
                                Submit
                            </Button>
                        </FadeInOnScroll>

                    </form>
                </div>
            </div >
            <div className="w-5/6 md:w-3/5 mx-auto pt-8 md:py-5">
                <p className="text-2xl font-medium">Some Common FAQ's</p>
                <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                        <AccordionTrigger>Is it accessible?</AccordionTrigger>
                        <AccordionContent>
                            Yes. It adheres to the WAI-ARIA design pattern.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>Is it styled?</AccordionTrigger>
                        <AccordionContent>
                            Yes. It comes with default styles that matches the other
                            components&apos; aesthetic.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger>Is it animated?</AccordionTrigger>
                        <AccordionContent>
                            Yes. It's animated by default, but you can disable it if you prefer.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
            <div className="p-10 md:p-10 bg-primary/70 rounded-2xl my-10 flex flex-col items-center justify-center gap-2">
                <h3 className="text-3xl text-white font-bold text-center"><p className="text-4xl mb-4">📩 </p> Subscribe To Newsletter </h3>
                <p className="md:text-xl font-syne font-medium tracking-wide text-center text-gray-300">Stay in the loop! Subscribe now for updates, insights, and exclusive content straight to your inbox!</p>
                <div className="mt-3 flex flex-col md:flex-row items-center justify-center gap-4 w-full lg:w-1/2">
                    <Input
                        type="email"
                        placeholder="Enter your email"
                        className="text-gray-500 p-6 border rounded-full w-full"
                    />
                    <Button className="px-5 py-3 rounded-full text-white border-none ">
                        SUBSCRIBE
                    </Button>
                </div>
            </div>
            <Separator className='bg-gradient-to-r from-[#006CFC] to-[#00DDE8] mb-6 h-0.5 rounded-full max-w-full' />
            <div className="flex justify-between">
                <p className="text-sm text-gray-400">&copy; 2025 Troudz AI Labs</p>
                <p className="text-sm text-gray-400"> All rights reserved.</p>
            </div>
        </div >
    )
}


export default GetStarted;