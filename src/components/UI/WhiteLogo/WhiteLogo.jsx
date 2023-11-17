import React from 'react';
import { useSelector } from 'react-redux';

import picture from '../../../assets/image/white_logo.svg';

const WhiteLogo = () => {
    const screenSize = useSelector(state => state.screenSize.screenSize);
    const mobileLimit = useSelector(state => state.screenSize.mobileLimit);
    let size = {
        width: 160,
        height: 137,
    }
    
    if (screenSize <= mobileLimit) {
        size.width = 111
        size.height = 111
    }

    return (
        <div>
            <img src={picture} alt='логотип компании СКАН' width={size.width} height={size.height} />
        </div>
    );
};

export default WhiteLogo;
