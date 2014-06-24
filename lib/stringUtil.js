(function () {
    'use strict';

    module.exports = {

        contains: function contains(stringToCheck, stringToSearchFor, ignoreCase) {
            if(!stringToCheck || !stringToSearchFor) {
                return false;
            }

            if(ignoreCase) {
                stringToCheck = stringToCheck.toLowerCase();
                stringToSearchFor = stringToSearchFor.toLowerCase();
            }

            return stringToCheck.indexOf(stringToSearchFor) >= 0;
        }

    };

}());
