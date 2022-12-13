import React from "react";
import { Container, Section, Prose, Heading } from "../Elements/Index";
import { SectionHeading } from "./Index";
import Lottie from "lottie-react";
import seoAnimation from "../../data/seo_anim.json";
const AnimationSection = () => {
  return (
    <Section id="pisanje-blog-a" ariaLabel="Pisanje Bloga">
      <Container>
        <SectionHeading number="08" id="08">
          Koliko često bi trebali pisati blogove?
        </SectionHeading>
        <div className="flex flex-col gap-4 items-center justify-center">
          <Heading
            headingLevel="h2"
            className={"mt-8 font-display text-4xl font-bold tracking-tight"}
          >
            Koliko često bi trebali pisati blogove?
          </Heading>
          <div className="flex flex-col md:flex-row justify-between items-center mt-8">
            <Lottie
              animationData={seoAnimation}
              loop={true}
              className="max-w-full h-auto"
            />

            <Prose
              className={
                "font-display font-semibold text-slate-700 dark:text-slate-300 relative"
              }
            >
              <ul>
                <li>
                  Ključ je konzistentnost. Ako vaši posjetioci vide da niste
                  postavljali mjesecima, to neće ostaviti dobar utisak
                </li>
                <li>
                  Što ste češće u poziciji da postavljate novi sadržaj, to je
                  bolje. Ipak, potrebno je da to bude na regularnoj osnovi.
                </li>
              </ul>
            </Prose>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default AnimationSection;
