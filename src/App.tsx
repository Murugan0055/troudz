import { motion } from "framer-motion";
import { useEffect, useRef, useState } from 'react';
import './App.css';
import Footer from './components/footer';
import Navbar from './components/navbar';
import TestimonialCarousel from './components/testimonialsCarousel';

import logo from './assets/logo.svg';

import about from './assets/about.svg';
import banner from './assets/bannerImg.svg';
import vision from './assets/visionImg.svg';

import img1 from './assets/illustrations/img1.svg';
import img2 from './assets/illustrations/img2.svg';
import img3 from './assets/illustrations/img3.svg';
import img4 from './assets/illustrations/img4.svg';

import ServiceCard from './components/serviceCard';

import { Button } from './components/ui/button';
import { Separator } from './components/ui/separator';
import { services } from './lib/data';

import { FaArrowRight as ArrowRight, FaArrowUp as UpArrow } from "react-icons/fa";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import FadeInSection from "./components/animations/fadeInScroll";
import Shake from './components/animations/shake';
import Section from "./components/section";


function App() {
  const appRef = useRef<HTMLDivElement>(null);
  const [currScrollPosition, setCurrScrollPosition] = useState<number>(0)
  const [navStyle, setNavStyle] = useState<string>("")
  const [activeSection, setActiveSection] = useState<string>("home");
  const [isLoading, setIsLoading] = useState(false); 

  //For scroll to top at the end of the page
  const topRef = useRef<HTMLDivElement>(null);

  const scrollToTop = () => {
    topRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    // Handle page load
    const handleLoad = () => {
      setIsLoading(false);
    };


    // Handle scroll
    const handleScroll = () => {
      if (appRef.current) {
        const scrollPosition = appRef.current.scrollTop;
        setCurrScrollPosition(scrollPosition);

        if (scrollPosition > 2 && scrollPosition < 150) {
          setNavStyle("fade-out");
        } else if (scrollPosition > 150) {
          setNavStyle("fixed fade-in transition duration-700 bg-black/30 backdrop-blur-lg shadow-md");
        } else if (scrollPosition < 150 && scrollPosition < 50) {
          setNavStyle(" ");
        }
      }
    };

    const appElement = appRef.current;

    if (appElement) {
      appElement.addEventListener("scroll", handleScroll);
    }

    document.addEventListener("DOMContentLoaded", handleLoad);

    return () => {
      document.removeEventListener("DOMContentLoaded", handleLoad);

      if (appElement) {
        appElement.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);


  if (false) {
    return (
      <div className={`flex flex-col gap-2 justify-center items-center h-screen w-screen bg-black text-white ${isLoading ? 'fade-in' : null}`}>
        <motion.span
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 4.0, repeat: Infinity }}
          className="flex flex-col justify-center items-center gap-2 "
        >
          <img src={logo} alt="Troudz Logo" className='h-14 w-14' />
          <h1 className="text-xl font-medium">Troudz.ai</h1>
        </motion.span>

        {/* <TypingEffect delay={100} duration={0.6} text='Optimizing solutions just for you. Hang tight!' textStyle='text-lg font-normal text-center' /> */}
      </div>
    )
  }

  return (
    <div ref={appRef} className='app fade-in bg-black h-screen w-screen overflow-auto text-white flex flex-col justify-between'>
      <div ref={topRef}></div>
      <Navbar className={navStyle} activeSection={activeSection} />
      {/* Banner */}
      <Section id="home" setActiveSection={(id: string) => setActiveSection(id)} className="w-full h-screen text-center px-3 lg:px-20 pt-20 mt-24 md:pt-28 pb-14 flex flex-col justify-end" >
        <div className="relative ">
          <div className="absolute h-9 md:h-12 w-auto -top-20 sm:-top-24 left-8 sm:left-56 drop-shadow-[0_0_25px_rgba(255,255,255)]">
            <Shake className="w-full h-full">
              <img src={img1} alt="Illustration" className=' h-full w-full' />
            </Shake>
          </div>
          {/* <div className="h-3 w-3 rounded-full bg-[#000F2D]"></div> */}
          <div className="absolute h-14 md:h-14 w-auto -top-16 md:-top-16 right-6 md:right-56 drop-shadow-[0_0_25px_rgba(255,255,255)]">
            <Shake className="w-full h-full">
              <img src={img2} alt="Illustration" className=' h-full w-full' />
            </Shake>
          </div>
          <div className='absolute h-20 md:h-18 w-auto -bottom-36 md:-bottom-28 right-9 md:right-32 drop-shadow-[0_0_25px_rgba(255,255,255)]'>
            <Shake className="w-full h-full">
              <img src={img3} alt="Illustration" className=' h-full w-full' />
            </Shake>
          </div>
          <div className='absolute h-10 md:h-12 w-auto -bottom-2 md:-bottom-2 lg:-bottom-16 -left-1 sm:left-5 md:left-16 lg:left-24 drop-shadow-[0_0_25px_rgba(255,255,255)]' >
            <Shake className="w-full h-full">
              <img src={img4} alt="Illustration" className=' h-full w-full' />
            </Shake>
          </div>
          <h1 className='text-3xl sm:text-5xl font-bold font-syne text-center'>
            Transforming <span className='text-gradient font-syne'>Businesses</span> with <span className='text-gradient font-syne'>Generative AI</span>
          </h1>
        </div>

        <p className="mx-auto mt-4 sm:text-xl/relaxed font-syne"> Troudz delivers AI-driven solutions to accelerate innovation and business success. </p>
        <Button className="w-fit mx-auto mt-5">
          <a href="/" className="flex items-center justify-center gap-2 py-3 px-4 md:px-3 text-[15px] font-bold text-center text-white active:shadow-none shadow">
            GET STARTED
            <ArrowRight />
          </a>
        </Button>
        <img src={banner} alt="Banner Image" className='w-full sm:w-4/5 md:w-3/5 mx-auto mt-14' />
      </Section>
      {/* About Section */}
      <Section id='about' setActiveSection={(id: string) => setActiveSection(id)} className="relative py-24 px-6 lg:px-20 ">
        <div className="absolute -top-32 -left-40 z-0  h-[450px] w-[400px] bg-[#131A44] blur-3xl rounded-full opacity-65"></div>
        <h1 className="z-30 text-5xl lg:text-7xl text-center lg:text-left font-extrabold text-white opacity-30 leading-none">
          Why Troudz.ai
        </h1>

        <div className=" z-30 max-w-6xl mx-auto py-5 ">
          <h2 className="text-3xl font-semibold tracking-wide text-center lg:text-left"> ABOUT US </h2>
          <p className="mt-8 w-5/6 mx-auto text-center text-lg lg:text-xl font-bold text-gray-200">
            Welcome to <span className="text-gradient font-semibold">Troudz</span>,
            an innovative AI-based startup dedicated to transforming businesses
            through cutting-edge artificial intelligence solutions.
          </p>

          <div className="relative mt-12 flex flex-col md:flex-row items-center justify-center gap-10">
            <Separator className='absolute bottom-0 bg-gradient-to-r from-[#006CFC] to-[#00DDE8] h-0.5 rounded-full' />
            <div className="overflow-hidden rounded-md shadow-lg">
              <img
                src={about}
                alt="Illustration"
                className="w-[350px] lg:w-[400px] h-auto rounded-md"
              />
            </div>

            <div className="text-gray-300 max-w-lg space-y-6 flex flex-col h-full justify-between">
              <p className="leading-relaxed text-center md:text-left">
                Our mission is to leverage AI to drive growth, boost efficiency,
                and ignite innovation across industries. At Troudz, we deliver
                tailored AI solutions to solve challenges and create new
                opportunities in the digital era.
              </p>
              <p className="leading-relaxed text-center md:text-left">
                From optimizing operations to developing AI products and scaling
                talent, we’re your trusted partner for business success. Our
                expertise and industry knowledge ensure measurable results and
                lasting value.
              </p>
            </div>
          </div>
        </div>
        <div className="relative mt-10">
          <div className="absolute -top-40 -right-40 z-0  h-[400px] w-[500px] bg-[#131A44] blur-3xl rounded-full opacity-65"></div>
          <h1 className="text-5xl lg:text-7xl z-10 text-center lg:text-left font-extrabold text-white opacity-30 leading-none">
            What We Strive for
          </h1>

          <div className="z-30 max-w-6xl mx-auto py-5 ">
            <h2 className="text-3xl font-semibold tracking-wide text-center lg:text-left"> OUR VISION </h2>
            <p className="z-30 mt-8 w-5/6 mx-auto text-center text-lg lg:text-xl font-medium text-gray-200">
              At TroudZ, we envision a future where AI powers smarter and safer cities and industries.
              Specializing in AI-driven surveillance, our edge-optimized solutions deliver real-time analytics
              and insights, enabling cost-effective, scalable security for businesses.
            </p>
            <img
              src={vision}
              alt="Our Vision Image"
              className="w-[280px] lg:w-[300px] h-auto rounded-md my-10 mx-auto"
            />
            <p className="mt-8 w-5/6 mx-auto text-center text-lg lg:text-xl font-medium text-gray-200">
              TroudZ delivers intelligent solutions for next-gen industries and safe cities, empowering
              organizations to safeguard assets, operations, and people. We are redefining AI-powered surveillance,
              enabling businesses and communities to thrive in a dynamic world.
            </p>
          </div>
        </div>
      </Section>
      {/* Services */}
      <Section id='service' setActiveSection={(id: string) => setActiveSection(id)} className="relative py-24 px-6 lg:px-20 ">
        <div className="absolute -bottom-32 -right-32 z-0  h-[400px] w-[500px] bg-[#131A44] blur-3xl rounded-full opacity-65"></div>
        <div className="absolute -top-40 -left-40 z-0  h-[400px] w-[400px] bg-[#131A44] blur-3xl rounded-full opacity-65"></div>
        <h1 className="text-5xl lg:text-7xl z-10 text-center lg:text-left font-extrabold text-white opacity-30 leading-none">
          What We Do
        </h1>
        <div className=" z-10 max-w-6xl mx-auto py-5 ">
          <div className="flex justify-between">
            <h2 className="text-3xl font-semibold tracking-wide text-center w-full lg:text-left"> OUR SERVICES </h2>
            {/* <Button className='font-bold hidden lg:flex'>DISCOVER MORE</Button> */}
          </div>
          <div className='flex flex-wrap mt-5 md:p-7 justify-center items-stretch'>
            {
              services.map((e, i) => {
                return (
                  <div className={`z-20 p-1.5 w-full sm:w-1/2 ${[4, 5].includes(e.id) ? ' lg:w-2/5 ' : ' lg:w-1/3 '}`}>
                    <ServiceCard key={i} title={e.title} img={e.img} id={e.id} para={e.para} link={e.link} />
                  </div>
                )
              })
            }
          </div>
        </div>
        {/* <div className="flex justify-center lg:hidden mt-2">
          <Button className='font-bold z-30'>DISCOVER MORE</Button>
        </div> */}
      </Section>
      {/* Testimonials */}
      <Section id='testimonial' setActiveSection={(id: string) => setActiveSection(id)} className='relative flex flex-col gap-10 px-6 lg:px-20 py-24 md:py-32 min-h-fit overflow-hidden'>
        <div className="absolute -bottom-40 -left-40 z-0  h-[400px] w-[400px] bg-[#131A44] blur-3xl rounded-full opacity-65"></div>
        <div className="absolute -bottom-40 -right-40 z-0  h-[400px] w-[400px] bg-[#131A44] blur-3xl rounded-full opacity-65"></div>
        <h1 className="text-5xl lg:text-7xl z-10 text-center lg:text-left font-extrabold text-white opacity-30 leading-none">
          Our Clients Says
        </h1>
        <h2 className="text-3xl font-semibold tracking-wide text-center w-full lg:text-left"> TESTIMONIALS </h2>
        <TestimonialCarousel />
      </Section>
      <>
        {
          currScrollPosition > 600 ? (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button onClick={() => scrollToTop()} className='fixed bottom-10 right-10 bg-none z-30 bg-black border border-gray-700 w-fit py-6 self-end'>
                    <UpArrow />
                  </Button>
                </TooltipTrigger>
                <TooltipContent className='bg-gray-700 border-none text-white'>
                  <p>Back to Top</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ) : null
        }
      </>
      <Section id='contact' setActiveSection={(id: string) => setActiveSection(id)} className="">
        <Footer />
      </Section>
    </div >
  )
}

export default App
