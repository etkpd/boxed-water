import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import blogStyles from './blog-list.module.scss'
import Pagination from '../components/Pagination/Pagination'

const BlogPage = ({data, pageContext}) => {
  const { currentPage, numPages } = pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? '/blog/' : '/blog/' + (currentPage - 1).toString()
  const nextPage = '/blog/' + (currentPage + 1).toString()

  return (
    <Layout>
      <div className={blogStyles.BlogPage}>
        <ol className={blogStyles.posts}>
          {data.allMarkdownRemark.edges.map((edge, index, tags) => {
            return (
              <li className={blogStyles.post}>
                <Link to={`/blog/${edge.node.frontmatter.path}`}>
                  <h2>{edge.node.frontmatter.title}</h2>
                  <p>{edge.node.excerpt}</p>
                </Link>
                <div className={blogStyles.DateAndTags}>
                  <p className={blogStyles.date}>{edge.node.frontmatter.date}</p>
                  <div className={blogStyles.tags}>
                    {edge.node.frontmatter.tags.map((tag)=>{
                      return(
                        <Link to={`/tags/${tag}/`}>
                          <span>#{tag} </span>
                        </Link>
                      )
                    })}
                  </div>
                </div>
                {(index+1!==tags.length)?<hr className={blogStyles.horizontalLine}></hr>:null}
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
          range={5}
          path='/blog/'
          />
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