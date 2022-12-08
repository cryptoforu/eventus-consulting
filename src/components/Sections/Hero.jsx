import React from "react";
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image";
import {
  Container,
  Heading,
  GradientText,
  Prose,
  HeroIllustration,
  BgImage,
  AppScreen,
  PhoneFrame,
} from "../Elements/Index";
import { SlideImage } from "../Motion/Index";
import useFrameworksData from "../../hooks/useFrameworksData";

function AppDemo() {
  return (
    <AppScreen>
      <AppScreen.Body>
        <SlideImage />
      </AppScreen.Body>
    </AppScreen>
  );
}

const Hero = () => {
  const { frameworks } = useFrameworksData()

  return (
    <div className="overflow-hidden py-20 sm:py-32 lg:pb-32 xl:pb-36">
      <Container>
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-20">
          <div className="relative z-10 mx-auto max-w-2xl lg:col-span-7 lg:max-w-none lg:pt-6 xl:col-span-6">
            <div className="absolute bottom-full right-full -mr-72 -mb-56 opacity-50">
              <HeroIllustration />
            </div>
            <div className="relative">
              <Heading
                headingLevel="h1"
                className="text-5xl font-medium tracking-tight"
              >
                <GradientText>Eventus Consulting</GradientText>
              </Heading>
              <Heading
                headingLevel="h2"
                className={"text-5xl font-medium tracking-tight mt-2 "}
              >
                Digitalni Marketing Partner
              </Heading>

              <Prose className="mt-6 text-lg">
                <p>
                  By leveraging insights from our network of industry insiders,
                  you’ll know exactly when to buy to maximize profit, and
                  exactly when to sell to avoid painful losses.
                </p>
              </Prose>
              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-4">
                <StaticImage
                  src="../../images/google_ads.png"
                  alt="eventus google ads"
                  loading="eager"
                  placeholder="none"
                  className="w-32"
                />
                <StaticImage
                  src="../../images/fb_ads.png"
                  alt="eventus facebook advertising"
                  loading="eager"
                  placeholder="none"
                  className="w-32"
                />
                <StaticImage
                  src="../../images/insta_ads.png"
                  alt="eventus instagram advertising"
                  loading="eager"
                  placeholder="none"
                  className="w-32"
                />
              </div>
            </div>
          </div>
          <div className="relative mt-10 sm:mt-20 lg:col-span-5 lg:row-span-2 lg:mt-0 xl:col-span-6">
            <BgImage />

            <div className="-mx-4 h-[448px] px-9 [mask-image:linear-gradient(to_bottom,white_60%,transparent)] sm:mx-0 lg:absolute lg:-inset-x-10 lg:-top-10 lg:-bottom-20 lg:h-auto lg:px-0 lg:pt-10">
              <PhoneFrame className="mx-auto max-w-[366px]">
                <AppDemo />
              </PhoneFrame>
            </div>
          </div>
          <div className="relative -mt-4 lg:col-span-7 lg:mt-0 xl:col-span-6">
            <Prose className="text-center text-sm font-semibold lg:text-left">
              <p>Koristimo najmodernije alate</p>
            </Prose>
            <ul className="mx-auto mt-8 flex max-w-xl flex-wrap justify-center gap-x-4 gap-y-8 lg:mx-0 lg:justify-start">
              {frameworks.map(({node}, i) => (
                <li key={i} className='h-16 w-16 flex items-center justify-center'>
                  <GatsbyImage
                    image={getImage(node.logo)}
                    alt={node.label}
                    className="max-w-full h-auto"
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
