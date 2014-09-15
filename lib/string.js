'use strict';

function validateInput(stringToCheck, stringToSearchFor) {
    var validInput;

    if (!stringToCheck || !stringToSearchFor) {
        validInput = false;
    } else {
        return stringToSearchFor.length <= stringToCheck.length;
    }

    return validInput;
}

function contains(stringToCheck, stringToSearchFor, ignoreCase) {
    if (!validateInput(stringToCheck, stringToSearchFor)) {
        return false;
    }

    if (ignoreCase) {
        return module.exports.indexOfIgnoringCase(stringToCheck, stringToSearchFor) >= 0;
    }

    return stringToCheck.indexOf(stringToSearchFor) >= 0;
}

function indexOfIgnoringCase(stringToCheck, stringToSearchFor, fromIndex) {
    stringToCheck = stringToCheck.toLowerCase();
    stringToSearchFor = stringToSearchFor.toLowerCase();

    return stringToCheck.indexOf(stringToSearchFor, fromIndex);
}

function startsWith(stringToCheck, stringToSearchFor, ignoreCase) {
    if (!validateInput(stringToCheck, stringToSearchFor)) {
        return false;
    }

    if (ignoreCase) {
        return module.exports.indexOfIgnoringCase(stringToCheck, stringToSearchFor) === 0;
    }

    return stringToCheck.indexOf(stringToSearchFor) === 0;
}

function endsWith(stringToCheck, stringToSearchFor, ignoreCase) {
    var fromIndex;

    if (!validateInput(stringToCheck, stringToSearchFor)) {
        return false;
    }

    fromIndex = stringToCheck.length - stringToSearchFor.length;

    if (ignoreCase) {
        return module.exports.indexOfIgnoringCase(stringToCheck, stringToSearchFor, fromIndex) !== -1;
    }

    return stringToCheck.indexOf(stringToSearchFor, fromIndex) !== -1;
}

function stripWhitespaces(inputString) {
    var resultString = inputString.trim();

    resultString = resultString.replace(/\s/g, '');

    return resultString;
}

module.exports = {
    contains: contains,
    indexOfIgnoringCase: indexOfIgnoringCase,
    startsWith: startsWith,
    endsWith: endsWith,
    stripWhitespaces: stripWhitespaces
};
