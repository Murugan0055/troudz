import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { ServicesType, TestimonialType } from "./types"

// testimonial profiles
import img1 from '../assets/testimonials/img1.svg';
import img2 from '../assets/testimonials/img2.svg';
import img3 from '../assets/testimonials/img3.svg';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const services: ServicesType[] = [
  {
    id: 1,
    img: "null",
    title: "Intelligent Task Automation",
    para: "Automate tasks, improve efficiency, and support smarter decision-making, optimizing business operations with minimal human intervention.",
    link: "Learn More"
  },
  {
    id: 2,
    img: "null",
    title: "AI-Powered Assistants",
    para: "Leverage natural language processing to assist users in completing tasks, boosting productivity, and enhancing customer service interactions.",
    link: "Learn More"
  },
  {
    id: 3,
    img: "null",
    title: "AI-Enhanced Copilots",
    para: "Support human performance and decision-making in specific domains, fostering collaboration and enhancing overall efficiency.",
    link: "Learn More"
  },
  {
    id: 4,
    img: "null",
    title: "Smart Conversational Solutions",
    para: "Streamline business operations, elevate customer service, and provide personalized interactions that drive satisfaction and engagement.",
    link: "Learn More"
  },
  {
    id: 5,
    img: "null",
    title: "Predictive Insights",
    para: "Analyze historical data to predict future trends, behaviors, and outcomes, enabling businesses to make data-driven decisions with confidence.",
    link: "Learn More"
  },
  {
    id: 6,
    img: "null",
    title: "Data Intelligence & Enrichment",
    para: "Enhance business intelligence by providing valuable insights that foster competitiveness in today's data-driven marketplaces.",
    link: "Learn More"
  },
  {
    id: 7,
    img: "null",
    title: "AI-Driven Creativity and Strategy",
    para: "Empower human creativity and strategy by automating repetitive tasks, freeing up time for higher-value and impactful endeavors.",
    link: "Learn More"
  },
  {
    id: 8,
    img: "null",
    title: "Resource Management & Optimization",
    para: "Efficiently manage and allocate resources, ensuring that businesses are equipped with the right talent and tools to drive success and maximize productivity.",
    link: "Learn More"
  }
]


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
  }
]
