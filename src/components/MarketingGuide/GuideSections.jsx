import * as React from "react";
import { Container, Section, Prose, Heading } from "../Elements/Index";
import { SectionHeading } from "./Index";
import clsx from "clsx";
const GuideSections = ({ id, children, number, sectionHeading, notVisible }) => {
  return (
    <Section id={id} ariaLabel={sectionHeading}>
  <Container>
   <SectionHeading number={number} id={id}>
          {sectionHeading}
        </SectionHeading>
        <Heading
          headingLevel="h2"
          className={"mt-8 font-display text-2xl md:text-4xl font-bold tracking-tight"}
        >
          {notVisible ? null : sectionHeading}
        </Heading>
        
      <Prose className={clsx('font-display font-semibold text-slate-700 dark:text-slate-300 relative prose-h2:text-2xl md:prose-h2:text-5xl')}>{children}</Prose> 
  
      </Container>
   </Section>
  );
};

export default GuideSections;
