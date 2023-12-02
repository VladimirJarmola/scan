import React, { useState } from "react";

import Services from "../../API/Services";

import Loader from '../../components/UI/Loader/Loader';

import classes from './LimitPanel.module.css';

const LimitPanel = () => {
    const [limitData, setLimitData] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const token = localStorage.getItem('accessToken');
    
    const getLimit = async token => {
        const limit = await Services.getLimit(token);  
        setLimitData(limit);    
        setIsLoading(false);    
    }

    if (Object.keys(limitData).length === 0) {
        getLimit(token);
    }

    return (
        <>
            {isLoading
                ?
                    <div className={classes.loader_wrapper}> 
                        <Loader />
                    </div> 
                : 
                    <div className={classes.user_limit_wrapper} >
                        <div className={classes.user_limit_wrapper_use} >
                            <p>Использовано компаний&nbsp;&nbsp;&nbsp;</p>
                            <span>{limitData.usedCompanyCount}</span>
                        </div>                
                        <div className={classes.user_limit_wrapper_limit} >
                            <p>Лимит по компаниям&nbsp;&nbsp;&nbsp;</p>
                            <span>{limitData.companyLimit}</span>
                        </div>
                    </div>
                    
            }
        </>                 
    )    
};

export default LimitPanel;
