import React from "react";
import classes from './Loader.module.css'

const Loader = () => {
    return (
        <div className={classes.loader}>
            <svg width='24px' height='24px' fillOpacity="0" stroke='gray'>
                <circle cx='12' cy='4' r='1.2'/>
                <circle cx='20' cy='12' r='1.8'/>
                <circle cx='12' cy='20' r='2.3'/>
                <circle cx='4' cy='12' r='0.7'/>
                <circle cx='6' cy='6' r='1'/>
                <circle cx='18' cy='6' r='1.4'/>
                <circle cx='18' cy='18' r='2'/>
                <circle cx='6' cy='18' r='0.5'/>
            </svg>
        </div>
    );
};

export default Loader;