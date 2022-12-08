import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import {
  Heading,
  Prose,
  Button,
  Container,
  Section,
} from "../../Elements/Index";

const GoogleAds = () => {
  return (
    <Section
      id="google-ads"
      ariaLabel="Google Oglasavanje"
      className="relative flex flex-col items-center justify-center"
    >
      <div className="absolute inset-0 w-full h-full">
        <StaticImage src='../../../images/bg/post_hero.png' alt='' className="max-w-full h-auto"
              layout="fullWidth"/>
      </div>
      <Container>
        <div className="grid lg:grid-cols-2 items-center gap-12 px-2 md:px-0">
          <div className="col-span-1">
            <div className="w-full relative">
              <StaticImage
                src="../../../images/google_ads.webp"
                alt="google ads oglasavanje"
                className="max-w-full h-auto"
              />
            </div>
          </div>
          <div className="relative col-span-1">
            <Heading
              headingLevel="h2"
              className="font-bold text-5xl sm:text-6xl md:text-7xl xl:text-8xl "
            >
              Više kupaca uz{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-500 via-yellow-600 to-blue-600">
              Google
              </span>
              .
            </Heading>
            <div className="mt-8 lg:mt-16 space-y-8">
              <Prose>
                <p>
                  Pokrenite Google Search Ads za nekoliko minuta. Oglašavajte se
                  kao najveći brendovi u industriji. Eventus će automatizirati
                  sve od kreiranja do optimizacije i pomoći vam da postignete
                  svoje ciljeve bolje od bilo koga.
                </p>
              </Prose>
              <div className="flex space-x-4 mt-6">
                <Button
                  variant="rounded"
                  color="gray"
                  whileTap={{ scale: 1.3, borderRadius: "6px" }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 10,
                    mass: 1,
                  }}
                >
                  Napravite Google ADS sada!
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default GoogleAds;
