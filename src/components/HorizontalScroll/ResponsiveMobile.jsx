import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Heading, Prose, Button, Container } from "../Elements/Index";

export function MobileRes() {
  return (
    <Container className="mt-20">
      <div className="grid grid-cols-12 items-center gap-8">
        <div className="relative z-10 order-2 col-span-4 space-y-6">
          <div className="relative py-16">
            <Heading
              headingLevel="h2"
              className="font-bold text-5xl sm:text-6xl md:text-7xl xl:text-8xl "
            >
              Vaša web stranica na svim{" "}
              <span className="text-cyan-800 dark:text-cyan-400">
                uređajima
              </span>
              .
            </Heading>
            <Prose className={"max-w-md"}>
              <p className="mt-4 text-lg">
                Optimiziramo vašu web stranicu na svakom koraku, osiguravajući
                da kod, sadržaj i sve dizajnerske odluke imaju pozitivan utjecaj
                na performanse, korisničko iskustvo i SEO.
              </p>
            </Prose>
            <div className="mt-6">
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
                Pogledaj Sve
              </Button>
            </div>
          </div>
        </div>
        <div className="relative order-1 col-span-3">
          <div className="z-10 mx-auto w-full max-w-[300px]">
            <StaticImage
              className="max-w-full h-auto"
              src="../../images/mockups/iPhone_decker.webp"
              alt="Responsivni mobile"
            />
          </div>
        </div>
        <div className="relative order-3 col-span-5">
          <div className="z-10 mx-auto w-full">
            <StaticImage
              className="max-w-full h-auto"
              src="../../images/mockups/prime_mac.webp"
              alt="Responsivni mobile"
            />
          </div>
        </div>
      </div>
    </Container>
  );
}
