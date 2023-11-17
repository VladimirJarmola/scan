import React from 'react';
import { useDispatch } from 'react-redux';

import { addAuthAction } from '../../store/authReducer';

import classes from './UserPanel.module.css';

import userImage from '../../assets/image/auth/User.svg';

const UserPanel = () => {

    const dispatch = useDispatch();
  
    const logout = () => {
      dispatch(addAuthAction(false));
      localStorage.removeItem('accessToken');
      localStorage.removeItem('expire');
    }

    return (
        <div className={classes.wrapper}>
            <div className={classes.info}>
                <div className={classes.username}>
                    Алексей А.
                </div>
                <button className={classes.logoutBtn} onClick={logout}>
                    Выйти
                </button>
            </div>
            
            <img src={userImage} alt={userImage} width={'32px'} height={'32px'}/>
            
        </div>
    )
};

export default UserPanel;
