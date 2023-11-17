import gag1 from '../assets/image/gag1.svg';
import gag2 from '../assets/image/gag2.svg';
import gag3 from '../assets/image/gag3.svg';
import gag4 from '../assets/image/gag4.svg';

const gagArr = [gag1, gag2];
const gagArrMobile = [gag3, gag4];

const CURRENT_DATE_OBJ = new Date();
const CURRENT_DATE_STRFORMAT = CURRENT_DATE_OBJ.toISOString().slice(0, 10);

let EXPIRE_DATE = null;
if (localStorage.getItem('expire')) {
    EXPIRE_DATE = localStorage.getItem('expire').slice(0, 10)
};

export { 
    CURRENT_DATE_OBJ, 
    CURRENT_DATE_STRFORMAT,
    EXPIRE_DATE,
    gagArr,
    gagArrMobile
}