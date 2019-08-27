import React from 'react';
import QuantityAdjustButton from './QuantityAdjustButton/QuantityAdjustButton';
import stylesQuantitySelector from './QuantitySelector.module.scss'

const QuantitySelector = ({
  quantityValue, 
  enterQuantityValue, 
  decrementQuantityValue, 
  incrementQuantityValue
}) => {
  return (
    <div className={stylesQuantitySelector.main}>
        <p>QUANTITY</p>
        <QuantityAdjustButton
          increment={false}
          onClick={decrementQuantityValue}
        />
        <input type="text" value={quantityValue} onChange={enterQuantityValue}></input>
        <QuantityAdjustButton
          increment={true}
          onClick={incrementQuantityValue}
        />
      </div>
  );
};

export default QuantitySelector;