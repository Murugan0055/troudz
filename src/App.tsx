import './App.css';
import Footer from './components/footer';
import Navbar from './components/navbar';

import banner from './assets/bannerImg.svg';
import about from './assets/about.svg';
import vision from './assets/visionImg.svg';

import img1 from './assets/illustrations/img1.svg';
import img2 from './assets/illustrations/img2.svg';
import img3 from './assets/illustrations/img3.svg';
import img4 from './assets/illustrations/img4.svg';
import { Separator } from './components/ui/separator';
import { Button } from './components/ui/button';
import { services, testimonial } from './lib/utils';
import ServiceCard from './components/serviceCard';
import TestimonialCard from './components/testimonialCard';
function App() {
  return (
    <div className='app bg-black h-screen w-screen overflow-auto text-white flex flex-col justify-between'>
      <Navbar />
      {/* Banner */}
      <div className="mx-auto w-full text-center pt-32 pb-7 px-6 lg:px-20">
        <h1 className="relative text-3xl sm:text-5xl  font-bold font-syne text-center">
          <img src={img1} alt="Illustration" className='absolute h-12 w-auto -top-24 left-56 drop-shadow-[0_0_25px_rgba(255,255,255)]' />
          <img src={img2} alt="Illustration" className='absolute h-14 w-auto -top-16 right-56 drop-shadow-[0_0_25px_rgba(255,255,255)]' />
          <img src={img3} alt="Illustration" className='absolute h-18 w-auto -bottom-28 right-32 drop-shadow-[0_0_25px_rgba(255,255,255)]' />
          <img src={img4} alt="Illustration" className='absolute h-14 w-auto -bottom-36 left-32 drop-shadow-[0_0_25px_rgba(255,255,255)]' />
          Transforming <span className='text-gradient font-syne'>Businesses</span> with <span className='text-gradient font-syne'>Generative AI</span>
        </h1>

        <p className="mx-auto mt-4 sm:text-xl/relaxed"> Troudz delivers AI-driven solutions to accelerate innovation and business success. </p>

        <img src={banner} alt="Banner Image" className='w-full sm:w-4/5 md:w-3/5 mx-auto mt-16' />
      </div>
      {/* About Section */}
      <div className="relative text-white py-16 px-6 lg:px-20 min-h-fit overflow-hidden">
        <div className="absolute -top-32 -left-40 z-0  h-[450px] w-[400px] bg-[#131A44] blur-3xl rounded-full opacity-65"></div>
        <h1 className="z-10 text-5xl lg:text-7xl text-center lg:text-left font-extrabold text-white opacity-10 leading-none">
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
      </div>
      {/* Vision Section */}
      <div className="relative py-16 px-6 lg:px-20 min-h-fit overflow-hidden">
        <div className="absolute -top-40 -right-40 z-0  h-[400px] w-[400px] bg-[#131A44] blur-3xl rounded-full opacity-65"></div>
        <h1 className="text-5xl lg:text-7xl z-10 text-center lg:text-left font-extrabold text-white opacity-10 leading-none">
          What We Strive for
        </h1>

        <div className=" z-10 max-w-6xl mx-auto py-5 ">
          <h2 className="text-3xl font-semibold tracking-wide text-center lg:text-left"> OUR VISION </h2>
          <p className="mt-8 w-5/6 mx-auto text-center text-lg lg:text-xl font-medium text-gray-200">
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
      <div className="relative py-16 px-6 lg:px-20">
        <div className="absolute -top-40 -left-40 z-0  h-[400px] w-[400px] bg-[#131A44] blur-3xl rounded-full opacity-65"></div>
        <h1 className="text-5xl lg:text-7xl z-10 text-center lg:text-left font-extrabold text-white opacity-10 leading-none">
          What We Do
        </h1>
        <div className=" z-10 max-w-6xl mx-auto py-5 ">
          <div className="flex justify-between">
            <h2 className="text-3xl font-semibold tracking-wide text-center lg:text-left"> OUR VISION </h2>
            <Button className='font-bold'>DISCOVER MORE</Button>
          </div>
          <div className='grid grid-cols-3 gap-3 mt-5'>
            {
              services.map((e) => {
                return (
                  <ServiceCard title={e.title} img={e.img} id={e.id} para={e.para} link={e.link} />
                )
              })
            }
          </div>
        </div>
      </div>
      <div className='relative flex flex-col gap-10 items-center my-5 px-6 lg:px-20'>
        <div className="absolute -top-40 -right-40 z-0  h-[400px] w-[400px] bg-[#131A44] blur-3xl rounded-full opacity-65"></div>
        <div className="absolute -bottom-40 -left-40 z-0  h-[400px] w-[400px] bg-[#131A44] blur-3xl rounded-full opacity-65"></div>
        <div className="absolute -bottom-40 -right-40 z-0  h-[400px] w-[400px] bg-[#131A44] blur-3xl rounded-full opacity-65"></div>
        <h2 className="text-3xl font-semibold tracking-wide text-center lg:text-left"> TESTIMONIALS </h2>
        <h2 className="text-5xl font-semibold tracking-wide text-center lg:text-left"> What Our Clients Says </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 space-x-1">
          {
            testimonial.map((e) => {
              return (
                <TestimonialCard name={e.name} ratings={e.ratings} review={e.review} img={e.img} id={e.id} />
              )
            })
          }
        </div>
      </div>


      <Footer />
    </div>
  )
}

export default App
