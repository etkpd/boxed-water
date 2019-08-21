import React from 'react';
import styles from './RadioItem.module.scss'

const RadioItem = ({ type = 'radio', name, checked, onChange, onClick}) => (

      <div className={styles.checkboxContainer}>
        <label>
          <input type={type} className={styles.filledin} name={name} checked={checked} onClick={onClick} onChange={onChange}/>
          <span>{name}</span>
        </label>
      </div>
);

export default RadioItem;