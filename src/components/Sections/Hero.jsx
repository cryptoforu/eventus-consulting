import React from "react";
import FrameWorksIcons from "../Content/FrameWorksIcons";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
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
import useAdsImages from "../../hooks/useAdsImages";
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

  const { light, dark } = useAdsImages();
  return (
    <div className="overflow-hidden -mt-[4.5rem] pt-[4.5rem] lg:-mt-[4.75rem] lg:pt-[4.75rem]">
      <div className="py-20 sm:py-32 lg:pb-32 xl:pb-36">
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
                    Mi smo Eventus. Dizajniramo i gradimo upečatljive web
                    stranice koje inspiriraju ljude da razmišljaju, osjećaju ili
                    rade. Specijalizirani smo za dizajn web stranica i digitalni
                    marketing, pomažući brendovima da napreduju u digitalno
                    povezanom svijetu.
                  </p>
                </Prose>
                <div className="hidden dark:flex mt-8 flex-wrap gap-x-6 gap-y-4">
                  {dark.edges.map(({ node }) => (
                    <GatsbyImage
                      key={node.name}
                      image={getImage(node.childImageSharp)}
                      alt={node.name}
                      loading="eager"
                      className="w-32"
                    />
                  ))}
                </div>
                <div className="flex mt-8 flex-wrap gap-x-6 gap-y-4 dark:hidden">
                  {light.edges.map(({ node }) => (
                    <GatsbyImage
                      key={node.name}
                      image={getImage(node.childImageSharp)}
                      alt={node.name}
                      loading="eager"
                      className="w-32"
                    />
                  ))}
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
            <FrameWorksIcons />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Hero;
