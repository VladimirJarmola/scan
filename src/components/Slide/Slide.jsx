import React from 'react';

import classes from './Slide.module.css';

const Slide = ({id, content, path}) => {
    return (
      <div key={id} className={classes.item}> 
        <img className={classes.icon} src={path} alt={path}/>
        <p className={classes.content}>{content}</p>
      </div>
    );    
};

export default Slide;