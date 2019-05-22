import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image';

import Layout from '../components/layout'
import indexStyles from './index.module.scss'

const IndexPage = ({props, data}) => {
  return (
    <Layout>
      <div className={indexStyles.Page}>
      <section className={indexStyles.Section1}>
        <div className={indexStyles.AllContent1}>
          <div className={indexStyles.Content1}>
            <h1>Proin pharetra ullamcorper</h1>
            <p>Etiam et justo blandit mi ultricies sodales. Integer eget lorem ac velit interdum vestibulum. </p>
            <Link to="/store" className={indexStyles.myButton}>Order Online</Link>
          </div>
          <div className={indexStyles.Image1}>
            <Img fluid={data.product1.childImageSharp.fluid} ></Img>
          </div>
        </div>
      </section>
      
      <section>
        <h1>Vivamus pellentesque</h1>
        <p>Quisque blandit quam et fringilla fermentum. Pellentesque libero felis, faucibus id aliquam pretium, rhoncus vel libero. Praesent blandit felis et diam pretium sollicitudin sed ac turpis. Praesent molestie erat vel mi vehicula auctor suscipit eget est. Maecenas feugiat nunc a nunc congue venenatis. Etiam placerat hendrerit mauris suscipit scelerisque.</p>
        <Img fluid={data.product2.childImageSharp.fluid} ></Img>
      </section>

      <section>
        <article>
          <figure>
          <Img fluid={data.product3.childImageSharp.fluid} ></Img>
          </figure>
          <h3>Duis vitae euismod</h3>
          <p>Praesent in mi vel mi mollis tincidunt et a libero. Donec sed diam faucibus, iaculis massa et, rhoncus felis. Fusce imperdiet eleifend nunc, at eleifend dui venenatis nec. Duis porta ut felis eu luctus. </p>            
        </article>
        <article>
          <figure>
        <Img fluid={data.product4.childImageSharp.fluid} ></Img>
         
          </figure>
          <h3>Praesent a lorem</h3>
          <p>Nunc dapibus consectetur mi quis facilisis. Phasellus facilisis imperdiet sagittis. Quisque tellus lacus, porta et nisl at, porttitor sagittis diam.</p>            
        </article>
        <article>
          <figure>
        <Img fluid={data.product5.childImageSharp.fluid} ></Img>
            
          </figure>
          <h3>Pellentesque ultrices</h3>
          <p>Donec lacus ligula, maximus a vulputate id, molestie vitae justo. Aliquam luctus cursus urna sit amet tempor. Phasellus eu efficitur nulla. </p>            
        </article>
      </section>
      </div>
    </Layout>
    )
}

export default IndexPage

export const dataQuery = graphql`
  query {
    product1: file(sourceInstanceName: { eq: "images" }
      name: { eq: "boxed-water-is-better-1463990-unsplash" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    product2: file(sourceInstanceName: { eq: "images" }
      name: { eq: "boxed-water-is-better-1464080-unsplash" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    product3: file(sourceInstanceName: { eq: "images" }
      name: { eq: "boxed-water-is-better-1464048-unsplash" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    product4: file(sourceInstanceName: { eq: "images" }
      name: { eq: "boxed-water-is-better-1464025-unsplash" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    product5: file(sourceInstanceName: { eq: "images" }
      name: { eq: "boxed-water-is-better-1464053-unsplash" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
