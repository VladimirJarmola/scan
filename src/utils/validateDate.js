import { CURRENT_DATE_OBJ  } from "../constants/CONSTANTS";

export function validateDate (date) {
    let result = {valid: false, message: ''};
    let inputDate; 
    const reDate = /^[0-3][0-9].[0|1][0-9].(19|20)[0-9]{2}/
    const inputDateString = date.split('.').reverse().join('-');

    if (date && reDate.test(date)) {
        inputDate = new Date(inputDateString);
    }

    switch (true) {
        case (!date):
            result.valid = false;
            result.message = 'Обязательное поле';
            break;
        case (!reDate.test(date)):
            result.valid = false;
            result.message = 'Введите корректные данные!';
            break;
        case (CURRENT_DATE_OBJ < inputDate):
            result.valid = false;
            result.message = 'Введите корректные данные';
            break;
        case (date.length > 10):
            result.valid = false;
            result.message = 'Введите корректные данные';
            break;
        default:
            result.valid = true;
            result.message = '';
    }
    return result
}