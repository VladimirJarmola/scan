import React from "react";
import { Link } from 'react-router-dom';

import WhiteLogo from "../UI/WhiteLogo/WhiteLogo";

import AuthHead from "../AuthHead/AuthHead";

import classes from './Menu.module.css';

const Menu = ({isMobile, active, setActive, navItems}) => {
    
    if (!isMobile) {
        return (
            <div className={classes.navbar}>
                {navItems.map(item => 
                    <Link to={item.href} className={classes.link} key={item.value}>{item.value}</Link>
                )}
            </div>
        )
    } else {
        return (
            <div className={active ? classes.menu + ' ' + classes.active : classes.menu} >
                <div className={classes.content} onClick={e => e.stopPropagation}> 
                    <div className={classes.header}>
                        <div className={classes.logo}>
                            <WhiteLogo />
                        </div>
                        <div className={classes.exitIcon} onClick={() => setActive(false)}>
                            <span className={classes.vertLine}></span>
                            <span className={classes.horLine}></span>
                        </div>
                    </div>
                    <div className={classes.navbarMobaile}>
                        {navItems.map(item => 
                            <Link to={item.href} className={classes.linkMobile} key={item.value}>
                                <div onClick={() => setActive(false)}>
                                    {item.value}
                                </div>
                            </Link>
                        )}
                    </div>
                    <div className={classes.authWrapperMobile} >
                      <AuthHead setActive={setActive} isMobile={true}/>
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default Menu;
