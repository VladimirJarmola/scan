import React from 'react';

import classes from './Footer.module.css';

import WhiteLogo from '../UI/WhiteLogo/WhiteLogo';

const Footer = () => {

    return (
        <div className={classes.footer}>
            <div className={classes.logo}>
                <WhiteLogo />
            </div>
            <div className={classes.cutaway}>
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
