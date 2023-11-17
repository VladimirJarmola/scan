import React from 'react';
import { useSelector } from 'react-redux';
import PublicCard from '../PublicCard/PublicCard';
import Loader from '../UI/Loader/Loader';

import classes from './PublicCardList.module.css';

const PublicCardList = ({scanDocObj}) => {
    const screenSize = useSelector(state => state.screenSize.screenSize);
    const mobileLimit = useSelector(state => state.screenSize.mobileLimit);
    
    if (Object.keys(scanDocObj).length !== 0) {
        return (
            <div className={screenSize > mobileLimit ? classes.wrapper : classes.mobileWrapper}> 
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
