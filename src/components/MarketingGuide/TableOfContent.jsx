import React from "react";
import { Section, Container, Heading } from "../Elements/Index";
import { SectionHeading } from "./Index";
const TableOfContent = () => {
  return (
    <Section id="table-of-contents" ariaLabel="SADRŽAJ">
      <Container>
        <SectionHeading number="1" id="table-of-contents-title">
          SADRŽAJ
        </SectionHeading>
        <Heading
          headingLevel="h2"
          className={"mt-8 font-display text-4xl font-bold tracking-tight"}
        >
          Zašto je važan?
        </Heading>
        <Heading className={"mt-4 text-lg tracking-tight max-w-prose"}>
          Prisustvo, podaci, brzina, reduciranje operativnih troškova i
          povećanje produktivnosti čine digitalni marketing suštinskom
          aktivnosti u modernom biznisu
        </Heading>
        <ol className="mt-16 space-y-10 sm:space-y-16">
          <li>
            <Heading
              headingLevel="h3"
              className={"font-display text-3xl font-bold tracking-tight"}
            >
              SADRŽAJ
            </Heading>
            <ol className="mt-8 divide-y divide-slate-300/30 rounded-2xl bg-slate-50 py-3 px-6 text-base tracking-tight sm:py-7 sm:px-8">
              <li className="flex justify-between py-3">
                <span className="font-medium text-slate-900">
                  Šta je digitalni marketing?
                </span>
                <span className="font-mono text-slate-400">
                  <span className="sr-only">on page 01</span>
                  <span aria-hidden="true">01</span>
                </span>
              </li>
              <li className="flex justify-between py-3">
                <span className="font-medium text-slate-900">
                  Search engine optimization (SEO)
                </span>
                <span className="font-mono text-slate-400">
                  <span className="sr-only">on page 02</span>
                  <span aria-hidden="true">02</span>
                </span>
              </li>
              <li className="flex justify-between py-3">
                <span className="font-medium text-slate-900">
                  Pisanje sadržaja za web
                </span>
                <span className="font-mono text-slate-400">
                  <span className="sr-only">on page 03</span>
                  <span aria-hidden="true">03</span>
                </span>
              </li>
              <li className="flex justify-between py-3">
                <span className="font-medium text-slate-900">
                  Društvene mreže
                </span>
                <span className="font-mono text-slate-400">
                  <span className="sr-only">on page 04</span>
                  <span aria-hidden="true">04</span>
                </span>
              </li>
            </ol>
          </li>
        </ol>
      </Container>
    </Section>
  );
};

export default TableOfContent;
