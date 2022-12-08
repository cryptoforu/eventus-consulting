import * as React from "react";
import { Seo } from "../components/Seo";
import { graphql } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import {
  Container,
  Prose,
  Link,
  Heading,
  BredCumbs,
} from "../components/Elements/Index";
import {
  PostHero,
  PostContainer,
  PostTags,
  PostHeadCategory,
  PrevNext,
} from "../components/Sections/Blog/Index";
const shortcodes = {
  Container,
  Prose,
  Link,
  Heading,
  PostContainer,
  PostTags,
  PostHeadCategory,
};

export default function PostTemplate({
  pageContext,
  data: { previous, next, mdx },
  location,
  children,
}) {
  const prevPage = previous && {
    href: previous.fields.slug,
    title: previous.frontmatter.title,
  };
  const nextPage = next && {
    href: next.fields.slug,
    title: next.frontmatter.title,
  };

  const breadcumbs = [
    {
      title: mdx.frontmatter.category,
      slug: "/",
    },
    {
      title: pageContext.title,
      slug: location.pathname,
    },
  ];

  return (
    <>
      <PostHero
        title={pageContext.title}
        breadcumbs={<BredCumbs items={breadcumbs} />}
      />
      <MDXProvider components={shortcodes}>{children}</MDXProvider>
      <PrevNext previousPage={prevPage} nextPage={nextPage} />
    </>
  );
}

export const query = graphql`
  query($id: String!, $previousPostId: String, $nextPostId: String) {
    mdx(id: { eq: $id }) {
      fields {
        timeToRead {
          minutes
          text
          time
          words
        }
      }
      excerpt
      frontmatter {
        title
        category
        category_image {
          childImageSharp {
            gatsbyImageData
          }
        }
        tags
        featured_img {
          childImageSharp {
            fixed(height: 630, width: 1200) {
              src
            }
          }
        }
      }
    }
    previous: mdx(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: mdx(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`;
export const Head = ({ data }) => (
  <Seo
    title={data.mdx.frontmatter.title}
    description={data.mdx.excerpt}
    image={data.mdx.frontmatter.featured_img.childImageSharp.fixed.src}
  />
);
