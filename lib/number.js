'use strict';

function hasTypeNumber(numberToCheck) {
    return typeof numberToCheck === 'number';
}

module.exports = {

    isNumeric: function isNumeric(numberToCheck) {
        if (Array.isArray(numberToCheck)) {
            return false;
        }

        return (numberToCheck - parseFloat(numberToCheck) + 1) >= 0;
    }
    }

};
