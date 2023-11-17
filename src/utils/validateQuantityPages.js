export function validateQuantityPages (quantity) {
    let result = {valid: false, message: ''};
    const reQuantity = /^([1-9][0-9]{0,2}|1000)$/;
    if (!quantity) {
        result.valid = false;
        result.message = 'Обязательное поле';
    } else if (reQuantity.test(quantity)) {
        result.valid = true;
        result.message = '';
    } else {
        result.valid = false;
        result.message = 'Введите корректные данные';
    }

    return result
}