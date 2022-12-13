import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Container, Section, Heading, Button } from "../Elements/Index";
import {
  EnvelopeIcon,
  DevicePhoneMobileIcon,
} from "@heroicons/react/24/outline";
import { navigate } from "gatsby";
const CallToAction = () => {
  return (
    <Section id="cta" ariaLabel="Call to action">
        <Container>
        <div className="relative flex w-full h-[50vh]">
    
        
        <div className=" bg-indigo-600 lg:bg-transparent lg:px-8">
          <div className="lg:grid lg:grid-cols-12">
            <div className="relative z-10 lg:col-start-1 lg:row-start-1 lg:col-span-4 lg:py-16 lg:bg-transparent">
              <div
                className="absolute inset-x-0 h-1/2 bg-gray-50 lg:hidden"
                aria-hidden="true"
              />
              <div className="max-w-md mx-auto px-4 sm:max-w-3xl sm:px-6 lg:max-w-none lg:p-0">
                <div className="aspect-w-10 aspect-h-6 sm:aspect-w-2 sm:aspect-h-1 lg:aspect-w-1">
                  <StaticImage
                    className="object-cover object-center rounded-3xl shadow-2xl"
                    src="../../images/logo_eventus.png"
                    alt=""
                  />
                </div>
              </div>
            </div>

            <div className="relative bg-indigo-600 lg:col-start-3 lg:row-start-1 lg:col-span-10 lg:rounded-3xl lg:grid lg:grid-cols-10 lg:items-center">
              <div
                className="hidden absolute inset-0 overflow-hidden rounded-3xl lg:block"
                aria-hidden="true"
              >
                <svg
                  className="absolute bottom-full left-full transform translate-y-1/3 -translate-x-2/3 xl:bottom-auto xl:top-0 xl:translate-y-0"
                  width={404}
                  height={384}
                  fill="none"
                  viewBox="0 0 404 384"
                  aria-hidden="true"
                >
                  <defs>
                    <pattern
                      id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
                      x={0}
                      y={0}
                      width={20}
                      height={20}
                      patternUnits="userSpaceOnUse"
                    >
                      <rect
                        x={0}
                        y={0}
                        width={4}
                        height={4}
                        className="text-indigo-500"
                        fill="currentColor"
                      />
                    </pattern>
                  </defs>
                  <rect
                    width={404}
                    height={384}
                    fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"
                  />
                </svg>
                <svg
                  className="absolute top-full transform -translate-y-1/3 -translate-x-1/3 xl:-translate-y-1/2"
                  width={404}
                  height={384}
                  fill="none"
                  viewBox="0 0 404 384"
                  aria-hidden="true"
                >
                  <defs>
                    <pattern
                      id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
                      x={0}
                      y={0}
                      width={20}
                      height={20}
                      patternUnits="userSpaceOnUse"
                    >
                      <rect
                        x={0}
                        y={0}
                        width={4}
                        height={4}
                        className="text-indigo-500"
                        fill="currentColor"
                      />
                    </pattern>
                  </defs>
                  <rect
                    width={404}
                    height={384}
                    fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"
                  />
                </svg>
              </div>
              <div className="relative max-w-md mx-auto py-12 px-4 space-y-6 sm:max-w-3xl sm:py-16 sm:px-6 lg:max-w-none lg:p-0 lg:col-start-4 lg:col-span-6">
                <Heading
                  headingLevel="h2"
                  className="text-4xl font-display font-bold text-white"
                >
                  Odakle da počnete?
                </Heading>
                <p className="text-lg text-white">
                  Obratite se Eventus timu, Vašem digitalnom marketing partneru!
                </p>
                <ul className="list-none space-y-2">
                  <li className="flex items-center gap-2">
                    <EnvelopeIcon className="w-6 h-6" />
                    <span className="text-white">info@econsulting.ba</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <DevicePhoneMobileIcon className="w-6 h-6" />
                    <span className="text-white">+38762969994</span>
                  </li>
                </ul>
                <Button
                  variant="rounded"
                  onPress={() => navigate("/#home-form", { replace: true })}
                >
                  Rezervisite Besplatne Konsultacije
                </Button>
              </div>
            </div>
          </div>
        </div>
    
      </div>
      </Container>
    </Section>
  );
};

export default CallToAction;
