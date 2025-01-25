import { animated, SpringValue, useSprings } from "@react-spring/web";
import { useEffect, useRef, useState } from "react";

// Type for animation steps
type AnimationStep = Record<string, string | number>;

// Type for easing function
type EasingFunction = (t: number) => number;

// Props for the BlurText component
interface BlurTextProps {
  text?: string;
  delay?: number;
  className?: string;
  animateBy?: "words" | "letters";
  direction?: "top" | "bottom";
  threshold?: number;
  rootMargin?: string;
  animationFrom?: AnimationStep;
  animationTo?: AnimationStep[];
  easing?: EasingFunction | string; // Support both custom easing functions and string values
  onAnimationComplete?: () => void;
}

const BlurText: React.FC<BlurTextProps> = ({
  text = "",
  delay = 200,
  className = "",
  animateBy = "words",
  direction = "top",
  threshold = 0.1,
  rootMargin = "0px",
  animationFrom,
  animationTo,
  easing = "easeOutCubic",
  onAnimationComplete,
}) => {
  const [active, setActive] = useState(true);
  const elements = animateBy === "words" ? text.split(" ") : text.split("");
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLParagraphElement | null>(null);
  const animatedCount = useRef(0);

  // Default animations based on direction
  const defaultFrom: AnimationStep =
    direction === "top"
      ? {
        filter: "blur(10px)",
        opacity: 0,
        transform: "translate3d(0,-50px,0)",
      }
      : {
        filter: "blur(10px)",
        opacity: 0,
        transform: "translate3d(0,50px,0)",
      };

  const defaultTo: AnimationStep[] = [
    {
      filter: "blur(5px)",
      opacity: 0.5,
      transform:
        direction === "top" ? "translate3d(0,5px,0)" : "translate3d(0,-5px,0)",
    },
    { filter: "blur(0px)", opacity: 1, transform: "translate3d(0,0,0)" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(ref.current as Element);
        }
      },
      { threshold, rootMargin },
    );

    if (ref.current && active) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [ rootMargin]);

  const springs = useSprings(
    elements.length,
    elements.map((_, i) => ({
      from: animationFrom || defaultFrom,
      to: inView
        ? async (next: (arg0: AnimationStep) => any) => {
          for (const step of animationTo || defaultTo) {
            await next(step);
          }
          animatedCount.current += 1;
          if (animatedCount.current === elements.length && onAnimationComplete) {
            onAnimationComplete();
            setActive(false);
          }
        }
        : animationFrom || defaultFrom,
      delay: i * delay,
      config: typeof easing === "function" ? { easing } : { tension: 170 },
    })),
  );

  return (
    <p ref={ref} className="blur-text flex flex-wrap">
      {
        springs.map((props, index) => (
          <animated.span
            key={index}
            style={props as Record<string, SpringValue<any>>} // Casting for use with @react-spring
            className={`inline-block transition-transform will-change-[transform,filter,opacity] ${className}`}
          >
            {elements[index] === " " ? "\u00A0" : elements[index]}
            {animateBy === "words" && index < elements.length - 1 && "\u00A0"}
          </animated.span>
        ))
      }
    </p>
  );
};

export default BlurText;
