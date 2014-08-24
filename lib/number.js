'use strict';

function hasTypeNumber(numberToCheck) {
    return typeof numberToCheck === 'number';
}

module.exports = {

    isNumeric: function isNumeric(numberToCheck) {
        if(!hasTypeNumber(numberToCheck) || isNaN(numberToCheck)) {
            return false;
        }

        return (numberToCheck - parseFloat(numberToCheck) + 1) >= 0;
    },

    isInt: function isInt(numberToCheck) {
        if(!hasTypeNumber(numberToCheck) || isNaN(numberToCheck)) {
            return false;
        }

        return parseInt(numberToCheck) === numberToCheck;
    },

    isFloat: function isInt(numberToCheck) {
        if(!hasTypeNumber(numberToCheck) || isNaN(numberToCheck)) {
            return false;
        }

        return !module.exports.isInt(numberToCheck);
    }

};
