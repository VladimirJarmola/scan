import React from 'react';

import classes from './Badge.module.css';

const Badge = ({switcher}) => {
    return (
        <div className={classes.badgeConteiner}>
            {switcher 
                ?
                <div className={classes.badge}>Текущий тариф</div>
                :
                <div hidden={true} className={classes.badge} >Текущий тариф</div>
            }
        </div>
    )
}
    

export default Badge;
