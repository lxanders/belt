(function () {
    'use strict';

    module.exports = {

        contains: function contains(stringToCheck, stringToSearchFor) {
            if(!stringToCheck || !stringToSearchFor) {
                return false;
            }

            return stringToCheck.indexOf(stringToSearchFor) >= 0;
        }

    };

}());
