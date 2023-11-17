import React from 'react';

import {BRAND} from '../../../constants/BRAND';

import classes from './BrandBox.module.css';

const BrandBox = () => {
    return (
        <div className={classes.brandBox}>
            {BRAND.map(item => 
                <div className={classes.brand} key={item}>
                    <img src={item} alt={item} />
                </div>
            )}
        </div>
    )
}

export default BrandBox;
