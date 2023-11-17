import React from 'react';

import classes from './RateList.module.css';
import Rate from '../Rate/Rate';

import { RATEDATA } from '../../constants/RATEDATA';

const RateList = ({currentRate}) => {
    
    return (
        <div className={classes.ratesList}>
            {RATEDATA.map(rate =>
                <Rate key={rate.id} rate={rate} currentRate={currentRate}/>
            )}
        </div>
    );
};

export default RateList;
