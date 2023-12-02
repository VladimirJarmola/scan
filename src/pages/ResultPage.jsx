import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import Services from "../API/Services";
import { 
    sumFunc, 
    resultSliderDataFanc, 
    createIdArray 
} from '../utils/resultFunc';

import ResultSlider from '../components/ResultSlider/ResultSlider';
import PublicCardList from '../components/PublicCardList/PublicCardList';

import classes from '../styles/ResultPage.module.css';

import resultPict1 from '../assets/image/result_pict_1.svg';

const ResultPage = () => {
    // управление загрузкой в слайдере
    const [isLoading, setIsLoading] = useState(true);
    // Был ли запрос, для обработки пустыхо ответов
    const [wasRequest, setWasRequest] = useState(false);
    // полученный объект по запросу /api/v1/objectsearch/histograms
    const [histograms, setHistograms] = useState({});
    // общее кол-во документов в запросе /api/v1/objectsearch/histograms
    const [total, setTotal] = useState(0);
    // преобразованный массив для слайдера
    const [resultSliderData, setResultSliderData] = useState({});
    // ответ по запросу /api/v1/objectsearch, массив ID
    const [IdArray, setIdArray] = useState([]);
    //количество отображаемых публикаций
    const [numberOfPages, setNumberOfPages] = useState(10);
    // выключатель кнопки
    const [buttonVisibility, setButtonVisibility] = useState(false);
    // ответ по запросу /api/v1/documents
    const [scanDocObj, setScanDocObj] = useState([]);

    const history = useHistory();

    // объект запроса со страницы SearchPage
    const requestBody = useSelector(state => state.requestBody.requestBody);

    if (!requestBody) {
        history.push('/search');
    } else if (Object.keys(histograms).length === 0 && !wasRequest) {
        getHistograms();
        getObjectsID();
    } else if (Object.keys(histograms).length !== 0 && total === 0 && !wasRequest) {
        setTotal(sumFunc(histograms.totalDocuments));
        setResultSliderData(resultSliderDataFanc(histograms));
        setIsLoading(false);   
        setWasRequest(true);     
    } 
    
    useEffect(() => {
        
        if (IdArray.length !== 0 ) {
            if (IdArray.length > numberOfPages) {
                setButtonVisibility(true)
            } else {setButtonVisibility(false)}
            const partOfEncodedIdList = IdArray.slice(numberOfPages - 10, numberOfPages);
            getScanDocList(partOfEncodedIdList);
        } 
    }, [
        IdArray, 
        numberOfPages,
    ]);

    async function getHistograms() {
        const token = localStorage.getItem('accessToken');
        const histogramsData = await Services.getHistograms(requestBody, token);
        setHistograms(histogramsData);
    }

    async function getObjectsID() {
        const token = localStorage.getItem('accessToken');
        const objectsIDRequest = await Services.getObjectID(requestBody, token);
        setIdArray(createIdArray(objectsIDRequest));
    }

    async function getScanDocList(partArr) {
        const token = localStorage.getItem('accessToken');
        let requestBody = {
            "ids": []
        };
        requestBody.ids = partArr;
        const scanDocRequest = await Services.getScanDocList(requestBody, token);
        setScanDocObj(scanDocObj.concat(scanDocRequest));
    }

    const getNextPagesHandler = () => {
        if (IdArray.length > numberOfPages) {
            setNumberOfPages(numberOfPages + 10)
        }         
    }

    return (
        <div className='body'>

            <div className={classes.intro}>
                <div className={classes.title}>
                    <p>Ищем. Скоро будут результаты</p>
                    <span>Поиск может занять некоторое время, <br/>
                        просим сохранять терпение.</span>
                </div>
                <div className={classes.image}>
                    <img src={resultPict1} alt={resultPict1} /> 
                </div>            
            </div>

            <div className={classes.generalSummery}>
                <p>Общая сводка</p>
                <span>Найдено {total} вариантов </span>
                <ResultSlider isLoading={isLoading} resultSliderData={resultSliderData} />
            </div>
                
            <div className={classes.docList}>
                <p>список документов</p>
                <PublicCardList scanDocObj={scanDocObj}/> 
            </div>
            
            <div className={classes.btnWrapper}>
                {
                    buttonVisibility
                        ?
                    <button className={classes.btn} onClick={getNextPagesHandler}>
                        Показать больше
                    </button>
                        :
                    <div></div>
                }
                
            </div>
        </div>
    )    
}

export default ResultPage;
