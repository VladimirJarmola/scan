function sumFunc(array) {
    let result = 0;
    for (let i = 0; i < array.length; i++)
        result += array[i].value;
    return result
}

function resultSliderDataFanc(obj) {
    let resultArray = [];
    obj.totalDocuments.forEach(element => {
        let risk = obj.riskFactors.find(item => item.date === element.date); 
        element.date = element.date.slice(0, 10).split('-').reverse().join('.');
        resultArray.push({...element, riskFactor: risk.value});
    });
    return resultArray
}

function createIdArray(obj) {
    let resultArray = [];
    obj.forEach(element => {
        resultArray.push(element.encodedId)
    })
    return resultArray
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; 
  }

export {
    sumFunc,
    resultSliderDataFanc,
    createIdArray,
    getRandomIntInclusive,
}