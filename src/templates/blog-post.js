import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'

export const query = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { path: { eq: $slug } }) {
      frontmatter {
        title
        date
        tags
      }
      html
    }
  }
`

const Blog = (props) => {
    return (
        <Layout>
            <h1>{props.data.markdownRemark.frontmatter.title}</h1>
            <p>{props.data.markdownRemark.frontmatter.date}</p>
            {props.data.markdownRemark.frontmatter.tags.map((tag)=>{
              return(
                <Link to={`/tags/${tag}/`}>
                  <span>#{tag} </span>
                </Link>
              )
            })}
            <div dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}></div>
        </Layout>
    )
}

export default Blog

