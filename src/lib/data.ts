
// Service Icons
import service1 from '../assets/servicesImages/img1.webp';
import service2 from '../assets/servicesImages/img2.webp';
import service3 from '../assets/servicesImages/img3.webp';
import service4 from '../assets/servicesImages/img4.webp';
import service5 from '../assets/servicesImages/img5.webp';
import service6 from '../assets/servicesImages/img6.webp';
import service7 from '../assets/servicesImages/img7.webp';
import service8 from '../assets/servicesImages/img8.webp';

// testimonial profiles
import img1 from '../assets/testimonials/drev-modified.png';
import img2 from '../assets/testimonials/agamathi-modified.png';
import img3 from '../assets/testimonials/base2geeks-modified.png';

import { ServicesType, TestimonialType } from './types';

// Icons
import { IoLocationOutline as Location } from "react-icons/io5";
import { CiPhone as Phone, CiMail as Mail } from "react-icons/ci";


//service Info
export const services: ServicesType[] = [
    {
        id: 1,
        img: service1,
        title: "Intelligent Task Automation",
        para: "Automate tasks, improve efficiency, and support smarter decision-making, optimizing business operations with minimal human intervention.",
        link: "/service/intelligent-task-automation"
    },
    {
        id: 2,
        img: service2,
        title: "AI-Powered Assistants",
        para: "Leverage natural language processing to assist users in completing tasks, boosting productivity, and enhancing customer service interactions.",
        link: "/service/ai-power-assitants"
    },
    {
        id: 3,
        img: service3,
        title: "AI-Enhanced Copilots",
        para: "Support human performance and decision-making in specific domains, fostering collaboration and enhancing overall efficiency.",
        link: "/service/ai-enhanced-copilots"
    },
    {
        id: 4,
        img: service4,
        title: "Smart Conversational Solutions",
        para: "Streamline business operations, elevate customer service, and provide personalized interactions that drive satisfaction and engagement.",
        link: "/service/smart-conversational-solutions"
    },
    {
        id: 5,
        img: service5,
        title: "Predictive Insights",
        para: "Analyze historical data to predict future trends, behaviors, and outcomes, enabling businesses to make data-driven decisions with confidence.",
        link: "/service/predictive-insights"
    },
    {
        id: 6,
        img: service6,
        title: "Data Intelligence & Enrichment",
        para: "Enhance business intelligence by providing valuable insights that foster competitiveness in today's data-driven marketplaces.",
        link: "/service/data-intelligent-enrichment"
    },
    {
        id: 7,
        img: service7,
        title: "AI-Driven Creativity and Strategy",
        para: "Empower human creativity and strategy by automating repetitive tasks, freeing up time for higher-value and impactful endeavors.",
        link: "/service/ai-driven-creativity-strategy"
    },
    {
        id: 8,
        img: service8,
        title: "Resource Management & Optimization",
        para: "Efficiently manage and allocate resources, ensuring that businesses are equipped with the right talent and tools to drive success and maximize productivity.",
        link: "/service/resource-management-optimization"
    }
]

//Testimonials Info
export const testimonial: TestimonialType[] = [
    {
        id: 1,
        img: img1,
        name: "DataReveal",
        ratings: 5,
        review: "An outstanding experience! The accuracy and efficiency exceeded our expectations. Highly recommended!"
    },
    {
        id: 2,
        img: img2,
        name: "Agamathikalvi",
        ratings: 5,
        review: "Exceptional service and support! The team truly understands the needs of their users. A game-changer!"
    },
    {
        id: 3,
        img: img3,
        name: "Base2Geeks",
        ratings: 5,
        review: "Professional and reliable. Their expertise made a huge difference for us. Would definitely work with them again!"
    }
];


//Navigations
export const navigations = [
    { title: "Home", to: "home" },
    { title: "About Us", to: "about" },
    { title: "Services", to: "service" },
    { title: "Testimonial", to: "testimonial" },
    // { title: "Partnership", to: "partnership" }
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