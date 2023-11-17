import React from "react";

import classes from './BurgerButton.module.css';

const BurgerButton = () => {
    return (
        <div className={classes.menuButton}>
          <span className={classes.menuButtonSpan}></span>
        </div>
    )
}

export default BurgerButton;
