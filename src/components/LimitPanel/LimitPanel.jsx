import React, { useState } from "react";
import { useSelector } from "react-redux";

import Services from "../../API/Services";

import Loader from '../../components/UI/Loader/Loader';

import classes from './LimitPanel.module.css';

const LimitPanel = () => {
    const [limitData, setLimitData] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const screenSize = useSelector(state => state.screenSize.screenSize);    

    const token = localStorage.getItem('accessToken');
    
    const getLimit = async token => {
        const limit = await Services.getLimit(token);  
        setLimitData(limit);    
        setIsLoading(false);    
    }

    if (Object.keys(limitData).length === 0) {
        getLimit(token);
    }
    if (screenSize >= 800) {
        return (
            <>
                {isLoading
                    ?
                       <div className={classes.loader_wrapper}> 
                            <Loader />
                       </div> 
                    : 
                        <div className={classes.user_limit_wrapper}>
                            <div className={classes.user_limit_wrapper_use} style={{paddingRight: '20px'}}>
                                <span>Использовано компаний&nbsp;&nbsp;&nbsp;</span>
                                <span>{limitData.usedCompanyCount}</span>
                            </div>                
                            <div className={classes.user_limit_wrapper_limit} style={{paddingRight: '20px'}}>
                                <span>Лимит по компаниям&nbsp;&nbsp;&nbsp;</span>
                                <span>{limitData.companyLimit}</span>
                            </div>
                        </div>
                        
                }
            </>                 
        )
    } else {
        return (
            <>
                {isLoading
                    ?
                       <div className={classes.loader_wrapper}> 
                            <Loader />
                       </div> 
                    : 
                        <div className={classes.user_limit_wrapper} >
                            <div className={classes.user_limit_wrapper_use} style={{textAlign: 'left', paddingLeft: '10px'}}>
                                <p style={{fontSize: '8px'}}>Использовано компаний&nbsp;&nbsp;&nbsp;</p>
                                <span>{limitData.usedCompanyCount}</span>
                            </div>                
                            <div className={classes.user_limit_wrapper_limit} style={{textAlign: 'left', paddingLeft: '10px'}}>
                                <p style={{fontSize: '8px'}}>Лимит по компаниям&nbsp;&nbsp;&nbsp;</p>
                                <span>{limitData.companyLimit}</span>
                            </div>
                        </div>
                        
                }
            </>                 
        )
    }
    
};

export default LimitPanel;
