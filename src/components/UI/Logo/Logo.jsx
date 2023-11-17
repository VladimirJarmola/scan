import React from 'react';

import { useSelector } from 'react-redux';

import picture from '../../../assets/image/logo.svg';

const Logo = () => {
    const screenSize = useSelector(state => state.screenSize.screenSize);
    const mobileLimit = useSelector(state => state.screenSize.mobileLimit);
    let size = {
        width: 141,
        height: 93,
    }

    if (screenSize <= mobileLimit) {
        size.width = 111
    }

    return (
        <div>
            <img src={picture} alt='логотип компании СКАН' width={size.width} height={size.height} />
        </div>
    );
};

export default Logo;
