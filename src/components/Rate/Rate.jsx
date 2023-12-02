import React from "react";

import checkMark from '../../assets/image/rate/check_mark.svg';

import MyButton from "../UI/MyButton/MyButton";
import Badge from "../UI/Badge/Badge";

import classes from './Rate.module.css';

const Rate = ({rate, currentRate}) => {

    let switcher, border;
    if (rate.id === currentRate) {
        switcher = true;
        border = {border: `2px solid ${rate.headerColor}`}
    } else {
        switcher = false;
        border = {}
    }
    
    return (
        <div className={classes.rateBox} style={border}>

            <div className={classes.header} style={{background: rate.headerColor}}>
                <div className={classes.text} >
                    <p style={{color: rate.headerTextColor}}><b>{rate.header}</b></p>
                    <br/>
                    <span style={{color: rate.headerTextColor}}>{rate.headerDescription}</span>
                </div> 
                <img src={rate.headerImage} alt="lamp"/>     
            </div>

            <div className={classes.card}>

                <div className={classes.badgeWrapper}>
                    <Badge switcher={switcher} />
                </div>
                
                <div className={classes.price}>
                    <p><b>{rate.currentPrice} &#8381;</b></p>
                    <p><s>{rate.oldPrice} &#8381;</s></p>
                </div>

                <div className={classes.priceDescription}>
                    <span>{rate.descriptionPrice ? rate.descriptionPrice : <br/>}</span>
                </div>

                <div className={classes.description}>
                    <p><b>В тариф входит:</b></p>
                    <div>
                        <img src={checkMark} alt="checkMark" />
                        <span> {rate.description1}</span>
                    </div>
                    <div>
                        <img src={checkMark} alt="checkMark" />
                        <span> {rate.description2}</span>
                    </div>
                    <div>
                        <img src={checkMark} alt="checkMark" />
                        <span> {rate.description3}</span>
                    </div>
                </div>

                <div className={classes.accountButton}>
                    <MyButton disabled={switcher}>
                        {switcher ? 'Перейти в личный кабинет' : 'Подробнее'}
                    </MyButton>                                
                </div>  
            </div>
        </div>
    );
};

export default Rate;
