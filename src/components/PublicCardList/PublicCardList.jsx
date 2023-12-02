import React from 'react';

import PublicCard from '../PublicCard/PublicCard';
import Loader from '../UI/Loader/Loader';

import classes from './PublicCardList.module.css';

const PublicCardList = ({scanDocObj}) => {
    
    if (Object.keys(scanDocObj).length !== 0) {
        return (
            <div className={classes.wrapper}> 
                {scanDocObj.map(item => 
                    <PublicCard item={item.ok} key={item.ok.id} />
                )}
            </div>
        )
    } else {
        return (
            <div className={classes.loadWrapper}> 
                <div className={classes.loader}>
                    <Loader />
                </div>
            </div>
        )
    }
}

export default PublicCardList;
