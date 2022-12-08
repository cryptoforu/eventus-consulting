import React, {useEffect, useRef} from "react";
import { Seo } from "../components/Seo";
import { graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { BlogHero, PageCard } from "../components/Sections/Blog/Index";
import { BredCumbs, Container } from "../components/Elements/Index";
const Blog = ({ location, data }) => {
    gsap.registerPlugin(ScrollTrigger);
  const breadcumbs = [
    {
      title: "Blog",
      slug: location.pathname,
    },
  ];
  const { allMdx } = data
  const mainRef = useRef()
  const tl = useRef()
  const ref = useRef(null);
  const ScrollingRef = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
        setTimeout(() => {
            tl.current = gsap.timeline()
          .to(ref.current, {
            scrollTrigger: {
                trigger: ref.current,
                start: "top top",
  end: "bottom bottom",
  pin: ScrollingRef.current
            }
          })  
        }, 1000)
    }, mainRef)
    return () => {
        ctx.revert();
      
      };
  },[])
  return (
    <>
      <BlogHero breadcumbs={<BredCumbs items={breadcumbs} />} />
      <Container>
      
      <div className="relative mx-auto flex max-w-8xl justify-center sm:px-2 lg:px-8 xl:px-12" ref={mainRef}>
        <div className="min-w-0 max-w-2xl flex-auto px-4 py-16 lg:max-w-none lg:pr-0 lg:pl-8 xl:px-16" ref={ref}>
          <div className="space-y-8">
            {allMdx.nodes.map((node, i) => (
              <PageCard
                key={i}
                image={node.frontmatter.featured_img}
                title={node.frontmatter.title}
                description={node.frontmatter.description}
                slug={node.fields.slug}
                time={node.fields.timeToRead.minutes}
                category={node.frontmatter.category}
              />
            ))}
          </div>
        </div>
        <div className="hidden xl:sticky xl:top-[4.5rem] xl:-mr-6 xl:block xl:h-[calc(100vh-4.5rem)] xl:flex-none  xl:py-16 xl:pr-6" ref={ScrollingRef}>
          <div className="pr-8 w-96" >
            <StaticImage
              src="../images/ad_placeholder.jpg"
              alt="google ads eventus"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
      
      </Container>
    </>
  );
};
export const query = graphql`
  query BlogPageQuery {
    allMdx {
      nodes {
        fields {
          timeToRead {
            minutes
          }
          slug
        }
        frontmatter {
          category
          title
          description
          featured_img {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
`;
export default Blog;
export const Head = () => <Seo title="Blog" />;
