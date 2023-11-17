import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Slider from "react-slick";

import { settings } from '../../constants/ForResultSlider';

import Loader from '../UI/Loader/Loader';

import './ResultSlider.css';
import './ResultSliderMobile.css';

const ResultSlider = ({resultSliderData, isLoading}) => {
    const screenSize = useSelector(state => state.screenSize.screenSize);
    const mobileLimit = useSelector(state => state.screenSize.mobileLimit);

    const lengthSlider = Object.keys(resultSliderData).length;
    
    useEffect(() => {
        if (
            settings.slidesToShow >= lengthSlider && 
            lengthSlider !== 0
            ) {
            settings.slidesToShow = lengthSlider - 1;
        } else {
            settings.slidesToShow = 8;
        }
    }, [lengthSlider])

    if (screenSize > mobileLimit) {
        return (
            <div className='resultSlider' >
                <div className='header'>
                    <div>Период</div>
                    <div>Всего</div>
                    <div>Риски</div>
                </div>
    
                {isLoading 
                    ?
                    <div className='loadWrapper'>
                        <div className='loader'>
                            <Loader />
                        </div>
                        
                        <div>Загружаем данные</div>
                    </div>
                    :
                    <Slider {...settings}>
                        {resultSliderData.map(slide =>
                            <div key={slide.date}>
                                <div>{slide.date}</div>
                                <div>{slide.value}</div>
                                <div>{slide.riskFactor}</div>
                            </div>
                        )}
                    </Slider>
                }
            </div>
        )
    } else {
        return (
            <div className='resultSliderMobile' >
                <div className='headerMobile'>
                    <div>Период</div>
                    <div>Всего</div>
                    <div>Риски</div>
                </div>
    
                {isLoading 
                    ?
                    <div className='loadWrapperMobile'>
                        <div className='loaderMobile'>
                            <Loader />
                        </div>

                    </div>
                    :
                    <Slider {...settings}>
                        {resultSliderData.map(slide =>
                            <div key={slide.date} className='sliderItemMobile'>
                                <div>{slide.date}</div>
                                <div>{slide.value}</div>
                                <div>{slide.riskFactor}</div>
                            </div>
                        )}
                    </Slider>
                }
            </div>
        )
    }
    
}

export default ResultSlider;
