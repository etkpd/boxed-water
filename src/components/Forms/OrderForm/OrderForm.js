import React, { Component } from 'react';

import RadioGroup from '../../RadioGroup/RadioGroup'
import HistoryDropDown from '../../HistoryDropDown/HistoryDropDown'
import QuantitySelector from '../../QuantitySelector/QuantitySelector'
import * as Button from '../../buttons/Button'
import SizeSelection from './SizeSelection/SizeSelection';

import stylesOrderForm from './OrderForm.module.scss'

class OrderForm extends Component {
  state={
    selectedCartonSize: 1,
    selectedPackSize: 0,
    subscribeDeliveryPeriod: "1 MONTH",
    quantityValue: 1
  }

  setFocusedImage = (selectedImageIndex) =>{
    console.log(selectedImageIndex)
    this.setState({
      selectedCartonSize: selectedImageIndex,
      selectedPackSize: 0,
      quantityValue: 1
    })
  }

  onChange = (e) =>{
    this.setState({subscribeDeliveryPeriod: e.target.value})
  }

  setSelectedPackSizeIndex = (packSizeIndex) =>{
    this.setState({selectedPackSize: packSizeIndex})
  }


  incrementQuantityValue = () =>{
    this.setState(prevState=>({
      quantityValue: ++prevState.quantityValue
    }))
  }
  
  decrementQuantityValue = () =>{
    if(this.state.quantityValue>1){
      this.setState(prevState=>({
        quantityValue: --prevState.quantityValue
      }))
    }
  }

  enterQuantityValue = (e) => {
    //Further Improvement: Scantize Values. allow only positive values. display error when condition not met
    this.setState({quantityValue: e.target.value})
  }


  render() {
    let images = this.props.productImages;
    let pricingData = this.props.pricingData;
    let priceForSelectedProduct = pricingData[this.state.selectedCartonSize].pack_sizes[this.state.selectedPackSize].price
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
                focusedIndex={this.state.selectedCartonSize}
                onClick={() => this.setFocusedImage(index)}
                />
                )
              })}
          </div>
        </div>

        <div>
          <h3 className={stylesOrderForm.StepsLabel}>1. SELECT AMOUNT</h3>
          <div className={stylesOrderForm.PackSizeSelection}>
            {pricingData[this.state.selectedCartonSize].pack_sizes.map((pack_size, packSizeIndex)=>{
              let buttonLabel = `${pack_size.size} - $${pack_size.price}`
              console.log(packSizeIndex)
              return(
                <div className={stylesOrderForm.PackSizeSelectionButtonContainer} key={packSizeIndex}>
                  {(packSizeIndex===this.state.selectedPackSize)
                  ? <Button.Primary
                      type='button'
                      label={buttonLabel}
                      onClick={()=> this.setSelectedPackSizeIndex(packSizeIndex)}
                    />
                  : <Button.Secondary
                      type='button'
                      label={buttonLabel}
                      onClick={()=> this.setSelectedPackSizeIndex(packSizeIndex)}
                    />
                  }
                </div>
              )
            })}
          </div>          
            <QuantitySelector
              quantityValue={this.state.quantityValue}
              enterQuantityValue={this.enterQuantityValue}
              decrementQuantityValue={this.decrementQuantityValue}
              incrementQuantityValue={this.incrementQuantityValue}
            />
        </div>
        
        <div>
          <h3 className={stylesOrderForm.StepsLabel}>2. CHOOSE DELIVERY</h3>
          <div className={stylesOrderForm.DeliveryOptions}>
            <RadioGroup
              options={(pricingData[this.state.selectedCartonSize].pack_sizes[this.state.selectedPackSize].subAndSave)?["ONE-TIME PURCHASE",`SUBSCRIBE & SAVE 10% ($${Math.round((priceForSelectedProduct*0.9) * 100) / 100 })`]:["ONE-TIME PURCHASE"]}
            />
            {(pricingData[this.state.selectedCartonSize].pack_sizes[this.state.selectedPackSize].subAndSave)
            ?
              <HistoryDropDown
                className={stylesOrderForm.SubscribeDropDown}
                currentValue={this.state.subscribeDeliveryPeriod}
                values={[
                  "1 MONTH",
                  "2 MONTHS",
                  "3 MONTHS",
                  "4 MONTHS",
                  "5 MONTHS",
                  "6 MONTHS"
                ]}
                onChange={this.onChange}
              />
            :null
            }
          </div>
        </div>

        <div>

        </div>
      </>
    );
  }
}

export default OrderForm;