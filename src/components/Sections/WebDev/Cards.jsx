import React from "react";
import { motion } from "framer-motion";
import { Section, Container, PrismCard } from "../../Elements/Index";
import { cardVariants } from "../../Motion/variants";
const Cards = () => {
  return (
    <Section
      id="web-dev"
      ariaLabel="Web Razvoj"
      className="relative flex items-center justify-center -mt-48"
    >
      <Container>
        <motion.div
          variants={cardVariants}
          transition={{ type: "spring", duration: 2, ease: "easeInOut" }}
          className='grid grid-cols-1 sm:grid-cols-3 gap-4'
        >
          <PrismCard />
          <PrismCard variant='php' />
          <PrismCard  variant='css'/>
        </motion.div>
      </Container>
    </Section>
  );
};

export default Cards;
