import { CURRENT_DATE_OBJ  } from "../constants/CONSTANTS";

export function validateDate (date, controlDate, type) {
    let result = {valid: false, message: ''};
    let inputDate, controlDateFormated;
    const reDate = /^[0-3][0-9].[0|1][0-9].(19|20)[0-9]{2}/
    const inputDateString = date.split('.').reverse().join('-');
    const controlDateString = controlDate.split('.').reverse().join('-');

    if (date && reDate.test(date)) {
        inputDate = new Date(inputDateString);
    }

    if (date && reDate.test(date)) {
        controlDateFormated = new Date(controlDateString);
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
        case (type === 'start' && inputDate > controlDateFormated):
            result.valid = false;
            result.message = 'Введите корректные данные';
            break;
        case (type === 'end' && inputDate < controlDateFormated):
            result.valid = false;
            result.message = 'Введите корректные данные';
            break;
        default:
            result.valid = true;
            result.message = '';
    }
    return result
}