import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { StaticImage } from "gatsby-plugin-image";
import {
  Container,
  Section,
  Heading,
  GradientText,
  MacbookFrame,
  SocialCard,
} from "../Elements/Index";
import { staggerContainerVariant, fromTop, titleVariant } from "../Motion/variants";
const OurWorks = () => {

  const { ref: headRef, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  gsap.registerPlugin(ScrollTrigger);
  const mainRef = useRef()
  const tl = useRef()
  const ref = useRef(null);
  const ScrollingRef = useRef(null);
  const appRef = useRef();

  useEffect(() => {
    let element = ref.current;
    let scrollingElement = ScrollingRef.current;
    let appElement = appRef.current;
 
    const ctx = gsap.context(() => {
      setTimeout(() => { 
tl.current = gsap.timeline()
   .to(element, {
        scrollTrigger: {
          trigger: element,
          start: "top top",
          end: "bottom top",
          scroller: "#content", // locomotive element
          scrub: true,
          pin: true,
          markers: true,
          
        },
      })
   .fromTo(
        scrollingElement,
        {
          y: "0",
        },

        {
          y: "-100%",
          scrollTrigger: {
            trigger: scrollingElement,
            start: "top center-=100px",
            end: "bottom top",
            scroller: "#content", // locomotive element
            scrub: true,
            

            //   markers:true,
          },
          // we have to increase scrolling height of this section same as the scrolling element width
        }
      )
      .fromTo(
        appElement,
        {
          y: "0",
        },

        {
          y: "-100%",
          scrollTrigger: {
            trigger: appElement,
            start: "top center-=100px",
            end: "bottom top",
            scroller: "#content", // locomotive element
            scrub: true,
          

            //   markers:true,
          },
          // we have to increase scrolling height of this section same as the scrolling element width
        }
      );
      ScrollTrigger.refresh();
    },2000)
      },ref)
   
    return () => {
      ctx.revert();
    
    };
  }, []);

  return (
    <Section
      id="our-works"
      ariaLabel="Nasi Radovi"
      className="relative flex items-center justify-center"
      ref={mainRef}
    >
      <motion.div
        initial="hidden"
        animate={inView && "show"}
        variants={staggerContainerVariant}
        ref={headRef}
      >
        <div className="absolute inset-0 w-full h-full" id="bgimg">
          <StaticImage
            src="../../images/bg/background.jpg"
            alt=""
            className="max-w-full h-auto block dark:hidden"
            layout="fullWidth"
          />
          <StaticImage
            src="../../images/bg/blur-indigo.png"
            alt=""
            className="hidden dark:block max-w-full h-auto"
            layout="fullWidth"
          />
        </div>
        <Container ref={ref}>
          <div className=" text-center">
            <motion.span
            className="flex flex-col items-center justify-center"
              variants={fromTop}
              transition={{ type: "spring", duration: 2, ease: "easeIn" }}
            >
              <GradientText className={"text-xl font-semibold"}>
                Naš Portofolio
              </GradientText>
              <Heading headingLevel="h2" className={"text-5xl"}>
                Neki od naših <GradientText>radova.</GradientText>
              </Heading>
            </motion.span>
          </div>

          <div className="mt-8 md:h-screen">
            <div className="grid md:grid-cols-12 items-center gap-8">
              <div className="md:col-span-7">
              <motion.span className="flex flex-col items-center justify-center" variants={titleVariant} transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  mass: 1,
                }}>
                <Heading
                  headingLevel="h3"
                  className={"text-3xl text-center"} 
                  
                >
                  Responsivni Web dizajn.
                </Heading>
              
                </motion.span>
                <MacbookFrame className={"mx-auto w-full mt-4 drop-shadow-2xl"}>
                  <div ref={ScrollingRef}>
                    <StaticImage
                      src="../../images/frames/elizat_hero_macbook.png"
                      alt=""
                      className=""
                    />

                    <StaticImage
                      src="../../images/frames/decker_hero_macbook.png"
                      alt=""
                      className=""
                    />

                    <StaticImage
                      src="../../images/frames/panorama_hero_macbook.png"
                      alt=""
                      className=""
                    />

                    <StaticImage
                      src="../../images/frames/prime_hero_mackbook.png"
                      alt=""
                      className=""
                    />
                  </div>
                </MacbookFrame>
                
              </div>
              <div className="relative mx-auto w-full max-w-[366px] md:max-w-lg  md:col-span-5">
                <SocialCard className={"relative"}>
                  <SocialCard.Header messageCount="4" />
                  <SocialCard.StoryHead>
                    <SocialCard.Story
                      storyImage={
                        <StaticImage
                          src="../../images/instagram/insta_user_avatar2.webp"
                          className="w-16 rounded-full"
                          alt="instagram oglasavanje"
                        />
                      }
                      storyText="Elisa"
                    />
                    <SocialCard.Story
                      storyImage={
                        <StaticImage
                          src="../../images/instagram/insta_user_avatar3.webp"
                          className="w-16 rounded-full"
                          alt="instagram oglasavanje"
                        />
                      }
                      storyText="web_dev"
                    />
                    <SocialCard.Story
                      storyImage={
                        <StaticImage
                          src="../../images/instagram/insta_user_avatar4.webp"
                          className="w-16 rounded-full"
                          alt="instagram oglasavanje"
                        />
                      }
                      storyText="hentoni_doe"
                    />
                    <SocialCard.Story
                      storyImage={
                        <StaticImage
                          src="../../images/instagram/insta_user_avatar5.webp"
                          className="w-16 rounded-full"
                          alt="instagram oglasavanje"
                        />
                      }
                      storyText="business"
                    />
                  </SocialCard.StoryHead>
                  <SocialCard.PostContainer>
                    <div ref={appRef}>
                      <SocialCard.Post
                        postImage={
                          <StaticImage
                            src="../../images/instagram/insta1.webp"
                            className="h-full w-full rounded-3xl"
                            alt="instagram oglasi"
                          />
                        }
                        likeCount="126"
                        commentCount="40"
                      />
                      <SocialCard.Post
                        postImage={
                          <StaticImage
                            src="../../images/instagram/insta2.webp"
                            className="h-full w-full rounded-3xl"
                            alt="instagram oglasi"
                          />
                        }
                        likeCount="1000"
                        commentCount="100"
                      />
                      <SocialCard.Post
                        postImage={
                          <StaticImage
                            src="../../images/instagram/insta3.webp"
                            className="h-full w-full rounded-3xl"
                            alt="instagram oglasi"
                          />
                        }
                        likeCount="345"
                        commentCount="21"
                      />
                      <SocialCard.Post
                        postImage={
                          <StaticImage
                            src="../../images/instagram/insta4.webp"
                            className="h-full w-full rounded-3xl"
                            alt="instagram oglasi"
                          />
                        }
                        likeCount="312"
                        commentCount="23"
                      />
                    </div>
                  </SocialCard.PostContainer>
                  <SocialCard.Navigation />
                </SocialCard>
              </div>
            </div>
          </div>
        </Container>
      </motion.div>
    </Section>
  );
};

export default OurWorks;
