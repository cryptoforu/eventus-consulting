import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Section, Prose, Heading, GradientText } from "../../Elements/Index";
import { HomeForm } from "../../Forms/Index";
import { Accordion } from "../../Elements/Index";
import { useFaqReducer } from "../../../store/main";
import { staggerContainerVariant } from "../../Motion/variants";
const itemVariant = {
  hidden: { opacity: 0, y: '200%' },
  show: {
    opacity: 1,
    y: 0,
  },
};

const ContactWrapper = () => {
  const { active, faqItems, dispatch } = useFaqReducer();
  const refHeading = useRef(null);
  const isInView = useInView(refHeading, { once: true, amount: 0.5 });
  return (
    <Section
      id="home-form"
      ariaLabel="Kontaktirajte Nas"
      className="relative flex flex-col min-h-full justify-center md:px-12"
    >
      <motion.div
        initial="hidden"
        animate={isInView ? "show" : ""}
        variants={staggerContainerVariant}
        className="w-full mx-auto max-w-5xl py-16 text-center space-y-4"
        ref={refHeading}
      >
        <motion.span className="flex flex-col mb-4"
          variants={itemVariant}
          transition={{ ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 }}
        >
          <GradientText className={"text-3xl"}>
            Kafa je na nas racun
          </GradientText>
          .
          <Heading
            headingLevel="h2"
            className={"font-bold text-5xl sm:text-6xl md:text-7xl xl:text-8xl"}
          >
            Rezervisite Besplatne Konsultacije
          </Heading>
        </motion.span>
      </motion.div>
      <div className="grid lg:grid-cols-2 items-center gap-12 px-2 md:px-0">
        <div className="col-span-1">
          <div className="relative w-full">
            <div className="rounded-3xl border border-gray-100 bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 backdrop-blur-2xl">
              <div className="p-8 py-12 sm:p-16">
                <Heading
                  headingLevel="h3"
                  className={
                    "mb-8 text-2xl font-bold text-gray-800 dark:text-white"
                  }
                >
                  Kontaktirajte Nas
                </Heading>
                <HomeForm />
              </div>
            </div>
          </div>
        </div>
        <div className="relative col-span-1">
          <div className="w-full flex flex-col">
            <div className="w-full p-4">
              <Heading
                headingLevel="h3"
                className={
                  "mb-8 text-2xl font-bold text-gray-800 dark:text-white"
                }
              >
                Cesto Postavljana Pitanja
              </Heading>
            </div>
            {faqItems &&
              faqItems.map((item, i) => (
                <Accordion
                  key={i}
                  i={item.id}
                  expanded={active}
                  setExpanded={() =>
                    dispatch({ type: "SET_FAQ", payload: item.id })
                  }
                  buttonLabel={item.label}
                >
                  <Prose>
                    <p>{item.text}</p>
                  </Prose>
                </Accordion>
              ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ContactWrapper;
