import React, {useRef, useEffect} from "react";
import { Button, Heading, Section, Container } from "../Elements/Index";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import {useGsapContext} from '../../hooks/useGsapContext'
const CallToAction = () => {
    gsap.registerPlugin(ScrollTrigger)
const callRef = useRef()
const ctx = useGsapContext(callRef);
useEffect(() => {
    let action = callRef.current
    ctx.add(() => {
        gsap.fromTo(action, {
      width: '20%' },
      {
        
          width: '100%', 
          scrollTrigger: {
            trigger: action,
        scrub: true,
          }
        });
      });
      return () => ctx.revert();
}, [ctx])
  return (
    <Section id="call-to-action"
    ariaLabel="Jos Radova"
    ref={callRef}
    
    className="relative flex items-center justify-center bg-gradient-to-br from-pink-500 to-purple-600 py-16 overflow-hidden">
    <Container>
      <div className="container m-auto px-6 text-center md:px-12 lg:px-20">
        <Heading
          headingLevel="h2"
          className="mb-8 text-4xl font-bold md:text-4xl"
        >
          Pogledaj sve nase radove.
        </Heading>
        <Button
          color='white'
          className="w-full mx-auto px-8"
        >
       
            Pokazi Jos
        
        </Button>
      </div>
    </Container>
    </Section>
  );
};

export default CallToAction;
