import React from 'react';
import { useSelector } from 'react-redux';

import picture from '../../../assets/image/white_logo.svg';

import classes from './WhiteLogo.module.css'

const WhiteLogo = () => {
    return (
        <div>
            <img src={picture} alt='логотип компании СКАН' className={classes.logo}/>
        </div>
    );
};

export default WhiteLogo;
