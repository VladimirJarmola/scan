import React from 'react';
import { useSelector } from 'react-redux';

import CardTag from '../UI/CardTag/CardTag';

import { XMLParser } from '../../utils/XMLParser';
import { gagArr, gagArrMobile } from '../../constants/CONSTANTS';
import { getRandomIntInclusive } from '../../utils/resultFunc';

import classes from './PublicCard.module.css';
import mobileClasses from './PublicCardMobile.module.css';

const PublicCard = ({item}) => {
    const screenSize = useSelector(state => state.screenSize.screenSize);
    const mobileLimit = useSelector(state => state.screenSize.mobileLimit);

    const randomInt = getRandomIntInclusive(0, 1);

    function redirect() {
        window.open(item.url, '_blank');
    }

    if (screenSize > mobileLimit) {
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
    
                <img src={gagArr[randomInt]} alt={gagArr[randomInt]} />
    
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
    } else {
        return (
            <div className={mobileClasses.card}>
                <div className={mobileClasses.capCard}>
                    <div className={mobileClasses.issueDate}>
                        {item.issueDate.slice(0, 10).split('-').reverse().join('.')}
                    </div>
                    <a className={mobileClasses.sourceName} href={item.url} >
                        {item.source.name}
                    </a>
                </div>
    
                <div className={mobileClasses.header}>
                    {XMLParser(item.title.markup, 'title')}
                </div>
    
                <CardTag attributes={item.attributes} style={{marginLeft: '24px'}} />
    
                <img src={gagArrMobile[randomInt]} alt={gagArrMobile[randomInt]} style={{paddingLeft: '24px'}}/>
    
                <div className={mobileClasses.content}>
                    {XMLParser(item.content.markup, 'content')}
                </div>
    
                <div className={mobileClasses.wrapper}>
                    <button className={mobileClasses.urlButton} onClick={redirect}>
                        Читать в источнике
                    </button>
    
                    <div className={mobileClasses.totalWords}>
                        {item.attributes.wordCount} слова
                    </div>
                </div>   
            </div>
        )
    }
}

export default PublicCard;
