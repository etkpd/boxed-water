import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import blogStyles from './blog-list.module.scss'

const BlogPage = ({data, pageContext}) => {
  const { currentPage, numPages } = pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? '/blog/' : '/blog/' + (currentPage - 1).toString()
  const nextPage = '/blog/' + (currentPage + 1).toString()

  return (
    <Layout>
      <ol className={blogStyles.posts}>
        {data.allMarkdownRemark.edges.map((edge) => {
          return (
          <li className={blogStyles.post}>
            <Link to={`/blog/${edge.node.frontmatter.path}`}>
              <h2>{edge.node.frontmatter.title}</h2>
              <p>{edge.node.excerpt}</p>
              <p>{edge.node.frontmatter.date}</p>
              {edge.node.frontmatter.tags.map((tag)=>{
                return(
                  <Link to={`/tags/${tag}`}>
                    <span>#{tag} </span>
                  </Link>
                )
              })}
            </Link>
          </li>
          )
        })}
      </ol>
      <div>
      {!isFirst && (
            <Link to={prevPage} rel="prev">
              ← Previous Page
            </Link>
      )}
      {Array.from({ length: numPages }, (_, i) => (
        <li
          key={`pagination-number${i + 1}`}
          style={{
            margin: 0,
          }}
        >
          <Link
            to={`/blog/${i === 0 ? '' : i + 1}`}
            style={{
              padding: '2px',
              textDecoration: 'none',
              color: i + 1 === currentPage ? '#ffffff' : '',
              background: i + 1 === currentPage ? '#007acc' : '',
            }}
          >
            {i + 1}
          </Link>
        </li>
      ))}
      {!isLast && (
        <Link to={nextPage} rel="next">
          Next Page →
        </Link>
      )}
      </div>

    </Layout>
  )
}

export default BlogPage


export const pageQuery = graphql`
query ($skip: Int!, $limit: Int!){
  allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC }
    limit: $limit
    skip: $skip
  ) {
    edges {
      node {
        excerpt(pruneLength: 200)
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