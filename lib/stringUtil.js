(function () {
    'use strict';

    function validateInput(stringToCheck, stringToSearchFor) {
        return stringToCheck && stringToSearchFor;
    }

    function indexOfLowerCasing(stringToCheck, stringToSearchFor) {
        stringToCheck = stringToCheck.toLowerCase();
        stringToSearchFor = stringToSearchFor.toLowerCase();

        return stringToCheck.indexOf(stringToSearchFor);
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
        }

    };

}());
