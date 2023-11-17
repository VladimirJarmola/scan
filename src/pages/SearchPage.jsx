import React from "react";
import { useSelector } from "react-redux";

import classes from '../styles/SearchPage.module.css';
import mobileClasses from '../styles/SearchPageMobile.module.css';

import SearchForm from "../components/SearchForm/SearchForm";

import searchDoc from '../assets/image/search_doc.svg';
import searchPict2 from '../assets/image/search_pict_2.svg';
import searchPict3 from '../assets/image/search_pict_3.svg';

const SearchPage = () => {
    const screenSize = useSelector(state => state.screenSize.screenSize);
    const mobileLimit = useSelector(state => state.screenSize.mobileLimit);

    if (screenSize > mobileLimit) {
        return (
            <div className="body">
                <div className={classes.searchHead}>
                    <p>Найдите необходимые данные в пару кликов.</p>
                </div>
                <div className={classes.wrapper}>
                    <div className={classes.content}>
                        <span> Задайте параметры поиска. </span>
                        <br/>
                        <span>Чем больше заполните, тем точнее поиск</span>
                    </div>
                    <div>
                        <img src={searchDoc} alt={searchDoc} />
                    </div>
                    <div>
                        <img src={searchPict2} alt={searchPict2} />
                    </div>
                </div>
                <div className={classes.inputBox}>
                    <SearchForm />
                    <div>
                        <img src={searchPict3} alt={searchPict3} />
                    </div>
                </div>
                
            </div>
        )
    } else {
        return (
            <div className="body">
                <div className={mobileClasses.searchHead}>
                    <p>Найдите необходимые данные в пару кликов.</p>
                </div>
                <div className={mobileClasses.wrapper}>
                    <div className={mobileClasses.content}>
                        <span> Задайте параметры поиска. </span>
                        <br/>
                        <span>Чем больше заполните, тем точнее поиск</span>
                    </div>
                    <img src={searchDoc} alt={searchDoc} className={mobileClasses.imgDocStyle}/>
                </div>
                <SearchForm />
                <div className={mobileClasses.imgWrapper}>
                    <img src={searchPict3} alt={searchPict3} />
                </div>
            </div>
        )
    }



}

export default SearchPage;
