import React, { useEffect } from 'react';
import Slider from "react-slick";

import { settings } from '../../constants/ForResultSlider';

import Loader from '../UI/Loader/Loader';

import './ResultSlider.css';

const ResultSlider = ({resultSliderData, isLoading}) => {

    const lengthSlider = Object.keys(resultSliderData).length;
    console.log('lengthSlider', lengthSlider)
    useEffect(() => {
        if (settings.slidesToShow >= lengthSlider && lengthSlider !== 0) {
            settings.slidesToShow = lengthSlider - 1;
            settings.responsive.forEach((element, index, array) => {
                if (lengthSlider > array.length) {
                    element.settings.slidesToShow = array.length - index;
                } else {
                    if (lengthSlider - index > 1) {
                        element.settings.slidesToShow = lengthSlider - index - 2;
                        console.log(element.settings.slidesToShow)
                    } else {
                        element.settings.slidesToShow = 1 
                    }
                }              
            })
        } else {
            settings.slidesToShow = 8;
            settings.responsive.forEach((element, index, array) => {
                element.settings.slidesToShow = array.length - index
            })
        }
    }, [lengthSlider])
    
    return (
        <div className='resultSlider' >
            <div className='header'>
                <div>Период</div>
                <div>Всего</div>
                <div>Риски</div>
            </div>

            {isLoading || !lengthSlider
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
                        <div key={slide.date} className='sliderItem'> 
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

export default ResultSlider;
