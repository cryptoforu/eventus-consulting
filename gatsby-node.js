const path = require("path")
const readingTime = require(`reading-time`)
const postTemplate = path.resolve(`./src/templates/posts.jsx`)
const { createFilePath } = require(`gatsby-source-filesystem`)
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const result = await graphql(`
    query {
      allMdx {
        nodes {
          id
          fields {
           slug
           }
          frontmatter {
            title
          }
          internal {
            contentFilePath
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild('Error loading MDX result', result.errors)
  }

  // Create blog post pages.
  const posts = result.data.allMdx.nodes

 if(posts.length > 0) {
    posts.forEach((post, index) => {
        const previousPostId = index === 0 ? null : posts[index - 1].id
        const nextPostId = index === posts.length - 1 ? null : posts[index + 1].id
    createPage({
      path: post.fields.slug,
      component: `${postTemplate}?__contentFilePath=${post.internal.contentFilePath}`,
      context: { 
        id: post.id, 
        title: post.frontmatter.title,
        previousPostId,
        nextPostId, 
      },
    })
  })
}
}

exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions
    if (node.internal.type === `Mdx`) {
      const slug = createFilePath({ node, getNode, basePath: "src/content/" })
      createNodeField({
        node,
        name: `slug`,
        value: `/blog${slug}`,
      }),
      createNodeField({
        node,
        name: `timeToRead`,
        value: readingTime(node.body)
      })
    }
}