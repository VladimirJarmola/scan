import React from 'react';
import { useSelector } from 'react-redux';

import classes from './Footer.module.css';

import WhiteLogo from '../UI/WhiteLogo/WhiteLogo';

const Footer = () => {
    const screenSize = useSelector(state => state.screenSize.screenSize);
    const mobileLimit = useSelector(state => state.screenSize.mobileLimit);

    return (
        <div className={classes.footer}>
            <div className={screenSize > mobileLimit ? classes.logo : classes.logoMobile}>
                <WhiteLogo />
            </div>
            <div className={screenSize > mobileLimit ? classes.cutaway : classes.cutawayMobile}>
                <p>г. Москва, Цветной б-р, 40</p>
                <p>+7 495 771 21 11 </p>
                <p>info@skan.ru</p>
                <br />
                <p>Copyright. 2022</p>

            </div>
        </div>
    );
};

export default Footer;
