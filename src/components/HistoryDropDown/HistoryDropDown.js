import React, {Component} from 'react';
import dropdownStyles from './HistoryDropDown.module.scss';

class HistoryDropDown extends Component{
  state = {
    focused: false
  }

  toggleFocusedState = () =>{
    this.setState(prevState=>({
      focused: !prevState.focused
    }))
  }

  toggleFocusedStateOff = () =>{
    this.setState({focused: false})
  }
  
  render(){
    let { currentValue, values, onChange, className } = this.props
    
    let mainClass 
    
    if(!this.state.focused){
      mainClass = dropdownStyles.main
    } else {
      mainClass = dropdownStyles.focused
    }
    

    return(
      <div className={`${mainClass} ${className}`}>
        <h5 className={dropdownStyles.selectLabel}>DELIVERY EVERY</h5>
        <select 
          onChange={onChange} 
          value={currentValue} 
          className={dropdownStyles.select}
          onClick={this.toggleFocusedState}
          onBlur={this.toggleFocusedStateOff}
          >
          {values.map((value) => <option value={value} key={value} className={dropdownStyles.option}>{value}</option>)}
        </select>
      </div>
    )
  }
}



export default HistoryDropDown; 