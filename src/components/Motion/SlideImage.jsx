import React, {useState, useEffect} from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import restoranAs from '../../images/frames/instagram_as_frame.webp'
import resort from '../../images/frames/instagram_resort_frame.webp'
import decker from '../../images/frames/decker_frame.webp'
const variants = {
    enter: (direction) => {
      return {
        zIndex: 1,
        x: -50,
        opacity: 0
      };
    },
    center: {
    
      x: 0,
      opacity: 1
    },
    exit: (direction) => {
      return {
      
       x: 50,
        opacity: 0
      };
    }
  };
  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

const images = [restoranAs, resort, decker];
const SlideImage = () => {
    const [[page, direction], setPage] = useState([0, 0]);

 const imageIndex = wrap(0, images.length, page);
  
    const paginate = (newDirection) => {
      setPage([page + newDirection, newDirection]);
    };
    useEffect(() => {
        const nextSlide = () => {
            setPage([page + 1, 1]);
          };  
        const interval = setInterval(nextSlide, 3000);

    return () => {
      clearInterval(interval);
    };
      }, [page]);
    return (
      <>
        <AnimatePresence mode='wait' initial={false} custom={direction}>
          <motion.img
            key={page}
            src={images[imageIndex]}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", duration: 0.5, ease: 'easeInOut' },
              opacity: { duration: 0.2 }
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);
  
              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}
          />
        </AnimatePresence>
        
      </>
    );
};

export default SlideImage;