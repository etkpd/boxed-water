import React from 'react'
// eslint-disable-next-line
import { Link } from 'gatsby'
import Img from 'gatsby-image';
import storeStyles from './store.module.scss'

import RadioGroup from '../components/RadioGroup/RadioGroup'
import HistoryDropDown from '../components/HistoryDropDown/HistoryDropDown'

import Layout from "../components/layout"

class StorePage extends React.Component{
  state = {
    isChecked: true
  }

  toggleCheckedState = () => {
    this.setState({isChecked: !this.state.isChecked})
  }

  render(){
    let data = this.props.data;

    return(
      <Layout>
      <div className={storeStyles.ImageSelectionSection}>
        <div className={storeStyles.Images}>
          <div className={storeStyles.ImageContainer}> 
            <Img className={storeStyles.CartonImage1} fluid={data.small.childImageSharp.fluid} ></Img>
          </div>
          <div className={storeStyles.ImageContainer}> 
            <Img className={storeStyles.CartonImage2} fluid={data.medium.childImageSharp.fluid} ></Img>
          </div>
          <div className={storeStyles.ImageContainer}> 
            <Img className={storeStyles.CartonImage3} fluid={data.large.childImageSharp.fluid} ></Img>
          </div>
        </div>
      </div>
      <div>
        <h3 className={storeStyles.StepsLabel}>1. SELECT AMOUNT</h3>
        <div className={storeStyles.PackSizeSelection}>
          <button>6 PACK - $15.42</button>
          <button>12 PACK - $24.74</button>
          <button>24 PACK - $44.96</button>
        </div>
        <div className={storeStyles.QuantitySelection}>
          <p>QUANTITY</p>
          <button>▼</button>
          <input type="text" value="1"></input>
          <button>▲</button>
        </div>
      </div>
      <div>
        <h3 className={storeStyles.StepsLabel}>2. CHOOSE DELIVERY</h3>
        <div className={storeStyles.DeliveryOptions}>
          <RadioGroup
            key={"options"}
            options={["ONE-TIME PURCHASE","SUBSCRIBE & SAVE 10% ($22.27)"]}
          />
          <HistoryDropDown
            className={storeStyles.SubscribeDropDown}
            currentValue={"3 MONTHS"}
            values={[
              "1 MONTH",
              "2 MONTHS",
              "3 MONTHS",
              "4 MONTHS",
              "5 MONTHS",
              "6 MONTHS"
            ]}
          />
        </div>
      </div>
    </Layout>
    )
  }
}

export default StorePage


export const dataQuery = graphql`
  query {
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