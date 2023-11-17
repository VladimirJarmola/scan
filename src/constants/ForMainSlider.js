import {SampleNextArrow, SamplePrevArrow} from '../utils/sliderArrows';
import watch from '../assets/image/carouselImage/watch.png';
import magnifier from '../assets/image/carouselImage/magnifier.png';
import shield from '../assets/image/carouselImage/shield.png';

const sliderData = [
    {
      id: 0,
      content: 'Высокая и оперативная скорость обработки заявки',
      path: watch,
    },
    {
      id: 1,
      content: 'Огромная комплексная база данных, обеспечивающая объективный ответ на запрос',
      path: magnifier,
    },
    {
      id: 2,
      content: 'Защита конфеденциальных сведений, не подлежащих разглашению по федеральному законодательству',
      path: shield,
    },    
  ]

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 1,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  responsive: [
    {
      breakpoint: 1425,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 1020,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
  ]

};

export {sliderData, settings}