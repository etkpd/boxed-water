import React from 'react';
import styles from './QuantityAdjustButton.module.scss'

const QuantityAdjustButton = ({ type = 'button', name, checked = false, onChange, hidden}) => (

      <div className={styles.checkboxContainer}>
        <label>
          <input type={type} className={styles.filledin} name={name} checked={checked} onChange={onChange}/>
          <span style={(hidden)?{display:'none'}:{}}>{name}</span>
        </label>
      </div>
);


export default QuantityAdjustButton;