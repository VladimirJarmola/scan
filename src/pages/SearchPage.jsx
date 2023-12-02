import React from "react";

import classes from '../styles/SearchPage.module.css';

import SearchForm from "../components/SearchForm/SearchForm";

import searchDoc from '../assets/image/search_doc.svg';
import searchPict2 from '../assets/image/search_pict_2.svg';
import searchPict3 from '../assets/image/search_pict_3.svg';

const SearchPage = () => {

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
                    <img src={searchDoc} 
                    alt={searchDoc} 
                    />
                </div>
                <div>
                    <img src={searchPict2} alt={searchPict2} />
                </div>
            </div>
            <div className={classes.inputBox}>
                <SearchForm />
                <div className={classes.imgWrapper}>
                    <img src={searchPict3} alt={searchPict3} />
                </div>
            </div>

            <div className={classes.imgWrapperMobile}>
                    <img src={searchPict3} alt={searchPict3} />
            </div>
            
        </div>
    )
}

export default SearchPage;
