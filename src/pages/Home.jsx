import { useEffect, useRef } from "react";
import { animate } from "animejs";

import Hero from "../components/Hero";
import About from "./About";
import Content from "./Content";
import Services from "./Services";
import Contact from "./Contact";

export default function Home() {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const contentRef = useRef(null);
  const servicesRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    animate(heroRef.current, {
      opacity: [0, 1],
      translateY: [40, 0],
      duration: 800,
      easing: "easeOutExpo",
    });

    animate(aboutRef.current, {
      opacity: [0, 1],
      translateY: [40, 0],
      delay: 200,
      duration: 800,
      easing: "easeOutExpo",
    });

    animate(contentRef.current, {
      opacity: [0, 1],
      translateY: [40, 0],
      delay: 400,
      duration: 800,
      easing: "easeOutExpo",
    });

    animate(servicesRef.current, {
      opacity: [0, 1],
      translateY: [40, 0],
      delay: 600,
      duration: 800,
      easing: "easeOutExpo",
    });

    animate(contactRef.current, {
      opacity: [0, 1],
      translateY: [40, 0],
      delay: 800,
      duration: 800,
      easing: "easeOutExpo",
    });
  }, []);

  return (
    <>
      <div ref={heroRef}>
        <Hero />
      </div>

      <div ref={aboutRef}>
        <About />
      </div>

      <div ref={contentRef}>
        <Content />
      </div>

      <div ref={servicesRef}>
        <Services />
      </div>

      <div ref={contactRef}>
        <Contact />
      </div>
    </>
  );
}
