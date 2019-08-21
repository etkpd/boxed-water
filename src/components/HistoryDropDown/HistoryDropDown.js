import React from 'react';
import dropdownStyles from './HistoryDropDown.module.scss';

const HistoryDropDown = ({ currentValue, values, onChange, className }) => (
  <div className={`${dropdownStyles.main} ${className}`}>
    <h5 className={dropdownStyles.selectLabel}>DELIVERY EVERY</h5>
    <select 
      onChange={onChange} 
      value={currentValue} 
      className={dropdownStyles.select}
      >
      {values.map((value) => <option value={value} key={value} className={dropdownStyles.option}>{value}</option>)}
    </select>
  </div>
);


export default HistoryDropDown; 