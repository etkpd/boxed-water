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
            <div className={indexStyles.ImageContainer1}>
              <Img className={indexStyles.Image1} fluid={data.product1.childImageSharp.fluid} ></Img>
            </div>
          </div>
        </section>
        
        <section className={indexStyles.Section2}>
          <div className={indexStyles.AllContent2}>
            <div className={indexStyles.Image2Container}>
              <div className={indexStyles.Tint}></div>
                <Img className={indexStyles.BigImage} fluid={data.product2.childImageSharp.fluid} ></Img>  
                <div className={indexStyles.Content2}>
                  <h1>Vivamus pellentesque</h1>
                  <p>Quisque blandit quam et fringilla fermentum. Pellentesque libero felis, faucibus id aliquam pretium, rhoncus vel libero.</p>
                </div>
            </div>
          </div>
        </section>

        <section className={indexStyles.Section3}>
          <div className={indexStyles.AllContent3}>
            <article>
              <figure className={indexStyles.ImageContainer3}>
                <Img fluid={data.product3.childImageSharp.fluid} ></Img>
              </figure>
              <h3 className={indexStyles.articleHeader}>Duis vitae euismod</h3>
              <p>Praesent in mi vel mi mollis tincidunt et a libero. Donec sed diam faucibus, iaculis massa et, rhoncus felis. Fusce imperdiet eleifend nunc, at eleifend dui venenatis nec. Duis porta ut felis eu luctus. </p>            
            </article>
            <article>
              <figure className={indexStyles.ImageContainer3}>
                <Img fluid={data.product4.childImageSharp.fluid} ></Img>
              </figure>
              <h3 className={indexStyles.articleHeader}>Praesent a lorem</h3>
              <p>Nunc dapibus consectetur mi quis facilisis. Phasellus facilisis imperdiet sagittis. Quisque tellus lacus, porta et nisl at, porttitor sagittis diam.</p>            
            </article>
            <article>
              <figure className={indexStyles.ImageContainer3}>
                <Img fluid={data.product5.childImageSharp.fluid} ></Img>  
              </figure>
              <h3 className={indexStyles.articleHeader}>Pellentesque ultrices</h3>
              <p>Donec lacus ligula, maximus a vulputate id, molestie vitae justo. Aliquam luctus cursus urna sit amet tempor. Phasellus eu efficitur nulla. </p>            
            </article>
          </div>
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
        fluid(maxWidth: 960) {
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
