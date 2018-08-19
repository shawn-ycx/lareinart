const path = require("path");
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.createPages = ({ actions, graphql }) => {
    const { createPage } = actions

    const postTemplate = path.resolve(`./src/templates/postTemplate.js`)

    return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            fields{
                slug
            }
            frontmatter {
                date
                path
                title
            }
          }
        }
      }
    }
  `).then(result => {
            if (result.errors) {
                return Promise.reject(result.errors)
            }

            result.data.allMarkdownRemark.edges.forEach(({ node }) => {
                createPage({
                    path: node.fields.slug,
                    component: postTemplate,
                    context: {
                        slug: node.fields.slug
                    }, // additional data can be passed via context
                })
            })
        })
}

exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions;

    if (node.internal.type === "MarkdownRemark") {
        const slug = createFilePath({ node, getNode, basePath: `pages` })
        createNodeField({
            node,
            name: `slug`,
            value: slug
        })
    }
}