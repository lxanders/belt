(function () {
    'use strict';

    var chai = require('chai'),
        expect = chai.expect,
        stringUtil = require('../../../lib/stringUtil');

    describe('stringUtil', function () {

        describe('contains', function () {

            var containedTestCases = [
                    { stringToCheck: 'a', stringToSearchFor: 'a' },
                    { stringToCheck: 'any', stringToSearchFor: 'any' },
                    { stringToCheck: 'any string', stringToSearchFor: 'any' },
                    { stringToCheck: 'anything', stringToSearchFor: 'any' },
                    { stringToCheck: '  any', stringToSearchFor: 'any' },
                    { stringToCheck: 'the same any', stringToSearchFor: 'any' },
                    { stringToCheck: 'the same any', stringToSearchFor: ' any' }
                ],
                notContainedTestCases = [
                    { stringToCheck: 'any', stringToSearchFor: 'anyString' },
                    { stringToCheck: 'any', stringToSearchFor: 'a n y' },
                    { stringToCheck: 'any', stringToSearchFor: '  any' },
                    { stringToCheck: 'any', stringToSearchFor: 'any ' },
                    { stringToCheck: undefined, stringToSearchFor: undefined },
                    { stringToCheck: undefined, stringToSearchFor: null },
                    { stringToCheck: undefined, stringToSearchFor: '' },
                    { stringToCheck: undefined, stringToSearchFor: 'any' },
                    { stringToCheck: null, stringToSearchFor: undefined },
                    { stringToCheck: null, stringToSearchFor: null },
                    { stringToCheck: null, stringToSearchFor: '' },
                    { stringToCheck: null, stringToSearchFor: 'any' },
                    { stringToCheck: 'any', stringToSearchFor: undefined },
                    { stringToCheck: 'any', stringToSearchFor: null },
                    { stringToCheck: 'any', stringToSearchFor: '' },
                    { stringToCheck: 'any', stringToSearchFor: ' ' },
                    { stringToCheck: '', stringToSearchFor: '' },
                    { stringToCheck: ' ', stringToSearchFor: '' }
                ];

            containedTestCases.forEach(function (testCase) {
                it('shoud return true for "' + testCase.stringToCheck + '" contains "' + testCase.stringToSearchFor + '"', function () {
                    expect(stringUtil.contains(testCase.stringToCheck, testCase.stringToSearchFor)).to.be.true;
                });
            });

            notContainedTestCases.forEach(function (testCase) {
                it('shoud return false for "' + testCase.stringToCheck + '" contains "' + testCase.stringToSearchFor + '"', function () {
                    expect(stringUtil.contains(testCase.stringToCheck, testCase.stringToSearchFor)).to.not.be.true;
                });
            });

        });

    });

}());
