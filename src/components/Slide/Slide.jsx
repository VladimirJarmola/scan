import React from 'react';
import { useSelector } from 'react-redux';

import classes from './Slide.module.css';

const Slide = ({id, content, path}) => {
  const screenSize = useSelector(state => state.screenSize.screenSize);
  const mobileLimit = useSelector(state => state.screenSize.mobileLimit);

  if (screenSize > mobileLimit) {
    return (
      <div key={id} className={classes.item}> 
        <img className={classes.icon} src={path} alt={path} height='75px' width='70px'/>
        <p className={classes.content}>{content}</p>
      </div>
    );
  } else {
    return (
      <div key={id} className={classes.itemMobile}> 
        <img className={classes.iconMobile} src={path} alt={path} height='65px' width='58px'/>
        <p className={classes.contentMobile}>{content}</p>
      </div>
    );
  }
    
};

export default Slide;