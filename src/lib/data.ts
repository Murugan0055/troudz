
// Service Icons
import services1 from '../assets/servicesImages/img1.webp';
import services2 from '../assets/servicesImages/img2.webp';
import services3 from '../assets/servicesImages/img3.webp';
import services4 from '../assets/servicesImages/img4.webp';
import services5 from '../assets/servicesImages/img5.webp';
import services6 from '../assets/servicesImages/img6.webp';
import services7 from '../assets/servicesImages/img7.webp';
import services8 from '../assets/servicesImages/img8.webp';

// testimonial profiles
import img1 from '../assets/testimonials/img1.svg';
import img2 from '../assets/testimonials/img2.svg';
import img3 from '../assets/testimonials/img3.svg';

import { ServicesType, TestimonialType } from './types';

// Icons
import { IoLocationOutline as Location } from "react-icons/io5";
import { CiPhone as Phone, CiMail as Mail } from "react-icons/ci";


//Services Info
export const services: ServicesType[] = [
    {
        id: 1,
        img: services1,
        title: "Intelligent Task Automation",
        para: "Automate tasks, improve efficiency, and support smarter decision-making, optimizing business operations with minimal human intervention.",
        link: "/services"
    },
    {
        id: 2,
        img: services2,
        title: "AI-Powered Assistants",
        para: "Leverage natural language processing to assist users in completing tasks, boosting productivity, and enhancing customer service interactions.",
        link: "/services"
    },
    {
        id: 3,
        img: services3,
        title: "AI-Enhanced Copilots",
        para: "Support human performance and decision-making in specific domains, fostering collaboration and enhancing overall efficiency.",
        link: "/services"
    },
    {
        id: 4,
        img: services4,
        title: "Smart Conversational Solutions",
        para: "Streamline business operations, elevate customer service, and provide personalized interactions that drive satisfaction and engagement.",
        link: "/services"
    },
    {
        id: 5,
        img: services5,
        title: "Predictive Insights",
        para: "Analyze historical data to predict future trends, behaviors, and outcomes, enabling businesses to make data-driven decisions with confidence.",
        link: "/services"
    },
    {
        id: 6,
        img: services6,
        title: "Data Intelligence & Enrichment",
        para: "Enhance business intelligence by providing valuable insights that foster competitiveness in today's data-driven marketplaces.",
        link: "/services"
    },
    {
        id: 7,
        img: services7,
        title: "AI-Driven Creativity and Strategy",
        para: "Empower human creativity and strategy by automating repetitive tasks, freeing up time for higher-value and impactful endeavors.",
        link: "/services"
    },
    {
        id: 8,
        img: services8,
        title: "Resource Management & Optimization",
        para: "Efficiently manage and allocate resources, ensuring that businesses are equipped with the right talent and tools to drive success and maximize productivity.",
        link: "/services"
    }
]

//Testimonials Info
export const testimonial: TestimonialType[] = [
    {
        id: 1,
        img: img1,
        name: "Marrc Benioff",
        ratings: 5,
        review: "Empower human creativity and strategy by automating repetitive tasks, allowing for a focus on innovative and impactful endeavors."
    },
    {
        id: 2,
        img: img2,
        name: "Selena Gomez",
        ratings: 5,
        review: "Empower human creativity and strategy by automating repetitive tasks, allowing for a focus on innovative and impactful endeavors."
    },
    {
        id: 3,
        img: img3,
        name: "Bruce Praison",
        ratings: 5,
        review: "Empower human creativity and strategy by automating repetitive tasks, allowing for a focus on innovative and impactful endeavors."
    },
    {
        id: 1,
        img: img1,
        name: "Benioff Marrc ",
        ratings: 5,
        review: "Empower human creativity and strategy by automating repetitive tasks, allowing for a focus on innovative and impactful endeavors."
    },
    {
        id: 2,
        img: img2,
        name: "Gomez Selena",
        ratings: 5,
        review: "Empower human creativity and strategy by automating repetitive tasks, allowing for a focus on innovative and impactful endeavors."
    },
    {
        id: 3,
        img: img3,
        name: "Praison Bruce",
        ratings: 5,
        review: "Empower human creativity and strategy by automating repetitive tasks, allowing for a focus on innovative and impactful endeavors."
    }
]

//Navigations
export const navigations = [
    { title: "Home", to: "home" },
    { title: "About Us", to: "about" },
    { title: "Services", to: "service" },
    { title: "Testimonial", to: "testimonial" },
    { title: "Contact Us", to: "contact" }
]

//Contacts
export const contactMethods = [
    {
        icon: Location,
        text: ["Visit Our Head Quaters", "Mon-Fri 10 AM to 5 PM"],
        buttonText: "Locate Us",
        contact: "Layout, 8th Block Koramangala, Bangalore- 560095",
        title: "Our office"
    },
    {
        icon: Phone,
        text: ["Call Us for Query, we are here to help you", "24x7 Customer Support"],
        buttonText: "Make a Call",
        contact: "+1 (555) 000-000",
        title: "Phone"
    },
    {
        icon: Mail,
        text: ["Contact through Mail address, get your queries clear"],
        buttonText: "Send Mail",
        contact: "support@troudz.com",
        title: "Email"
    },
]