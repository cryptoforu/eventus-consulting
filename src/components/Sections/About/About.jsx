import React from "react";

import { motion } from "framer-motion";
import { StaticImage } from "gatsby-plugin-image";
import { Section, Container, Prose, Heading } from "../../Elements/Index";
import { cardVariants } from "../../Motion/variants";
const About = () => {
  return (
    <Section
      id="about-us"
      ariaLabel="O nama"
      className="relative flex items-center justify-center -mt-48"
    >
      <div className="absolute inset-0 w-full h-full pt-48" id="bgimg">
        <StaticImage
          src="../../../images/bg/bg-light.png"
          alt=""
          className="max-w-full h-auto"
        />
      </div>
      <Container>
        <motion.div
          variants={cardVariants}
          transition={{ type: "spring", duration: 2, ease: "easeInOut" }}
          className="p-2 border border-gray-100 dark:border-gray-700 rounded-3xl bg-white dark:bg-gray-800 shadow-2xl shadow-gray-600/10 dark:shadow-none md:mx-auto"
        >
          <div className="grid md:grid-cols-5">
            <StaticImage
              src="../../../images/desktop-table-office.webp"
              alt="o eventus-u"
              className="md:col-span-2 h-full w-full rounded-2xl object-cover"
            />
            <div className="md:col-span-3 mx-auto space-y-6 p-6 text-center sm:p-8">
              <div className="mx-auto">
                <Heading headingLevel="h2" className={"font-bold text-5xl"}>
                  Ko smo mi!?{" "}
                </Heading>
              </div>
              <Prose>
                <p>
                  Mi smo profesionalci orijentirani na rezultate koji svaki dan
                  ustaju s jednim ciljem na umu: pomoći vam da izgradite
                  najbolji brend na svijetu. Kada je u pitanju razvoj vaše
                  kompanije, nijedan posao nije premali za nas, niti bilo koji
                  izazov nije prevelik za nas.
                </p>
              </Prose>
            </div>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
};

export default About;
