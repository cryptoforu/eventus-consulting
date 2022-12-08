import React from "react";
import { useIsSSR } from "react-aria";
import ParallaxWrapper from "../../Layers/ParallaxWrapper";
import GoogleAds from "./GoogleAds";


const ParallaxSections = () => {
  let isSSR = useIsSSR();
  return isSSR ? null : (
    <ParallaxWrapper>
      <GoogleAds />
    </ParallaxWrapper>
  );
};

export default ParallaxSections;
