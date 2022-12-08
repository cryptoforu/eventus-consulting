import React from "react";
import { motion } from "framer-motion";
import useRootReducer from "../../store/main";
const FramerPlaceHolder = () => {
  const { dispatch, pulsing, imgLoading } = useRootReducer().placeHolder;

  const imageLoaded = () => {
    dispatch({ type: "imgLoading", payload: false });
    setTimeout(() => dispatch({ type: "pulsing", payload: false }), 600);
  };

  return (
    <div className="relative flex items-center justify-center w-full h-screen">
      <div
        className={`${
          pulsing ? "animate-pulse" : ""
        } overflow-hidden rounded-lg m-4 p-8 w-full h-full max-w-none bg-black/20 object-cover`}
      >
        <motion.div
          initial={{ height: "16rem", opacity: 0 }}
          // style={{ height: imageLoading ? "6rem" : "auto" }}
          animate={{
            height: imgLoading ? "16rem" : "auto",
            opacity: imgLoading ? 0 : 1,
          }}
          transition={
            ({ height: { delay: 0, duration: 0.4 } },
            { opacity: { delay: 0.5, duration: 0.4 } })
          }
          onLoad={imageLoaded}
          width="100%"
        />
      </div>
    </div>
  );
};

export default FramerPlaceHolder;
