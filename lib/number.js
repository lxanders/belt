'use strict';

function hasTypeNumber(numberToCheck) {
    return typeof numberToCheck === 'number';
}

function isNumeric(numberToCheck) {
    if(!hasTypeNumber(numberToCheck) || isNaN(numberToCheck)) {
        return false;
    }

    return (numberToCheck - parseFloat(numberToCheck) + 1) >= 0;
}

function isInt(numberToCheck) {
    if(!hasTypeNumber(numberToCheck) || isNaN(numberToCheck)) {
        return false;
    }

    return parseInt(numberToCheck) === numberToCheck;
}

function isFloat(numberToCheck) {
    if(!hasTypeNumber(numberToCheck) || isNaN(numberToCheck)) {
        return false;
    }

    return !isInt(numberToCheck);
}

module.exports = {

    isNumeric: isNumeric,
    isInt: isInt,
    isFloat: isFloat

};
