import { motion } from "framer-motion";
import { useEffect, useRef, useState, Suspense, lazy, Key } from 'react';

// Lazy loading components
const Footer = lazy(() => import('../components/footer'));
const Navbar = lazy(() => import('../components/navbar'));
const TestimonialCarousels = lazy(() => import('../components/testimonialsCarousel'));
const ServiceCard = lazy(() => import('../components/serviceCard'));
const Section = lazy(() => import("../components/section"));

// Lazy loading assets
import logo from '../assets/logo.webp';
import about from '../assets/about.webp';
import banner from '../assets/bannerImg.webp';
import vision from '../assets/visionImg.webp';
import img1 from '../assets/illustrations/img1.webp';
import img2 from '../assets/illustrations/img2.webp';
import img3 from '../assets/illustrations/img3.webp';
import img4 from '../assets/illustrations/img4.webp';

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Button } from '../components/ui/button';
import { Separator } from '../components/ui/separator';
import { services } from '../lib/data';

import { FaArrowRight as ArrowRight, FaArrowUp as UpArrow } from "react-icons/fa";
import { Link } from "react-router-dom";

// Lazy loading animations
const FadeInOnScroll = lazy(() => import("../components/animations/fadeIn"));
const Shake = lazy(() => import('../components/animations/shake'));
const FlipText = lazy(() => import("../components/animations/wordFlip"));
const Magnet = lazy(() => import("../components/animations/reactbits/Magnet"));
const BlurText = lazy(() => import("../components/animations/reactbits/BlurText"));

function Home() {
  const [textLoaded, setTextLoaded] = useState(false);
  const appRef = useRef<HTMLDivElement>(null);
  const [currScrollPosition, setCurrScrollPosition] = useState<number>(0);
  const [navStyle, setNavStyle] = useState<string>("");
  const [activeSection, setActiveSection] = useState<string>("home");

  const topRef = useRef<HTMLDivElement>(null);

  const scrollToTop = () => {
    topRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {

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

    return () => {
      if (appElement) {
        appElement.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <div ref={appRef} className='app bg-dark h-screen w-screen overflow-y-auto overflow-x-hidden text-white flex flex-col justify-between'>
      <Suspense
        fallback={
          <div className='flex flex-col gap-2 justify-center items-center h-screen w-screen bg-dark text-white'>
            <motion.span
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 4.0, repeat: Infinity }}
              className="flex flex-col justify-center items-center gap-2 "
            >
              <img src={logo} alt="Troudz Logo" className='h-14 w-14' />
              <h1 className="text-xl font-medium">Troudz.ai</h1>
            </motion.span>

          </div>
        }
      >
        <div ref={topRef}></div>
        <Navbar className={navStyle} activeSection={activeSection} />
        {/* Banner */}
        <Section id="home" setActiveSection={(id: string) => setActiveSection(id)} className="w-full min-h-scren h-fit text-center px-3 pt-36 md:pt-32 lg:px-10 flex flex-col justify-end" >
          <div className="relative ">
            <>
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
              <div className='absolute h-20 md:h-18 w-auto -bottom-40 md:-bottom-28 right-0 md:right-32 drop-shadow-[0_0_25px_rgba(255,255,255)]'>
                <Shake className="w-full h-full">
                  <img src={img3} alt="Illustration" className=' h-full w-full' />
                </Shake>
              </div>
              <div className='absolute h-10 md:h-12 w-auto -bottom-2 md:-bottom-2 lg:-bottom-16 -left-1 sm:left-5 md:left-16 lg:left-24 drop-shadow-[0_0_25px_rgba(255,255,255)]' >
                <Shake className="w-full h-full">
                  <img src={img4} alt="Illustration" className=' h-full w-full' />
                </Shake>
              </div>
            </>

            <div className='flex gap-4 flex-wrap justify-center items-center font-bold'>
              {
                textLoaded ? (
                  <h1 className="text-3xl sm:text-5xl font-syne">Transforming</h1>
                ) : (
                  <BlurText
                    text="Transforming"
                    delay={100}
                    animateBy="letters"
                    direction="top"
                    onAnimationComplete={() => null}
                    className="text-3xl sm:text-5xl font-syne"
                  />
                )
              }
              {
                textLoaded ? (
                  <FlipText words={["Businesses", "Enterprises"]} duration={5000} className='sm:w-[190px] text-3xl sm:text-5xl md:w-[300px] font-syne text-gradient' />
                ) : (
                  <BlurText
                    text="Businesses"
                    delay={200}
                    animateBy="letters"
                    direction="top"
                    onAnimationComplete={() => null}
                    className="text-3xl sm:text-5xl font-syne syne text-gradient"
                  />
                )
              }
              {
                textLoaded ? (
                  <h1 className="text-3xl sm:text-5xl font-syne">with</h1>
                ) : (
                  <BlurText
                    text="with"
                    delay={250}
                    animateBy="letters"
                    direction="top"
                    onAnimationComplete={() => setTextLoaded(true)}
                    className="text-3xl sm:text-5xl font-syne"
                  />
                )
              }
              {
                textLoaded ? (
                  <FlipText words={["Generative AI", "Our Troudz.ai"]} duration={3000} className='sm:w-[400px] text-3xl sm:text-5xl text-gradient text-center lg:text-left font-syne' />
                ) : (
                  <BlurText
                    text="Generative AI"
                    delay={150}
                    animateBy="letters"
                    direction="top"
                    onAnimationComplete={(() => null)}
                    className="text-3xl sm:text-5xl font-syne text-gradient"
                  />
                )
              }
            </div>
          </div>

          <p className="mx-auto mt-4 sm:text-xl/relaxed font-syne"> Troudz delivers AI-driven solutions to accelerate innovation and business success. </p>

          <Button className="mt-4 w-fit mx-auto">
              <Link to="/get-started" className="flex items-center justify-center gap-2 px-4 py-0.5 text-[15px] bg-none w-fit font-bold text-center text-white">
                GET STARTED
                <ArrowRight />
              </Link>
            </Button>

          {/* <Magnet padding={100} disabled={false} magnetStrength={10}> </Magnet> */}

          <FadeInOnScroll direction="bottom" delay={0.3} duration={0.4}>
            <img src={banner} alt="Banner Image" className='w-full sm:w-4/5 md:w-3/5 mx-auto mt-14' />
          </FadeInOnScroll>
        </Section>
        {/* About Section */}
        <Section id='about' setActiveSection={(id: string) => setActiveSection(id)} className="relative px-6 pt-24 lg:px-20 ">
          <div className="z-10">
            <div className="absolute -top-32 -left-36 z-0  h-[450px] w-[450px] bg-[#131A44] blur-3xl rounded-full opacity-50"></div>
            <FadeInOnScroll direction="left">
              <h1 className="text-5xl lg:text-7xl z-10 text-center lg:text-left font-extrabold text-white opacity-30 leading-none">
                Why Troudz.ai
              </h1>
            </FadeInOnScroll>

            <div className=" z-30 max-w-6xl mx-auto py-5 ">
              <FadeInOnScroll direction="left" delay={0.3} duration={0.4} className="text-3xl font-semibold tracking-wide text-center lg:text-left z-10"> ABOUT US </FadeInOnScroll>
              <FadeInOnScroll direction="bottom" delay={0.3} duration={0.4}>
                <p className="mt-8 z-10 w-5/6 mx-auto text-center text-lg lg:text-xl font-bold text-gray-200">
                  Welcome to <span className="text-gradient font-semibold">Troudz</span>,
                  an innovative AI-based startup dedicated to transforming businesses
                  through cutting-edge artificial intelligence solutions.
                </p>
              </FadeInOnScroll>

              <div className="relative mt-12 flex flex-col md:flex-row items-center justify-center gap-10">
                <Separator className='absolute bottom-0 bg-gradient-to-r from-[#006CFC] to-[#00DDE8] h-0.5 rounded-full z-10' />
                <FadeInOnScroll direction="left" duration={0.5} delay={0.4}>
                  <div className="overflow-hidden rounded-md shadow-lg">
                    <img
                      src={about}
                      alt="Illustration"
                      className="w-[350px] lg:w-[400px] h-auto rounded-md"
                    />
                  </div>
                </FadeInOnScroll>

                <div className="text-gray-300 max-w-lg space-y-6 flex flex-col h-full justify-between">
                  <FadeInOnScroll direction="bottom" delay={0.3} duration={0.4}>
                    <p className="leading-relaxed text-center md:text-left">
                      Our mission is to leverage AI to drive growth, boost efficiency,
                      and ignite innovation across industries. At Troudz, we deliver
                      tailored AI solutions to solve challenges and create new
                      opportunities in the digital era.
                    </p>
                  </FadeInOnScroll>
                  <FadeInOnScroll direction="bottom" delay={0.3} duration={0.4}>
                    <p className="leading-relaxed text-center md:text-left">
                      From optimizing operations to developing AI products and scaling
                      talent, we’re your trusted partner for business success. Our
                      expertise and industry knowledge ensure measurable results and
                      lasting value.
                    </p>
                  </FadeInOnScroll>
                </div>
              </div>
            </div>
          </div>
          <div className="relative mt-10">
            <div className="absolute -top-40 -right-72 z-0  h-[400px] w-[500px] bg-[#131A44] blur-3xl rounded-full opacity-65"></div>
            <FadeInOnScroll direction="left">
              <h1 className="text-5xl lg:text-7xl z-10 text-center lg:text-left font-extrabold text-white opacity-30 leading-none">
                What We Strive for
              </h1>
            </FadeInOnScroll>


            <div className="z-30 max-w-6xl mx-auto py-5 ">
              <FadeInOnScroll direction="left" delay={0.3} duration={0.4} className="text-3xl font-semibold tracking-wide text-center lg:text-left"> OUR VISION </FadeInOnScroll>
              <FadeInOnScroll direction="left" delay={0.3} duration={0.4}>
                <p className="z-30 mt-8 w-5/6 mx-auto text-center text-lg lg:text-xl font-medium text-gray-200">
                  At TroudZ, we envision a future where AI powers smarter and safer cities and industries.
                  Specializing in AI-driven surveillance, our edge-optimized solutions deliver real-time analytics
                  and insights, enabling cost-effective, scalable security for businesses.
                </p>
              </FadeInOnScroll>
              <FadeInOnScroll direction="bottom" delay={0.3} duration={0.4}>
                <img
                  src={vision}
                  alt="Our Vision Image"
                  className="w-[280px] lg:w-[300px] h-auto rounded-md my-10 mx-auto"
                />
              </FadeInOnScroll>
              <FadeInOnScroll direction="right" delay={0.3} duration={0.4}>
                <p className="mt-8 w-5/6 mx-auto text-center text-lg lg:text-xl font-medium text-gray-200">
                  TroudZ delivers intelligent solutions for next-gen industries and safe cities, empowering
                  organizations to safeguard assets, operations, and people. We are redefining AI-powered surveillance,
                  enabling businesses and communities to thrive in a dynamic world.
                </p>
              </FadeInOnScroll>
            </div>
          </div>
        </Section >
        {/* Services */}
        < Section id='service' setActiveSection={(id: string) => setActiveSection(id)} className="relative pt-24 px-6 lg:px-20 " >
          <div className="absolute -bottom-32 -right-48 z-0  h-[400px] w-[500px] bg-[#131A44] blur-3xl rounded-full opacity-50"></div>
          <div className="absolute -top-40 -left-40 z-0  h-[400px] w-[450px] bg-[#131A44] blur-3xl rounded-full opacity-50"></div>
          <FadeInOnScroll direction="left">
            <h1 className="text-5xl lg:text-7xl z-10 text-center lg:text-left font-extrabold text-white opacity-30 leading-none">
              What We Do
            </h1>
          </FadeInOnScroll>
          <div className=" z-10 max-w-6xl mx-auto py-5 ">
            <div className="flex justify-between">
              <FadeInOnScroll direction="left" delay={0.3} duration={0.4} className="w-full">
                <h2 className="text-3xl font-semibold tracking-wide text-center  w-full lg:text-left"> OUR SERVICES </h2>
              </FadeInOnScroll>
              {/* <Button className='font-bold hidden lg:flex'>DISCOVER MORE</Button> */}
            </div>
            <div className='flex flex-wrap mt-5 md:p-7 justify-center items-stretch'>
              {
                services.map((e: { id: number; title: string; img: string; para: string; link: string; }, i: Key | null | undefined) => {
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
        </ Section >
        {/* Testimonials */}
        <Section id='testimonial' setActiveSection={(id: string) => setActiveSection(id)} className='relative flex flex-col gap-10 px-6 pt-24 lg:px-20 min-h-fit overflow-hidden' >
          <div className="absolute -bottom-40 -left-40 z-0  h-[400px] w-[400px] bg-[#131A44] blur-3xl rounded-full opacity-65"></div>
          <div className="absolute -bottom-40 -right-40 z-0  h-[400px] w-[400px] bg-[#131A44] blur-3xl rounded-full opacity-65"></div>
          <FadeInOnScroll direction="left">
            <h1 className="text-5xl lg:text-7xl z-10 text-center lg:text-left font-extrabold text-white opacity-30 leading-none">
              Our Clients Says
            </h1>
          </FadeInOnScroll>
          <FadeInOnScroll direction="left" delay={0.3} duration={0.4}>
            <h2 className="text-3xl font-semibold tracking-wide text-center w-full lg:text-left"> TESTIMONIALS </h2>
          </FadeInOnScroll>
          <TestimonialCarousels />
        </Section >
        <>
          {
            currScrollPosition > 600 ? (
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button onClick={() => scrollToTop()} className='fixed bottom-10 right-10 bg-none z-30 bg-black border border-gray-700 w-fit py-4 self-end'>
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
        <Footer />
      </Suspense >
    </div >
  )
}

export default Home
