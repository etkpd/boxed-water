import React from 'react';
import RadioItem from './RadioItem/RadioItem';
import styles from './RadioGroup.module.scss';

const RadioGroup = ({options, selectedDeliveryOption, setDeliveryOption}) => {
  return (
    <div className={styles.filterinputs} >
      {
        options.map((option) => (
          <RadioItem
            key={option}
            name={option} 
            checked={(option === selectedDeliveryOption) ? true : false}
            onChange={setDeliveryOption} 
          />  
        ))
      }
    </div>
  );
};

export default RadioGroup;