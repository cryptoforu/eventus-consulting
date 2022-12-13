import React from "react";
import { Seo } from "../components/Seo";
import {
  Hero,
  Features,
  WhyUs,
  LatestBlog,
  LogoCloud
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
      <GoogleAds/>
      <LogoCloud />
      <ContactWrapper/>
      <LatestBlog/>
      </>
  );
};

export default IndexPage;

export const Head = () => <Seo title="Home" />;
