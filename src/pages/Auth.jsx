import React from "react";

import pict from '../assets/image/auth_pict_1.svg';
import lock from '../assets/image/auth_lock.svg';

import AuthForm from "../components/AuthForm/AuthForm";

import classes from '../styles/Auth.module.css';

const Auth = () => {
    return (
        <div className={classes.authConteiner}>
            <div className={classes.content}>
                <p>Для оформления подписки на тариф, необходимо авторизоваться.</p>
                <img src={pict} alt='auth pict'/>
            </div>
            <div className={classes.auth}>
                <img src={lock} alt="lock" className={classes.lockStl}/>
                <AuthForm />
            </div> 
            <img src={pict} alt='auth pict' className={classes.pictStl}/> 
        </div>
    );
};

export default Auth;
