import React from 'react';
import Img from 'gatsby-image';

import stylesSizeSelection from './SizeSelection.module.scss'

const SizeSelection = ({image , index, onClick, focusedIndex}) => {
  let mainStyle
  switch (index){
    case 0:
      mainStyle = stylesSizeSelection.CartonImage0;
      break;
    case 1:
      mainStyle = stylesSizeSelection.CartonImage1;
      break;
    case 2:
      mainStyle = stylesSizeSelection.CartonImage2;
      break;
    default:
      mainStyle = stylesSizeSelection.CartonImage0;
  }

  return (
    <div className={stylesSizeSelection.ImageContainer} onClick={onClick}>
      <Img className={mainStyle} style={{filter: (index===focusedIndex) ? '' : 'blur(2px)'}} fluid={image}></Img>
    </div>
  );
};

export default SizeSelection;