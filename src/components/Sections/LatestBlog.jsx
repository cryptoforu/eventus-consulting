import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import {
  BlogCard,
  Section,
  Container,
  Heading,
  Prose,
} from "../Elements/Index";
const LatestBlog = () => {
  const data = useStaticQuery(graphql`
    query LatestBlogQuery {
      allMdx(limit: 3) {
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
  `);
  const posts = data.allMdx.nodes.map((node) => node);
  return (
    <Section
      id="why-us"
      ariaLabel="Zasto Izabrati Eventus"
      className="relative z-[1] flex items-center justify-center"
    >
      <Container>
        <Prose className="mb-12 space-y-2 text-center">
          <Heading headingLevel="h2" className="text-5xl font-bold">
            Blog
          </Heading>
          <p className="max-w-prose mx-auto">
            Najnovije vijesti i tutorijali iz svijeta digitalnog marketinga i
            web razvoja. Budite u toku s najnovijom web tehnologijom i
            društvenim mrežama
          </p>
        </Prose>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <BlogCard
              key={index}
              image={post.frontmatter.featured_img}
              alt={post.frontmatter.title}
              title={post.frontmatter.title}
              description={post.frontmatter.description}
              slug={post.fields.slug}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default LatestBlog;
