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
                    { stringToCheck: 'the same any', stringToSearchFor: ' any' },
                    { stringToCheck: 'a', stringToSearchFor: 'a', ignoreCase: false },
                    { stringToCheck: 'any', stringToSearchFor: 'any', ignoreCase: false },
                    { stringToCheck: 'any string', stringToSearchFor: 'any', ignoreCase: false },
                    { stringToCheck: 'anything', stringToSearchFor: 'any', ignoreCase: false },
                    { stringToCheck: '  any', stringToSearchFor: 'any', ignoreCase: false },
                    { stringToCheck: 'the same any', stringToSearchFor: 'any', ignoreCase: false },
                    { stringToCheck: 'the same any', stringToSearchFor: ' any', ignoreCase: false },
                    { stringToCheck: 'any', stringToSearchFor: 'any', ignoreCase: false },
                    { stringToCheck: 'ANY', stringToSearchFor: 'ANY', ignoreCase: false },
                    { stringToCheck: 'ANY', stringToSearchFor: 'any', ignoreCase: true },
                    { stringToCheck: 'any', stringToSearchFor: 'any', ignoreCase: true },
                    { stringToCheck: 'ANY', stringToSearchFor: 'ANY', ignoreCase: true },
                    { stringToCheck: 'any', stringToSearchFor: 'ANY', ignoreCase: true },
                    { stringToCheck: 'ANY string', stringToSearchFor: 'any', ignoreCase: true },
                    { stringToCheck: 'any string', stringToSearchFor: 'ANY', ignoreCase: true },
                    { stringToCheck: 'ANYthing', stringToSearchFor: 'any', ignoreCase: true },
                    { stringToCheck: 'anything', stringToSearchFor: 'ANY', ignoreCase: true },
                    { stringToCheck: '  ANY', stringToSearchFor: 'any', ignoreCase: true },
                    { stringToCheck: '  any', stringToSearchFor: 'ANY', ignoreCase: true },
                    { stringToCheck: 'the same ANY', stringToSearchFor: 'any', ignoreCase: true },
                    { stringToCheck: 'the same any', stringToSearchFor: 'ANY', ignoreCase: true },
                    { stringToCheck: 'the same ANY', stringToSearchFor: ' any', ignoreCase: true },
                    { stringToCheck: 'the same any', stringToSearchFor: ' ANY', ignoreCase: true }
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
                    { stringToCheck: ' ', stringToSearchFor: '' },
                    { stringToCheck: 'any', stringToSearchFor: 'anyString', ignoreCase: true },
                    { stringToCheck: 'any', stringToSearchFor: 'a n y', ignoreCase: true },
                    { stringToCheck: 'any', stringToSearchFor: '  any', ignoreCase: true },
                    { stringToCheck: 'any', stringToSearchFor: 'any ', ignoreCase: true },
                    { stringToCheck: undefined, stringToSearchFor: undefined, ignoreCase: true },
                    { stringToCheck: undefined, stringToSearchFor: null, ignoreCase: true },
                    { stringToCheck: undefined, stringToSearchFor: '', ignoreCase: true },
                    { stringToCheck: undefined, stringToSearchFor: 'any', ignoreCase: true },
                    { stringToCheck: null, stringToSearchFor: undefined, ignoreCase: true },
                    { stringToCheck: null, stringToSearchFor: null, ignoreCase: true },
                    { stringToCheck: null, stringToSearchFor: '', ignoreCase: true },
                    { stringToCheck: null, stringToSearchFor: 'any', ignoreCase: true },
                    { stringToCheck: 'any', stringToSearchFor: undefined, ignoreCase: true },
                    { stringToCheck: 'any', stringToSearchFor: null, ignoreCase: true },
                    { stringToCheck: 'any', stringToSearchFor: '', ignoreCase: true },
                    { stringToCheck: 'any', stringToSearchFor: ' ', ignoreCase: true },
                    { stringToCheck: '', stringToSearchFor: '', ignoreCase: true },
                    { stringToCheck: ' ', stringToSearchFor: '', ignoreCase: true },
                    { stringToCheck: 'ANY', stringToSearchFor: 'any', ignoreCase: false },
                    { stringToCheck: 'any', stringToSearchFor: 'ANY', ignoreCase: false },
                    { stringToCheck: 'ANY string', stringToSearchFor: 'any', ignoreCase: false },
                    { stringToCheck: 'any string', stringToSearchFor: 'ANY', ignoreCase: false },
                    { stringToCheck: 'ANYthing', stringToSearchFor: 'any', ignoreCase: false },
                    { stringToCheck: 'anything', stringToSearchFor: 'ANY', ignoreCase: false },
                    { stringToCheck: '  ANY', stringToSearchFor: 'any', ignoreCase: false },
                    { stringToCheck: '  any', stringToSearchFor: 'ANY', ignoreCase: false },
                    { stringToCheck: 'the same ANY', stringToSearchFor: 'any', ignoreCase: false },
                    { stringToCheck: 'the same any', stringToSearchFor: 'ANY', ignoreCase: false },
                    { stringToCheck: 'the same ANY', stringToSearchFor: ' any', ignoreCase: false },
                    { stringToCheck: 'the same any', stringToSearchFor: ' ANY', ignoreCase: false }
                ];

            containedTestCases.forEach(function (testCase) {
                it('should return true for "' + testCase.stringToCheck + '" contains "' + testCase.stringToSearchFor + '" if ignoreCase = ' + testCase.ignoreCase, function () {
                    expect(stringUtil.contains(testCase.stringToCheck, testCase.stringToSearchFor, testCase.ignoreCase)).to.be.equal(true);
                });
            });

            notContainedTestCases.forEach(function (testCase) {
                it('should return false for "' + testCase.stringToCheck + '" contains "' + testCase.stringToSearchFor + '" if ignoreCase = ' + testCase.ignoreCase, function () {
                    expect(stringUtil.contains(testCase.stringToCheck, testCase.stringToSearchFor, testCase.ignoreCase)).to.not.equal(true);
                });
            });

        });

        describe('startsWith', function () {

            var startsWithTestCases = [
                    { stringToCheck: 'a', stringToSearchFor: 'a' },
                    { stringToCheck: 'any', stringToSearchFor: 'any' },
                    { stringToCheck: ' any', stringToSearchFor: ' any' },
                    { stringToCheck: 'any string', stringToSearchFor: 'any' },
                    { stringToCheck: 'anything', stringToSearchFor: 'any' },
                    { stringToCheck: 'this is quite some sentence', stringToSearchFor: 'this is quite' }
                ],
                doesntStartWithTestCases = [
                    { stringToCheck: '  any', stringToSearchFor: 'any' },
                    { stringToCheck: 'the same any', stringToSearchFor: 'any' },
                    { stringToCheck: 'the same any', stringToSearchFor: ' any' },
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

            startsWithTestCases.forEach(function (testCase) {
                it('should return true for "' + testCase.stringToCheck + '" startsWith "' + testCase.stringToSearchFor + '" if ignoreCase = ' + testCase.ignoreCase, function () {
                    expect(stringUtil.startsWith(testCase.stringToCheck, testCase.stringToSearchFor, testCase.ignoreCase)).to.be.equal(true);
                });
            });

            doesntStartWithTestCases.forEach(function (testCase) {
                it('should return false for "' + testCase.stringToCheck + '" startsWith "' + testCase.stringToSearchFor + '" if ignoreCase = ' + testCase.ignoreCase, function () {
                    expect(stringUtil.startsWith(testCase.stringToCheck, testCase.stringToSearchFor, testCase.ignoreCase)).to.not.equal(true);
                });
            });

        });

        describe('endsWith', function () {

            var endsWithTestCases = [
                    { stringToCheck: 'a', stringToSearchFor: 'a' },
                    { stringToCheck: 'any', stringToSearchFor: 'any' },
                    { stringToCheck: ' any', stringToSearchFor: ' any' },
                    { stringToCheck: '  any', stringToSearchFor: 'any' },
                    { stringToCheck: '     ', stringToSearchFor: ' ' },
                    { stringToCheck: 'the same any', stringToSearchFor: 'any' },
                    { stringToCheck: 'the same any', stringToSearchFor: ' any' }
                ],
                doesntEndWithTestCases = [
                    { stringToCheck: 'any string', stringToSearchFor: 'any' },
                    { stringToCheck: 'anything', stringToSearchFor: 'any' },
                    { stringToCheck: 'this is quite some sentence', stringToSearchFor: 'this is quite' },
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
                    { stringToCheck: ' ', stringToSearchFor: '' },
                    { stringToCheck: 'this is short', stringToSearchFor: 'this is really somewhat longer' }
                ];

            endsWithTestCases.forEach(function (testCase) {
                it('should return true for "' + testCase.stringToCheck + '" endsWith "' + testCase.stringToSearchFor + '" if ignoreCase = ' + testCase.ignoreCase, function () {
                    expect(stringUtil.endsWith(testCase.stringToCheck, testCase.stringToSearchFor, testCase.ignoreCase)).to.be.equal(true);
                });
            });

            doesntEndWithTestCases.forEach(function (testCase) {
                it('should return false for "' + testCase.stringToCheck + '" endsWith "' + testCase.stringToSearchFor + '" if ignoreCase = ' + testCase.ignoreCase, function () {
                    expect(stringUtil.endsWith(testCase.stringToCheck, testCase.stringToSearchFor, testCase.ignoreCase)).to.not.equal(true);
                });
            });

        });

    });

}());
