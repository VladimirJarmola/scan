import React from 'react';

import picture from '../../../assets/image/logo.svg';

import classes from './Logo.module.css';

const Logo = () => {

    return (
        <div>
            <img src={picture} alt='логотип компании СКАН' className={classes.logo}/>
        </div>
    );
};

export default Logo;
