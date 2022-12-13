import React from "react";
import { graphql } from "gatsby";
import { Seo } from "../components/Seo";
import { StaticImage } from "gatsby-plugin-image";
import {
  GuideWrapper,
  GuideSections,
  GuideHero,
  TableOfContent,
  CardsSection,
  AnimationSection,
  CallToAction
} from "../components/MarketingGuide/Index";
import clsx from "clsx";
const MarketingGuidePage = ({ data }) => {
  const { allMarkdownRemark } = data;
const { second } = data;

  return (
    <>
      <GuideWrapper>
        <GuideHero />
        <TableOfContent />

        {allMarkdownRemark.edges.map(({ node }, i) => (
          <GuideSections
          id={i}
            key={i}
            number={node.frontmatter.number}
            sectionHeading={node.frontmatter.title}
          >
            <div
              className="grid grid-flow-dense lg:grid-cols-2 gap-4 relative z-10"
              dangerouslySetInnerHTML={{ __html: node.html }}
            />
            <div className="absolute -inset-x-0 -top-40 -bottom-32 w-full h-full">
              <div className="absolute left-full top-0 translate-y-[0%] -translate-x-[50%] sm:left-1/2 sm:-translate-y-[15%] sm:-translate-x-[20%] md:translate-x-[0%] lg:translate-x-[5%] lg:translate-y-[4%] xl:-translate-y-[8%] xl:translate-x-[15%]">
                <StaticImage
                  src="../images/bg/background.jpg"
                  className="max-w-full h-auto"
                  alt=""
                />
              </div>
            </div>
          </GuideSections>
        ))}
        <CardsSection />
        <AnimationSection/>
        {second.edges.map(({ node }) => (
          <GuideSections
            key={node.id}
            number={node.frontmatter.number}
            notVisible={node.frontmatter.number === 10 || node.frontmatter.number === 12}
            sectionHeading={node.frontmatter.title}
          >
            <div
              className={clsx("relative z-10", node.frontmatter.number === 10 || node.frontmatter.number === 12 ? "flex flex-col items-center justify-center gap-4" : "grid grid-flow-dense lg:grid-cols-2 gap-4" )}
              dangerouslySetInnerHTML={{ __html: node.html }}
            />
            <div className="absolute -inset-x-0 -top-40 -bottom-32 w-full h-full">
              <div className="absolute left-full top-0 translate-y-[0%] -translate-x-[50%] sm:left-1/2 sm:-translate-y-[15%] sm:-translate-x-[20%] md:translate-x-[0%] lg:translate-x-[5%] lg:translate-y-[4%] xl:-translate-y-[8%] xl:translate-x-[15%]">
                <StaticImage
                  src="../images/bg/background.jpg"
                  className="max-w-full h-auto"
                  alt=""
                />
              </div>
            </div>
          </GuideSections>
        ))}
        <CallToAction/>
        <div />
      </GuideWrapper>
    </>
  );
};

export default MarketingGuidePage;
export const query = graphql`
  query MarketingGuideQuery {
    allMarkdownRemark(
      filter: { frontmatter: { category: { eq: "marketing-guide" } } }
      sort: { frontmatter: { number: ASC } }
      limit: 6
    ) {
      edges {
        node {
          html
          frontmatter {
            title
            number
            category
          }
        }
      }
    }
    second: allMarkdownRemark(
      filter: { frontmatter: { category: { eq: "marketing-guide" } } }
      sort: { frontmatter: { number: ASC } }
      limit: 6
      skip: 6
    ) {
      edges {
        node {
            id
          html
          frontmatter {
            title
            number
            category
          }
        }
      }
    }
  }
`;
export const Head = () => <Seo title="Marketing Vodic" />;
