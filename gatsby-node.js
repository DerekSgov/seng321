const path = require(`path`)
const { postsPerPage } = require(`./src/utils/siteConfig`)
const { paginate } = require(`gatsby-awesome-pagination`)

/**
 * Here is the place where Gatsby creates the URLs for all the
 * posts, tags, pages and authors that we fetched from the Ghost site.
 */
exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions

    const result = await graphql(`
        {
            allPostPagesJson{
                edges {
                    node {
                        id
                        html
                        slug
                        title
                    }
                }
            }
            allCardsJson {
                edges {
                    node {
                        cards {
                            title
                            feature_image
                            excerpt
                            slug
                            id
                        }
                    }
                }
            }
        }
    `)

    // Check for any errors
    if (result.errors) {
        throw new Error(result.errors)
    }

    // Extract query results
    const allCards = result.data.allCardsJson.edges[0].node.cards
    // Load templates
    const indexTemplate = path.resolve(`./src/templates/index.js`)

    // Create pagination
    paginate({
        createPage,
        items: allCards,
        itemsPerPage: postsPerPage,
        component: indexTemplate,
        pathPrefix: ({ pageNumber }) => {
            if (pageNumber === 0) {
                return `/`
            } else {
                return `/page`
            }
        },
    })
}
