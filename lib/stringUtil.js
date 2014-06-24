(function () {
    'use strict';

    function validateInput(stringToCheck, stringToSearchFor) {
        return stringToCheck && stringToSearchFor;
    }

    module.exports = {

        contains: function contains(stringToCheck, stringToSearchFor, ignoreCase) {
            if (!validateInput(stringToCheck, stringToSearchFor)) {
                return false;
            }

            if (ignoreCase) {
                stringToCheck = stringToCheck.toLowerCase();
                stringToSearchFor = stringToSearchFor.toLowerCase();
            }

            return stringToCheck.indexOf(stringToSearchFor) >= 0;
        }

    };

}());
