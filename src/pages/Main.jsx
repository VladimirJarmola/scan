import React from "react";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';

import MainSlider from "../components/MainSlider/MainSlider";
import RateList from '../components/RateList/RateList';
import MyButton from "../components/UI/MyButton/MyButton";

import classes from '../styles/Main.module.css';

import mainPicture1 from '../assets/image/main_pict_1.svg';
import mainPicture2 from '../assets/image/main_pict_2.svg';

const Main = () => {
    const isAuth = useSelector(state => state.auth.auth);

    const [currentRate, setCurrentRate] = useState();
    const history = useHistory();

    useEffect(() => {
        if (isAuth) {
            setCurrentRate(0);
        } else setCurrentRate();
    }, [isAuth])

    function redirectSearchPage() {
        history.push('/search');
    }

    return (
        <div className="body">
            <div className={classes.intro}>
                <div className={classes.description}>
                    <div className={classes.head}>
                        <p>сервис по поиску публикаций о компании по его ИНН</p>
                    </div>
                    <div className={classes.content}> Комплексный анализ публикаций, получение данных в формате PDF на электронную почту. </div>
                    <div className={classes.requestData}>
                        <MyButton disabled={!isAuth} onClick={redirectSearchPage} style={{width:'335px', fontSize: '22px'}} >
                            Запросить данные
                        </MyButton>
                    </div>
                </div>
                <div>
                    <img src={mainPicture1} alt='mainPicture1'  className={classes.mainPicture1}/>
                    <div className={classes.gag}></div>
                </div>
                
            </div>

            <div className={classes.whyme}>
                <div className={classes.head}>
                    <p>Почему именно мы</p>
                </div>
                <MainSlider />           
            </div>

            <div className={classes.mainPicture2Wrap}>
                <img src={mainPicture2} alt='mainPicture2' className={classes.mainPicture2} />
            </div>  

            <div className={classes.rates}>
                <div className={classes.head}>
                    <p>наши тарифы</p>
                </div>
                <RateList currentRate={currentRate}/>
            </div>      
        </div>
    );
};

export default Main;
