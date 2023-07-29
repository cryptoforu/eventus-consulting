import React from "react";
import { Link, Heading, Container, Button } from "../Elements/Index";
import clsx from "clsx";
import {
  Squares2X2Icon,
  ArrowSmallDownIcon,
  ArrowSmallRightIcon,
} from "@heroicons/react/24/outline";
const FirstAndLast = (props) => {
  const { first } = props;
  return (
    <Container className="relative py-16 w-full h-full flex items-center justify-center">
      <div className="isolate">
        <div className="absolute inset-x-0 top-[-1rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem] dark:opacity-50">
          <svg
            className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
            viewBox="0 0 1155 678"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
              fillOpacity=".3"
              d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
            />
            <defs>
              <linearGradient
                id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
                x1="1155.49"
                x2="-78.208"
                y1=".177"
                y2="474.645"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#9089FC" />
                <stop offset={1} stopColor="#FF80B5" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div>
          <div className="relative px-6 lg:px-8">
            <div className="mx-auto max-w-5xl pt-20 pb-32 sm:pt-48 sm:pb-40">
              <div>
                <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                  <div className="relative overflow-hidden rounded-full py-1.5 px-4 text-sm leading-6 transition-colors duration-500 ring-1 ring-gray-900/10 hover:ring-gray-900/20 dark:ring-indigo-600/80 dark:hover:ring-indigo-400">
                    {first ? (
                      <span className="text-gray-600 dark:text-slate-300">
                        Naš Portofolio.{" "}
                        <Link to="/" className="font-semibold text-indigo-600">
                          <span
                            className="absolute inset-0"
                            aria-hidden="true"
                          />
                          Procitaj više <span aria-hidden="true">&rarr;</span>
                        </Link>
                      </span>
                    ) : (
                      <span className="text-gray-600 dark:text-slate-300">
                        Ovo nije kraj.{" "}
                        <Link to="/" className="font-semibold text-indigo-600">
                          <span
                            className="absolute inset-0"
                            aria-hidden="true"
                          />
                          Nastavi da skrolaš{" "}
                          <span aria-hidden="true">&darr;</span>
                        </Link>
                      </span>
                    )}
                  </div>
                </div>
                <div>
                  <Heading
                    headingLevel="h2"
                    className={clsx(
                      "font-bold text-5xl sm:text-6xl md:text-7xl xl:text-8xl",
                      { "text-center": !first }
                    )}
                  >
                    {first ? "Neki od naših radova." : "Ovo nije sve."}
                  </Heading>
                  <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-slate-300 sm:text-center">
                    {first
                      ? "Bilo da se radi o front-end razvoju, integraciji CMS-a ili potpunoj back-end podršci - imamo rješenje za vas. Osigurat ćemo vam brzu i pametnu stranicu koja je optimizirana za vaše posjetitelje."
                      : "Brinemo o detaljima tako da vi ne morate. Kada radite sa našom agencijom, možete biti sigurni da vaša web stranica ispunjava sve standarde modernog web dizajna i razvoja."}
                  </p>
                  <div className="mt-8 flex gap-x-4 sm:justify-center">
                    {first ? (
                      <Button
                        variant="rounded"
                        color="gradPurple"
                        className="inline-flex items-center text-lg"
                      >
                        Nastavi Da Skrolaš
                        <ArrowSmallRightIcon className="ml-2 -mr-1 w-6 h-6 animate-pulse" />
                      </Button>
                    ) : (
                      <>
                        <Button
                          variant="rounded"
                          color="gray"
                          className="inline-flex items-center text-lg"
                        >
                          Pogledaj Sve Naše Radove
                          <Squares2X2Icon className="ml-2 -mr-1 w-6 h-6" />
                        </Button>
                        <Button
                          variant="rounded"
                          color="gradPurple"
                          className="inline-flex items-center text-lg"
                        >
                          Saznaj još
                          <ArrowSmallDownIcon className="ml-2 -mr-1 w-6 h-6 animate-bounce" />
                        </Button>
                      </>
                    )}
                  </div>
                </div>
                <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
                  <svg
                    className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
                    viewBox="0 0 1155 678"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
                      fillOpacity=".3"
                      d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
                    />
                    <defs>
                      <linearGradient
                        id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
                        x1="1155.49"
                        x2="-78.208"
                        y1=".177"
                        y2="474.645"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#9089FC" />
                        <stop offset={1} stopColor="#FF80B5" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default FirstAndLast;
