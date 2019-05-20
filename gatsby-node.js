const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
	const blogTemplate = path.resolve(`src/templates/blog.js`)
	
  // Query for markdown nodes to use in creating pages.
  // You can query for whatever data you want to create pages for e.g.
  // products, portfolio items, landing pages, etc.
  // Variables can be added as the second function parameter
  return graphql(`
	query {
		allMarkdownRemark{
			edges {
				node {
					frontmatter {
						path
						title
						tags
					}
				}
			}
		}
	}
  `).then(result => {
    if (result.errors) {
      throw result.errors
    }

		const posts = result.data.allMarkdownRemark.edges;

		posts.forEach(({ node }, index) => {
			const path = node.frontmatter.path
				createPage({
						component: blogTemplate,
						path: `/blog/${path}`,
						context: {
								slug: path
						}
				});
		}); 
   
  })
}