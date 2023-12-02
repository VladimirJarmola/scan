import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { addAuthAction } from "../../store/authReducer";

import classes from './AuthHead.module.css';

const AuthHead = ({setActive, isMobile}) => {
    const isAuth = useSelector(state => state.auth.auth);
    const dispatch = useDispatch();
  
    const logout = () => {
      dispatch(addAuthAction(false));
      localStorage.removeItem('accessToken');
      localStorage.removeItem('expire');
      setActive(false);
    }
    
    if (!isMobile) {
        return (
            <div className={classes.auth}>
                <div className={classes.authBtn}>
                    <span>Зарегистрироваться</span>
                </div>
                <div className={classes.btnWrapper}>
                    <button className={classes.btn}>
                        <Link to="/auth" className={classes.link}>Войти</Link>
                    </button>
                </div>
            </div>
        )
    } else {
        return (
            <div className={classes.auth}>
                <div className={classes.authBtn}>
                    <span>Зарегистрироваться</span>
                </div>
                {
                    isAuth
                        ?
                        <button className={classes.btn} onClick={logout}>
                            Выйти
                        </button>
                        :
                        <button className={classes.btn} onClick={() => setActive(false)}>
                            <Link to="/auth" className={classes.link}>Войти</Link>
                        </button>
                }
            </div>
        )
    }
}

export default AuthHead;
