// Common Motion Variants

const containerVariant = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 0.6,
        delayChildren: 0.5,
      },
    }, 
  };
  
  const staggerContainerVariant = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 0.6,
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };
  
  const titleVariant = { 
    show: {
      x: 0,
      opacity: 1,
    },
    hidden: {
      x: -200,
      opacity: 0,
    },
  };
  const fromTop = {
    hidden: {
      y: -200,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
    },
  }
  const cardVariants = {
    hidden: {
      y: 300,
      opacity: 0,
    },
    show: {
      y: -20,
      opacity: 1,
    },
  };
  
  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };
  const btnClickVariant = {
    scale: 1.3,
    borderRadius: "6px",
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
      mass: 1,
    },
  };
  export {
    containerVariant,
    staggerContainerVariant,
    titleVariant,
    cardVariants,
    item,
    btnClickVariant,
    fromTop
  };
  