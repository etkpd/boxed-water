import React from 'react'

import Layout from "../components/layout"
import OrderForm from '../components/Forms/OrderForm/OrderForm'

class StorePage extends React.Component{

  render(){
    let data = this.props.data;
    let pricingData =  data.pricing.edges.map((edge)=>{
      return {...edge.node}
    })
    let images= [data.small.childImageSharp.fluid, data.medium.childImageSharp.fluid, data.large.childImageSharp.fluid]
    return(
      <Layout>
        <OrderForm
          productImages={images}
          pricingData={pricingData}
        />
      </Layout>
    )
  }
}

export default StorePage


export const dataQuery = graphql`
  query {
    pricing: allPricingJson {
      edges {
        node{
          size,
          pack_sizes{
            size,
            price,
            subAndSave
          }
        }
      }
  }

    small: file(sourceInstanceName: { eq: "images" }
      name: { eq: "250ml-box" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    medium: file(sourceInstanceName: { eq: "images" }
      name: { eq: "500ml-box" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    large: file(sourceInstanceName: { eq: "images" }
      name: { eq: "1liter-box" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }

  }
`