import React from 'react';
import styles from './QuantityAdjustButton.module.scss'

const QuantityAdjustButton = ({onClick, increment}) => (
  <button 
    className={styles.btn}
    style={{transform: increment ? 'rotate(180deg)' : ''}}
    onClick={onClick}
  >
  </button>
);


export default QuantityAdjustButton;