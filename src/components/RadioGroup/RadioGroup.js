import React from 'react';
import RadioItem from './RadioItem/RadioItem';
import styles from './RadioGroup.module.scss';

class RadioGroup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedOption: "ONE-TIME PURCHASE",
      selectedOptionIndex: 0
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    //console.log(index)
    //this.setState({selectedOptionIndex: index})
    
    this.setState({selectedOption: e.target.name})
  }
  
  

  render() {
    const {options} = this.props;

    return (
      <>
      <div className={styles.filterinputs} >
        {
          options.map((option, index) => (
            <RadioItem
              key={option}
              name={option} 
              checked={(option === this.state.selectedOption) ? true : false}
              onChange={this.handleChange} 
            />  
          ))
        }
      </div>
      </>
    );
  }
}

export default RadioGroup;