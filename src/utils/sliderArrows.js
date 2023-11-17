import arrowLeft from "../assets/image/carouselImage/arrowLeft.svg";
import arrowRight from '../assets/image/carouselImage/arrowRight.svg';

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style }}
        onClick={onClick}
        >
            <img src={arrowRight} alt='arrowRight'/>
        </div>
    );
}
  
function SamplePrevArrow(props) {
const { className, style, onClick } = props;
    return (
        <div
        className={className}
        style={{ ...style  }}
        onClick={onClick}
        >
            <img src={arrowLeft} alt='arrowLeft'/>
        </div>
    );
}

export {SampleNextArrow, SamplePrevArrow}