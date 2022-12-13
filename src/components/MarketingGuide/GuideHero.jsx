import React from "react";
import { StaticImage } from "gatsby-plugin-image";
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

function AppDemo() {
  return (
    <AppScreen>
      <AppScreen.Body>
        <StaticImage
          src="../../images/mockups/iphone_logo.png"
          alt="digitalni marketing vodic"
        />
      </AppScreen.Body>
    </AppScreen>
  );
}

const GuideHero = () => {
  return (
    <div className="overflow-hidden pt-[4.5rem] lg:pt-[4.75rem] ">
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
                  className={"font-bold text-5xl sm:text-6xl md:text-7xl xl:text-8xl"}
                >
                  Digitalni Marketing Vodič
                </Heading>

                <Prose className="mt-6 text-lg">
                  <p>
                    Prodjite kroz digitalni marketing vodic korak po korak i
                    naucite osnove stvari koje trebate znati prije nego sto
                    zapocnete bilo koju vrstu digitalnog marketinga. Mi smo tu
                    da vam pomognemo do kraja!
                  </p>
                </Prose>
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
          </div>
        </Container>
      </div>
    </div>
  );
};

export default GuideHero;
