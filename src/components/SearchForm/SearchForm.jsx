import React from "react";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { validateINN } from "../../utils/validateINN";
import { validateQuantityPages } from "../../utils/validateQuantityPages";
import { validateDate } from "../../utils/validateDate";
import { addRequestBodyAction } from '../../store/requestBodyReducer';
import { createRequestBody } from '../../utils/createRequestBody';

import classes from './SearchForm.module.css';

const SearchForm = () => {

    const [dateObject, setDateObject] = useState({
        typeStart: 'text', 
        typeEnd: 'text',
        placeholderStart: 'Дата начала', 
        placeholderEnd: 'Дата конца', 
        valueFormated: ''
    });

    const [objectSearch, setObjectSearch] = useState({
        INN: '',
        innEntry: false,
        tonality: 'any',
        quantityPages: '',
        quantityPagesEntry: false,
        tripStart: '',
        tripStartEntry: false,
        tripEnd: '',
        tripEndEntry: false,
        maxFullness: true,
        inBusinessNews: true,
        onlyMainRole: true,
        includCalendar: true,
        onlyWithRiskFactors: false,
        excludeTechNews: false,
        excludeAnnouncements: true,
        excludeDigests: false,
        queryValid: false,
    });
    
    const history = useHistory();

    const dispatch = useDispatch();
    
    // Валидация полей
        // поле ввода инн
    const [validationResultINN, setValidationResultINN] = useState({});
        // поле ввода количества документов в выдаче
    const [validQuantityPages, setValidQuantityPages] = useState({});
        // поле ввода даты начала диапазона поиска
    const [validTripStart, setValidTripStart] = useState({});
        // поле ввода даты окончания диапазона поиска
    const [validTripEnd, setValidTripEnd] = useState({});

    const blurHandler = (event) => {
        switch (event.target.name) {
            case 'INN':
                setObjectSearch({...objectSearch, innEntry: true});
                break;
            case 'quantityPages':
                setObjectSearch({...objectSearch, quantityPagesEntry: true});
                break;
            case 'tripStart':
                setObjectSearch({...objectSearch, tripStartEntry: true, tripStart: dateObject.valueFormated});
                setDateObject({...dateObject, typeStart: 'text'})
                break;
            case 'tripEnd':
                setObjectSearch({...objectSearch, tripEndEntry: true, tripEnd: dateObject.valueFormated});
                setDateObject({...dateObject, typeEnd: 'text'})
                break;
        }
    }

    const handler = (event) => {
        const {name, value} = event.target;
    
        if (name === 'tripStart' || name === 'tripEnd') {
            let valueFormated = value.split('-').reverse().join('.');
            setDateObject({...dateObject, valueFormated: valueFormated})
            setObjectSearch({...objectSearch, [name]: value });
        } else {
            setObjectSearch({...objectSearch, [name]: value });
        }
    }

    useEffect(() => {
        setValidationResultINN(validateINN(objectSearch.INN));
        setValidQuantityPages(validateQuantityPages(objectSearch.quantityPages));
        setValidTripStart(validateDate(objectSearch.tripStart, objectSearch.tripEnd, 'start'));
        setValidTripEnd(validateDate(objectSearch.tripEnd, objectSearch.tripStart, 'end'));
        if (validationResultINN.result && validQuantityPages.valid && validTripStart.valid && validTripEnd.valid) {
            setObjectSearch({...objectSearch, 
                queryValid: true,              
            });
        } else {
            setObjectSearch({...objectSearch, 
                queryValid: false,              
            });
        }
    }, [
        objectSearch.INN, 
        objectSearch.quantityPages, 
        objectSearch.tripStart, 
        objectSearch.tripEnd, 
        validationResultINN.result, 
        validQuantityPages.valid, 
        validTripStart.valid, 
        validTripEnd.valid
    ]);

    const search = (event) => {
        event.preventDefault();
        const requestBody = createRequestBody(objectSearch);
        dispatch(addRequestBodyAction(requestBody));
        history.push('/result');
    }

    return (
        <form className={classes.inputBoxForm}>
            <div className={classes.inputGrp}>
                <div className={classes.inputItem}>
                    <label htmlFor="INN">ИНН компании*</label>
                    <input 
                        className={
                            !objectSearch.innEntry || validationResultINN.result ? classes.inputValid : classes.inputInValid
                        }
                        type="text" 
                        name="INN" 
                        placeholder="10 цифр"
                        onBlur={e => blurHandler(e)}
                        value={objectSearch.INN}
                        onChange={e => handler(e)} 
                    />
                </div>
                {(objectSearch.innEntry && !validationResultINN.result) && 
                    <div className={classes.error}> 
                        {validationResultINN.error.message}
                    </div>}
                

                <div className={classes.inputItem}>
                    <span> Тональность</span>
                    <select className={classes.tonality} name='tonality' value={objectSearch.tonality} onChange={e => handler(e)} required>
                        <option value='positive'>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Позитивная
                        </option>
                        <option value='negative'>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Негативная
                        </option>
                        <option value='any'>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Любая
                        </option>
                    </select>
                </div>

                <div className={classes.inputItem}>
                    <label htmlFor="quantityPages">Количество документов в выдаче*</label>
                    <input 
                        className={
                            !objectSearch.quantityPagesEntry || validQuantityPages.valid ? classes.inputValid : classes.inputInValid
                        } 
                        type="text" 
                        name="quantityPages" 
                        onBlur={e => blurHandler(e)}
                        value={objectSearch.quantityPages}
                        onChange={e => handler(e)}
                        placeholder="от 1 до 1000"/>
                </div>
                {(objectSearch.quantityPagesEntry && !validQuantityPages.valid) && 
                    <div className={classes.error}> 
                        {validQuantityPages.message}
                    </div>}
                
                <div className={classes.inputDate}>
                    <span>Диапазон поиска*</span>
                    <div className={classes.wrapperInputDate}>
                        <input
                            className={
                                !objectSearch.tripStartEntry || validTripStart.valid 
                                ? classes.inputDateFieldValid 
                                : classes.inputDateFieldInValid
                            }
                            placeholder={dateObject.placeholderStart} 
                            type={dateObject.typeStart} 
                            name="tripStart" 
                            required 
                            onFocus={e => setDateObject({...dateObject, typeStart: 'date'})}
                            onBlur={e => blurHandler(e)}
                            onChange={e => handler(e)}
                            value={objectSearch.tripStart} 
                            min="2000-01-01"
                        />
                        <input 
                            className={
                                !objectSearch.tripEndEntry || validTripEnd.valid 
                                ? classes.inputDateFieldValid 
                                : classes.inputDateFieldInValid
                            }
                            placeholder={dateObject.placeholderEnd} 
                            type={dateObject.typeEnd} 
                            name="tripEnd"   
                            required
                            onFocus={e => setDateObject({...dateObject, typeEnd: 'date'})}
                            onBlur={e => blurHandler(e)}
                            onChange={e => handler(e)}
                            value={objectSearch.tripEnd}
                            min="2000-01-01"
                        />
                    </div>                
                </div>
                {((objectSearch.tripEndEntry && !validTripEnd.valid) || (objectSearch.tripStartEntry && !validTripStart.valid)) && 
                    <div className={classes.error}> 
                        { validTripStart.valid ? validTripEnd.message : validTripStart.message }
                    </div>}  

                <div className={classes.btnGrpMobile}>
                    <button 
                        className={classes.btnMobile} 
                        disabled={!objectSearch.queryValid}
                        onClick={search}
                    >
                        Поиск
                    </button>
                    <span>* Обязательные к заполнению поля</span>
                </div>

            </div> 

            <div className={classes.chkbxGrp}>

                <label className={classes.chkbx}>Признак максимальной полноты
                    <input 
                        className={classes.chkbx_input} 
                        type="checkbox" id="maxFullness" 
                        checked={objectSearch.maxFullness} 
                        onChange={() => setObjectSearch(
                                {...objectSearch, maxFullness: !objectSearch.maxFullness}
                            )
                        } 
                    />
                    <span className={classes.checkmark}></span>
                </label>

                <label className={classes.chkbx}>Упоминания в бизнес-контексте
                    <input 
                        className={classes.chkbx_input} 
                        type="checkbox" id="inBusinessNews" 
                        checked={objectSearch.inBusinessNews} 
                        onChange={() => setObjectSearch(
                                {...objectSearch, inBusinessNews: !objectSearch.inBusinessNews}
                            )
                        }
                    />
                    <span className={classes.checkmark}></span>
                </label>

                <label className={classes.chkbx}>Главная роль в публикации
                    <input 
                        className={classes.chkbx_input} 
                        type="checkbox" id="onlyMainRole" 
                        checked={objectSearch.onlyMainRole} 
                        onChange={() => setObjectSearch(
                                {...objectSearch, onlyMainRole: !objectSearch.onlyMainRole}
                            )
                        }
                    />
                    <span className={classes.checkmark}></span>
                </label>

                <label className={classes.chkbx_disabled}>Публикации только с риск-факторами
                    <input className={classes.chkbx_input} type="checkbox" id="onlyWithRiskFactors" disabled/>
                    <span className={classes.checkmark}></span>
                </label>

                <label className={classes.chkbx_disabled}>Включать технические новости рынков
                    <input className={classes.chkbx_input} type="checkbox" id="excludeTechNews" disabled/>
                    <span className={classes.checkmark}></span>
                </label>

                <label className={classes.chkbx}>Включать анонсы и календари
                    <input 
                        className={classes.chkbx_input} 
                        type="checkbox" 
                        id="includCalendar" 
                        checked={objectSearch.excludeAnnouncements} 
                        onChange={() => setObjectSearch(
                                {...objectSearch, excludeAnnouncements: !objectSearch.excludeAnnouncements}
                            )
                        }
                    />
                    <span className={classes.checkmark}></span>
                </label>

                <label className={classes.chkbx_disabled}>Включать сводки новостей
                    <input className={classes.chkbx_input} type="checkbox" id="excludeDigests" disabled />
                    <span className={classes.checkmark}></span>
                </label>

                <div className={classes.btnGrp}>
                    <button 
                        className={classes.btn} 
                        disabled={!objectSearch.queryValid}
                        onClick={search}
                    >
                        Поиск
                    </button>
                    <span>* Обязательные к заполнению поля</span>
                </div>
            </div>      
        </form>
    )
};

export default SearchForm;
