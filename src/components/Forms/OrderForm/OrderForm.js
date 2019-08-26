import React, { Component } from 'react';

import RadioGroup from '../../RadioGroup/RadioGroup'
import HistoryDropDown from '../../HistoryDropDown/HistoryDropDown'
import QuantitySelector from '../../QuantitySelector/QuantitySelector'
import * as Button from '../../buttons/Button'
import SizeSelection from './SizeSelection/SizeSelection';

import stylesOrderForm from './OrderForm.module.scss'

class OrderForm extends Component {
  state={
    focusedImageIndex: 1
  }

  setFocusedImage = (selectedImageIndex) =>{
    console.log(selectedImageIndex)
    this.setState({focusedImageIndex: selectedImageIndex})
  }

  render() {
    let images = this.props.productImages
    return (
      <>
        <div className={stylesOrderForm.ImageSelectionSection}>
          <div className={stylesOrderForm.Images}>       
            {images.map((image, index)=> {
              return (
                <SizeSelection
                key={index}
                image={image}
                index={index}
                focusedIndex={this.state.focusedImageIndex}
                onClick={() => this.setFocusedImage(index)}
                />
                )
              })}
          </div>
        </div>

        <div>
          <h3 className={stylesOrderForm.StepsLabel}>1. SELECT AMOUNT</h3>
          <div className={stylesOrderForm.PackSizeSelection}>
            <Button.Primary
              type='button'
              label='6 PACK - $15.42'
            />
            <Button.Secondary
              type='button'
              label='12 PACK - $24.74'
            />
            <Button.Secondary
              type='button'
              label='24 PACK - $44.96'
            />
          </div>          
            <QuantitySelector/>
        </div>
        
        <div>
          <h3 className={stylesOrderForm.StepsLabel}>2. CHOOSE DELIVERY</h3>
          <div className={stylesOrderForm.DeliveryOptions}>
            <RadioGroup
              key={"options"}
              options={["ONE-TIME PURCHASE","SUBSCRIBE & SAVE 10% ($22.27)"]}
            />
            <HistoryDropDown
              className={stylesOrderForm.SubscribeDropDown}
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

        <div>

        </div>
      </>
    );
  }
}

export default OrderForm;