import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image';

import Layout from '../components/layout'
import indexStyles from './index.module.scss'

const IndexPage = ({props, data}) => {
  return (
    <Layout>
      <div className={indexStyles.Page}>
      <section>
        <h1>Proin pharetra ullamcorper</h1>
        <p>Etiam et justo blandit mi ultricies sodales. Integer eget lorem ac velit interdum vestibulum. </p>
        <Link to="/store" className={indexStyles.myButton}>Order Online</Link>
        <Img fluid={data.product1.childImageSharp.fluid} ></Img>
      </section>
      
      <section>
        <h1>Vivamus pellentesque</h1>
        <p>Quisque blandit quam et fringilla fermentum. Pellentesque libero felis, faucibus id aliquam pretium, rhoncus vel libero. Praesent blandit felis et diam pretium sollicitudin sed ac turpis. Praesent molestie erat vel mi vehicula auctor suscipit eget est. Maecenas feugiat nunc a nunc congue venenatis. Etiam placerat hendrerit mauris suscipit scelerisque.</p>
        <Img fluid={data.product2.childImageSharp.fluid} ></Img>
      </section>

      <section>
        <article>
          <figure>
            <img alt='one'></img>
          </figure>
          <h3 className={indexStyles.Para}>Duis vitae euismod</h3>
          <p className={indexStyles.Para}>Praesent in mi vel mi mollis tincidunt et a libero. Donec sed diam faucibus, iaculis massa et, rhoncus felis. Fusce imperdiet eleifend nunc, at eleifend dui venenatis nec. Duis porta ut felis eu luctus. </p>            
        </article>
        <article>
          <figure>
            <img alt='one'></img>
          </figure>
          <h3 className={indexStyles.Para}>Praesent a lorem</h3>
          <p className={indexStyles.Para}>Nunc dapibus consectetur mi quis facilisis. Phasellus facilisis imperdiet sagittis. Quisque tellus lacus, porta et nisl at, porttitor sagittis diam.</p>            
        </article>
        <article>
          <figure>
            <img alt='one'></img>
          </figure>
          <h3 className={indexStyles.Para}>Pellentesque ultrices</h3>
          <p className={indexStyles.Para}>Donec lacus ligula, maximus a vulputate id, molestie vitae justo. Aliquam luctus cursus urna sit amet tempor. Phasellus eu efficitur nulla. </p>            
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

  }
`
