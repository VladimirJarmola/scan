import React from "react";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';

import MainSlider from "../components/MainSlider/MainSlider";
import RateList from '../components/RateList/RateList';
import MyButton from "../components/UI/MyButton/MyButton";

import classes from '../styles/Main.module.css';
import mobileClasses from '../styles/MainMobile.module.css';

import mainPicture1 from '../assets/image/main_pict_1.svg';
import mainPicture2 from '../assets/image/main_pict_2.svg';

const Main = () => {
    const isAuth = useSelector(state => state.auth.auth);
    const screenSize = useSelector(state => state.screenSize.screenSize);
    const mobileLimit = useSelector(state => state.screenSize.mobileLimit);
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

    if (screenSize > mobileLimit) {
        return (
            <div className="body">
                <div className={classes.intro}>
                    <div className={classes.description}>
                        <div className={classes.head}>
                            <p>сервис по поиску публикаций о компании по его ИНН</p>
                        </div>
                        <div className={classes.content}> Комплексный анализ публикаций, получение данных в формате PDF на электронную почту. </div>
                        <div className={classes.requestData}>
                            <MyButton disabled={!isAuth} onClick={redirectSearchPage} style={{width:'335px', fontSize: '22px'}}>
                                Запросить данные
                            </MyButton>
                        </div>
                    </div>
                    <div className={classes.mainPicture1}>
                        <img src={mainPicture1} alt='mainPicture1'  />
                    </div>
                    <div className={classes.gag}></div>
                </div>
                <div className={classes.whyme}>
                    <div className={classes.head}>
                        <p>Почему именно мы</p>
                    </div>
                    <MainSlider />           
                </div>
                <div className={classes.mainPicture2}>
                    <img src={mainPicture2} alt='mainPicture2'  />
                </div>  
                <div className={classes.rates}>
                    <div className={classes.head}>
                        <p>наши тарифы</p>
                    </div>
                    <RateList currentRate={currentRate}/>
                </div>      
            </div>
        );
    } else {
        return (            
            <div className="body">
                <div className={mobileClasses.intro}>
                    <div className={mobileClasses.head}>
                        <p>сервис по поиску публикаций о компании по его ИНН</p>
                    </div>
                    <div className={mobileClasses.content}>
                        Комплексный анализ публикаций, получение данных в формате PDF на электронную почту. 
                    </div>
                    <div className={mobileClasses.requestData}>
                        <MyButton disabled={!isAuth} onClick={redirectSearchPage} style={{width:'335px', fontSize: '20px'}}>
                            Запросить данные
                        </MyButton>
                    </div>
                    <div>
                        <div className={mobileClasses.gag}></div>
                        <img src={mainPicture1} alt='mainPicture1' width={'347px'} height={'342px'}/>
                    </div>
                </div>
                <div className={mobileClasses.whyme}>
                    <div className={mobileClasses.head}>
                        <p>Почему именно мы</p>
                    </div>
                    <MainSlider />           
                </div>
                <div className={mobileClasses.mainPicture2}>
                    <img src={mainPicture2} alt='mainPicture2' width={'890px'} height={'390px'} />
                </div>  
                <div className={mobileClasses.rates}>
                    <div className={mobileClasses.head}>
                        <p>наши тарифы</p>
                    </div>
                    <RateList currentRate={currentRate}/>
                </div>  
            </div>
        )
    }

};

export default Main;
