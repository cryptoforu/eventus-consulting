import React from "react";
import { useIsSSR } from "react-aria";
import {
  HorizontallWraper,
  Panel,
  InstaCon,
  MobileRes,
  ResponsiveWeb,
  FirstAndLast,
} from "../../HorizontalScroll/Index";

const HorizontallSection = () => {
  let isSSR = useIsSSR();

  return (
    <>
      {isSSR ? null : (
        <HorizontallWraper>
          <FirstAndLast first={true} />
          <Panel
            content={ResponsiveWeb().content}
            image={ResponsiveWeb().image}
          />
          <MobileRes />
          <InstaCon />
          <FirstAndLast />
        </HorizontallWraper>
      )}
    </>
  );
};

export default HorizontallSection;
