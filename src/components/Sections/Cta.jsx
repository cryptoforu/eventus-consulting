import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Container, Button } from "../Elements/Index";
import { navigate } from "gatsby";
const Cta = () => {
  return (
    <section id="cta" aria-label="Kontaktirajte Nas">
      <Container>
        <div className="relative -mx-4 overflow-hidden bg-indigo-50 shadow-xl rounded-xl py-20 px-4 sm:-mx-6 sm:px-6 md:mx-0 md:px-16 xl:px-24 xl:py-36">
          <div className="absolute left-1/2 top-0 -translate-x-[10%] -translate-y-[45%] lg:-translate-x-[32%]">
            <StaticImage
              src="../../images/bg/background-newsletter.jpg"
              alt=""
              layout="fixed"
              width={919}
              height={1351}
            />
          </div>
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:px-8">
            <div>
              <p className="font-display text-4xl font-medium tracking-tighter text-blue-900 sm:text-5xl">
                Rezervisite Konsultacije
              </p>
              <p className="mt-4 text-lg tracking-tight text-blue-900">
                Rezerviste besplatne konsultacije sa nasim strucnim timom.
                
              </p>
              <p className="mt-4 text-lg tracking-tight text-blue-900">Naravno kafa je na nas racun.</p>
            </div>
            <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                <div className="inline-flex">
              <Button
                variant="rounded"
                color="gradPurple"
                className='text-2xl'
                onPress={() => navigate("/#home-form")}
                whileTap={{ scale: 1.3, borderRadius: "6px" }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  mass: 1,
                }}
              >
                Rezervisite
              </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Cta;
