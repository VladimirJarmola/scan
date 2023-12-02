import React from 'react';

import CardTag from '../UI/CardTag/CardTag';

import { XMLParser } from '../../utils/XMLParser';
import { gagArr, gagArrMobile } from '../../constants/CONSTANTS';
import { getRandomIntInclusive } from '../../utils/resultFunc';

import classes from './PublicCard.module.css';

const PublicCard = ({item}) => {

    const randomInt = getRandomIntInclusive(0, 1);

    function redirect() {
        window.open(item.url, '_blank');
    }

    return (
        <div className={classes.card}>
            
            <div className={classes.capCard}>
                <div className={classes.issueDate}>
                    {item.issueDate.slice(0, 10).split('-').reverse().join('.')}
                </div>
                <a className={classes.sourceName} href={item.url} >
                    {item.source.name}
                </a>
            </div>

            <div className={classes.header}>
                {XMLParser(item.title.markup, 'title')}
            </div>

            <CardTag attributes={item.attributes} />

            <img src={gagArr[randomInt]} alt={gagArr[randomInt]} className={classes.desktopImg}/>
            <img src={gagArrMobile[randomInt]} alt={gagArrMobile[randomInt]} className={classes.mobileImg}/>
            <div className={classes.content}>
                {XMLParser(item.content.markup, 'content')}
            </div>

            <div className={classes.wrapper}>
                <button className={classes.urlButton} onClick={redirect}>
                    Читать в источнике
                </button>

                <div className={classes.totalWords}>
                    {item.attributes.wordCount} слова
                </div>
            </div>   
        </div>
    )
}

export default PublicCard;
