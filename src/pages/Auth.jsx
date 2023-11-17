import React from "react";
import { useSelector } from "react-redux";

import pict from '../assets/image/auth_pict_1.svg';
import lock from '../assets/image/auth_lock.svg';

import AuthForm from "../components/AuthForm/AuthForm";

import classes from '../styles/Auth.module.css';
import mobileClasses from '../styles/AuthMobile.module.css';

const Auth = () => {
    const screenSize = useSelector(state => state.screenSize.screenSize);
    const mobileLimit = useSelector(state => state.screenSize.mobileLimit);

    if (screenSize > mobileLimit) {
        return (
            <div className={classes.authConteiner}>
                <div className={classes.content}>
                    <p>Для оформления подписки на тариф, необходимо авторизоваться.</p>
                    <img src={pict} alt='auth pict'/>
                </div>
                <div className={classes.auth}>
                    <img src={lock} alt="lock" />
                    <AuthForm />
                </div>  
            </div>
        );
    } else {
        return (
            <div className={mobileClasses.authConteiner}>
                <div className={mobileClasses.content}>
                    <p>Для оформления подписки</p>
                    <p>на тариф, необходимо авторизоваться.</p>
                </div>
                <div className={mobileClasses.auth}>
                    <img src={lock} alt="lock" className={mobileClasses.lockStl}/>
                    <AuthForm />
                </div>
                <img src={pict} alt='auth pict' className={mobileClasses.pictStl}/>
            </div>
        )
    }
};

export default Auth;
