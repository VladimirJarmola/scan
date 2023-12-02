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

const Header = () => {
  const isAuth = useSelector(state => state.auth.auth);
  const [menuActive, setMenuActive] = useState(false);

  const navItems = [
    {value: 'Главная', href: '/'},
    {value: 'Тарифы', href: '/'},
    {value: 'FAQ', href: '/'},
  ]
    return (
      <div className={classes.header}>
        <div className={classes.logo}>
          <Logo/>
        </div>

        <div className={classes.menu}>
          <Menu navItems={navItems} isMobile={false}/>
        </div>

        <div className={classes.burgerMenu}>
          <Menu isMobile={true} navItems={navItems} active={menuActive} setActive={setMenuActive} />
        </div>
        
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
          <div className={classes.authHead}>
            <AuthHead isMobile={false}/>
          </div>
        }
        
        <div className={classes.burgerButton} onClick={() => setMenuActive(!menuActive)}>
          <BurgerButton />
        </div>
        
      </div>
    );

};

export default Header;
