import React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';

import LimitPanel from '../LimitPanel/LimitPanel';
import UserPanel from '../UserPanel/UserPanel';
import Menu from '../Menu/Menu';
import AuthHead from '../AuthHead/AuthHead';

import Logo from '../UI/Logo/Logo';
import BurgerButton from '../UI/BurgerButton/BurgerButton';

import classes from './Header.module.css';
import mobileClasses from './HeaderMobile.module.css';

const Header = () => {
  const isAuth = useSelector(state => state.auth.auth);
  const screenSize = useSelector(state => state.screenSize.screenSize);
  const mobileLimit = useSelector(state => state.screenSize.mobileLimit);
  const [menuActive, setMenuActive] = useState(false);

  const navItems = [
    {value: 'Главная', href: '/'},
    {value: 'Тарифы', href: '/'},
    {value: 'FAQ', href: '/'},
  ]

  if (screenSize > mobileLimit) {
    return (
      <div className={classes.header}>
        <div className={classes.logo}>
          <Logo/>
        </div>
        
        <Menu navItems={navItems} />

        {isAuth 
          ? 
          <div className={classes.user}>
            <div className={classes.user_limit}>
              <LimitPanel />
            </div>
            <div className={classes.user_panel}>
              <UserPanel />
            </div>
          </div>
          :
          <AuthHead />
        }
      </div>
    );
  } else {
    return (
      <div className={mobileClasses.header} >
        <div className={mobileClasses.logo}>
          <Logo/>
        </div>
        {
          isAuth
            ?
            <div className={mobileClasses.user_limit}>
              <LimitPanel />
            </div>
            :
            <div></div>
        }
        <div className={mobileClasses.burgerButton} onClick={() => setMenuActive(!menuActive)}>
          <BurgerButton />
        </div>
        
        <Menu navItems={navItems} active={menuActive} setActive={setMenuActive} />
        
      </div>
    )
  }
};

export default Header;
