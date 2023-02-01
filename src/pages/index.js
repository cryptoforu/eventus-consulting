import React from "react";
import { Seo } from "../components/Seo";
import { StaticImage } from "gatsby-plugin-image";
import {
  Hero,
  Features,
  WhyUs,
  LatestBlog,
  LogoCloud,
} from "../components/Sections/Index";

import HorizontallSection from "../components/Sections/Home/HorizontallSection.jsx";
import GoogleAds from "../components/Sections/Home/GoogleAds";
import ContactWrapper from "../components/Sections/Home/ContactWrapper";
const IndexPage = () => {
  return (
    <>
      <Hero />
      <Features />
      <WhyUs />
      <HorizontallSection />
      <GoogleAds />
      <div className="relative z-10">
        <div className="absolute -inset-x-0 top-40 -bottom-32 w-full h-full">
          <div className="absolute left-full top-0 translate-y-[0%] -translate-x-[50%] sm:left-1/2 sm:-translate-y-[15%] sm:-translate-x-[20%] md:translate-x-[0%] lg:translate-x-[5%] lg:translate-y-[4%] xl:-translate-y-[8%] xl:translate-x-[15%] dark:hidden">
            <StaticImage
              src="../images/bg/background.jpg"
              className="max-w-full h-auto"
              alt=""
              width={918}
              height={1495}
            />
          </div>
          <div className="hidden absolute left-full top-0 translate-y-[0%] -translate-x-[50%] sm:left-1/2 sm:-translate-y-[15%] sm:-translate-x-[20%] md:translate-x-[0%] lg:translate-x-[5%] lg:translate-y-[4%] xl:-translate-y-[8%] xl:translate-x-[15%] dark:block">
            <StaticImage
              src="../images/bg/blur-cyan.png"
              className="max-w-full h-auto"
              alt=""
              width={918}
              height={918}
            />
          </div>
        </div>
        <LogoCloud />

        <ContactWrapper />
        <div className="relative">
          <LatestBlog />

          <div className="absolute -inset-x-0 -top-48 -bottom-14  bg-indigo-50 dark:bg-slate-900 w-full h-full">
            <div className="absolute top-0 left-0 -translate-y-[10%] -translate-x-[55%] -scale-x-100 sm:left-1/2 sm:-translate-y-[6%] sm:-translate-x-[98%] lg:-translate-x-[106%] xl:-translate-x-[122%] dark:hidden">
              <StaticImage
                src="../images/bg/background.jpg"
                className="max-w-full h-auto"
                alt=""
                width={918}
                height={1495}
              />
            </div>
            <div className="hidden absolute top-0 left-0 -translate-y-[10%] -translate-x-[55%] -scale-x-100 sm:left-1/2 sm:-translate-y-[6%] sm:-translate-x-[98%] lg:-translate-x-[106%] xl:-translate-x-[122%] dark:block">
              <StaticImage
                src="../images/bg/blur-indigo.png"
                className="max-w-full h-auto"
                alt=""
                width={918}
                height={918}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IndexPage;

export const Head = () => <Seo title="Home" />;
