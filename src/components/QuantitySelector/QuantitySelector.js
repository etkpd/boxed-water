import React, { Component } from 'react';
import QuantityAdjustButton from './QuantityAdjustButton/QuantityAdjustButton';
import stylesQuantitySelector from './QuantitySelector.module.scss'

class QuantitySelector extends Component {
  state = {
    inputValue: 1
  }

  incrementInputValue = () =>{
    this.setState(prevState=>({
      inputValue: ++prevState.inputValue
    }))
  }
  
  decrementInputValue = () =>{
    if(this.state.inputValue>1){
      this.setState(prevState=>({
        inputValue: --prevState.inputValue
      }))
    }
  }

  enterValue = (e) => {
    //Further Improvement: Scantize Values. allow only positive values. display error when condition not met
    this.setState({inputValue: e.target.value})
  }
  

  render() {
    return (
      <div className={stylesQuantitySelector.main}>
        <p>QUANTITY</p>
        <QuantityAdjustButton
          increment={false}
          onClick={this.decrementInputValue}
        />
        <input type="text" value={this.state.inputValue} onChange={this.enterValue}></input>
        <QuantityAdjustButton
          increment={true}
          onClick={this.incrementInputValue}
        />
      </div>
    );
  }
}

export default QuantitySelector;