import React from 'react'
import { Link, graphql } from 'gatsby'

import Pagination from '../components/Pagination/Pagination'

import Layout from '../components/layout'
import tagStyles from './tag-list.module.scss'

const TagPage = ({data, pageContext}) => {
  const { currentPage, numPages, tag } = pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? `/tags/${tag}` : `/tags/${tag}/` + (currentPage - 1).toString()
  const nextPage = `/tags/${tag}/` + (currentPage + 1).toString()


  return (
    <Layout>
      <h1>#{tag}</h1>
      <ol className={tagStyles.posts}>
        {data.allMarkdownRemark.edges.map((edge) => {
          return (
          <li className={tagStyles.post}>
            <Link to={`/blog/${edge.node.frontmatter.path}`}>
              <h2>{edge.node.frontmatter.title}</h2>
              <p>{edge.node.excerpt}</p>
              <p>{edge.node.frontmatter.date}</p>
              {edge.node.frontmatter.tags.map((tag)=>{
                return(
                  <Link to={`/tags/${tag}/`}>
                    <span>#{tag} </span>
                  </Link>
                )
              })}
            </Link>
          </li>
          )
        })}
      </ol>
        <Pagination
          numPages={numPages}
          prevPage={prevPage}
          nextPage={nextPage}
          currentPage={currentPage}
          isFirst={isFirst}
          isLast={isLast}
          range={Math.min(5, numPages)}
          path='/tags'
          tagPath={'/'+tag}
          />

    </Layout>
  )
}

export default TagPage


export const pageQuery = graphql`
query ($skip: Int!, $limit: Int!, $tag: String!){
  allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC }
    filter:{ frontmatter:{ tags: {eq: $tag} }}
    limit: $limit
    skip: $skip
  ) {
    edges {
      node {
        excerpt(pruneLength: 105)
        frontmatter {
          title
          date
          path
          tags
        }
      }
    }
  }

}
`