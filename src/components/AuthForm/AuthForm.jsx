import React from "react";
import { useState, useEffect } from 'react';
import { useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';

import Services from '../../API/Services';
import { addAuthAction } from "../../store/authReducer";

import classes from './AuthForm.module.css';

import BrandBox from "../UI/BrandBox/BrandBox";

const AuthForm = () => {

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [loginEntry, setLoginEntry] = useState(false);
    const [passwordEntry, setPasswordEntry] = useState(false);
    const [loginError, setLoginError] = useState('Введите логин!');
    const [passwordError, setPasswordError] = useState('Введите пароль!');
    const [formValid, setFormValid] = useState(false);
    const [loginStyle, setLoginStyle] = useState(classes.inputValid);
    const [passwordStyle, setPasswordStyle] = useState(classes.inputValid);

    const history = useHistory();

    const dispatch = useDispatch();

    useEffect(() => {
        if (loginError || passwordError) {
            setFormValid(false)
        } else {
            setFormValid(true)
        }
    }, [loginError, passwordError])

    const blurHandler = (event) => {
        switch (event.target.name) {
            case 'login':
                setLoginEntry(true);
                break;
            case 'password':
                setPasswordEntry(true);
                break;
        }
    }

    const loginHandler = (event) => {
        setLogin(event.target.value);
        const rePhone = /^[\d\+][\d\(\)\ -]{4,14}\d$/;
        const reLogin = /sf_student[0-9]/;
        if (!rePhone.test(event.target.value) && !reLogin.test(event.target.value)) {
            setLoginError('Введите корректные данные');
            setLoginStyle(classes.inputInValid);
        } else {
            setLoginError('');
            setLoginStyle(classes.inputValid);
        }
    }
    
    const passwordHandler = (event) => {
        setPassword(event.target.value);
        if (event.target.value.length < 3 || event.target.value.length > 8) {
            setPasswordError('Введите корректные данные');
            setPasswordStyle(classes.inputInValid); 
            if (!event.target.value) {
                setPasswordError('Неправильный пароль');
                setPasswordStyle(classes.inputInValid); 
            }
        } else {
            setPasswordError('');
            setPasswordStyle(classes.inputValid);
        }
    }

    const auth = async event => {
        event.preventDefault();
        const tokenObj = await Services.getToken(login, password);
        if (!tokenObj.accessToken) {
            setPasswordError('Ошибка авторизации!');
        } else {
            localStorage.setItem('accessToken', tokenObj.accessToken);
            localStorage.setItem('expire', tokenObj.expire);
            dispatch(addAuthAction(true))
            history.push('/');
        }
        
    }
    
    return (
        <form className={classes.formWrapper}>
            <div className={classes.btnGrp}>
                <button className={classes.authBtn}>Войти</button>
                <button className={classes.authBtn} disabled={true}>Зарегистрироваться</button>
            </div>

            <div className={classes.inputGrp}>
                
                <span>Логин или номер телефона:</span>
                <input 
                    className={loginStyle} 
                    onChange={e => loginHandler(e)} 
                    name='login' 
                    onBlur={e => blurHandler(e)} 
                    value={login}/>

                {(loginEntry && loginError) && <div className={classes.errorLgn}> {loginError}</div>}
                
                <span>Пароль:</span>
                <input 
                    className={passwordStyle} 
                    onChange={e => passwordHandler(e)} 
                    name='password' 
                    type="password" 
                    onBlur={e => blurHandler(e)} 
                    value={password}/>

                {(passwordEntry && passwordError) && <div className={classes.errorPwd}> {passwordError}</div>}

                <button onClick={auth} className={classes.comeInBtn} disabled={!formValid}>Войти</button>

                <div className={classes.restorePwd}>
                    <u>Восстановить пароль</u> 
                </div> 
                <div className={classes.entry}>
                    <span>Войти через:</span>
                    <BrandBox />
                </div>           
            </div>                         
        </form>
    )
};

export default AuthForm;
