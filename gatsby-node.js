const path = require('path')

exports.createPages = ({ graphql, actions }) => {
	const { createPage } = actions
	const blogListTemplate = path.resolve('src/templates/blog-list.js')
	const blogPostTemplate = path.resolve(`src/templates/blog-post.js`)
	const tagListTemplate = path.resolve('src/templates/tag-list.js')
	
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

		const posts = result.data.allMarkdownRemark.edges
		const postsPerPage = 5
		const numPages = Math.ceil(posts.length / postsPerPage)
		
		Array.from({ length: numPages }).forEach((_, i) => {
			createPage({
				path: i === 0 ? `/blog` : `/blog/${i + 1}`,
				component: blogListTemplate,
				context: {
					limit: postsPerPage,
					skip: i * postsPerPage,
					numPages: numPages,
					currentPage: i + 1,
				},
			})
		})

		posts.forEach(({ node }, i) => {
			const path = node.frontmatter.path
				createPage({
						component: blogPostTemplate,
						path: `/blog/${path}`,
						context: {
								slug: path
						}
				});
		}); 



		const tagMap = new Map()

		posts.forEach(({node}, i) => {
			let tags = node.frontmatter.tags
			console.log(tags)
			tags.forEach(tag => {
				tagMap.set(tag, tagMap.get(tag) ? tagMap.get(tag) + 1: 1)
			})
		})
		
		tagMap.forEach((numberOfPost, tag, map)=>{
			const numberOfPagesForTag = Math.ceil(numberOfPost / postsPerPage)
			Array.from({ length: numberOfPagesForTag }).forEach((_, i)=>{
				createPage({
					path: i === 0 ? `/tags/${tag}` : `/tags/${tag}/${i + 1}`,
					component: tagListTemplate,
					context: {
						limit: postsPerPage,
						skip: i * postsPerPage,
						numPages: numberOfPagesForTag,
						currentPage: i + 1,
						tag: tag,
					},
				})
			})
		})
   
  })
}