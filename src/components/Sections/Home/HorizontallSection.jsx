import React from "react";
import { useIsSSR } from "react-aria";
import {
  HorizontallWraper,
 InstaCon,
  MobileRes,
  WebPanel,
  FirstAndLast,
} from "../../HorizontalScroll/Index";

const HorizontallSection = () => {
  let isSSR = useIsSSR();
  return (
    <>
      {!isSSR && (
        <HorizontallWraper>
          <FirstAndLast first={true} />
         <WebPanel/>
          <MobileRes />
          <InstaCon />
          <FirstAndLast />
        </HorizontallWraper>
      )}
    </>
  );
};

export default HorizontallSection;
