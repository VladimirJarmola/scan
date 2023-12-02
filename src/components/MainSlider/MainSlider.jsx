import React from "react";
import { useSelector } from "react-redux";

import Slider from "react-slick";

import Slide from "../Slide/Slide";

import { sliderData, settings } from "../../constants/ForMainSlider";

import './MainSlider.css';  

function MainSlider() {
  
  return (
    <div className='mainSlider' >
      <Slider {...settings}>
      
        {sliderData.concat(sliderData).map(slide => 
          <Slide id={slide.id} content={slide.content} path={slide.path} key={slide.id}/>
        )}
      
      </Slider>
    </div>
  );
}

export default MainSlider;
