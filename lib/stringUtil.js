(function () {
    'use strict';

    function validateInput(stringToCheck, stringToSearchFor) {
        var validInput;

        if (!stringToCheck || !stringToSearchFor) {
            validInput = false;
        } else {
            if (stringToSearchFor.length > stringToCheck.length) {
                validInput = false;
            } else {
                validInput = true;
            }
        }

        return validInput;
    }

    function indexOfLowerCasing(stringToCheck, stringToSearchFor, fromIndex) {
        stringToCheck = stringToCheck.toLowerCase();
        stringToSearchFor = stringToSearchFor.toLowerCase();

        return stringToCheck.indexOf(stringToSearchFor, fromIndex);
    }

    module.exports = {

        contains: function contains(stringToCheck, stringToSearchFor, ignoreCase) {
            if (!validateInput(stringToCheck, stringToSearchFor)) {
                return false;
            }

            if (ignoreCase) {
                return indexOfLowerCasing(stringToCheck, stringToSearchFor) >= 0;
            }

            return stringToCheck.indexOf(stringToSearchFor) >= 0;
        },

        startsWith: function (stringToCheck, stringToSearchFor, ignoreCase) {
            if (!validateInput(stringToCheck, stringToSearchFor)) {
                return false;
            }

            if (ignoreCase) {
                return indexOfLowerCasing(stringToCheck, stringToSearchFor) === 0;
            }

            return stringToCheck.indexOf(stringToSearchFor) === 0;
        },

        endsWith: function (stringToCheck, stringToSearchFor, ignoreCase) {
            var fromIndex;

            if (!validateInput(stringToCheck, stringToSearchFor)) {
                return false;
            }

            fromIndex = stringToCheck.length - stringToSearchFor.length;

            if (ignoreCase) {
                return indexOfLowerCasing(stringToCheck, stringToSearchFor, fromIndex) !== -1;
            }

            return stringToCheck.indexOf(stringToSearchFor, fromIndex) !== -1;
        }

    };

}());
