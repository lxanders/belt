'use strict';

var chai = require('chai'),
    expect = chai.expect,
    numberUtil = require('../../../lib/number');

describe('number', function () {

    describe('isNumeric', function () {

        var validNumbersTestCases = [
                { numberToCheck: -1 },
                { numberToCheck: 0 },
                { numberToCheck: 1 },
                { numberToCheck: 0.1 },
                { numberToCheck: -0.1 },
                { numberToCheck: 0xFF },
                { numberToCheck: 0x0 },
                { numberToCheck: -0xFF },
                { numberToCheck: 1e0 },
                { numberToCheck: 0e0 },
                { numberToCheck: -1e0 },
                { numberToCheck: 1e-1 },
                { numberToCheck: 1.1e0 },
                { numberToCheck: 0.0e0 },
                { numberToCheck: -1.1e0 }

            ],

            invalidNumbersTestCases = [
                { numberToCheck: null },
                { numberToCheck: undefined },
                { numberToCheck: '' },
                { numberToCheck: ' ' },
                { numberToCheck: 'any string' },
                { numberToCheck: '0a' },
                { numberToCheck: 'a0' },
                { numberToCheck: '0a0' },
                { numberToCheck: {} },
                { numberToCheck: { any: 'thing' } },
                { numberToCheck: { any: 1 } },
                { numberToCheck: [] },
                { numberToCheck: [0] },
                { numberToCheck: true },
                { numberToCheck: false },
                { numberToCheck: '\n' },
                { numberToCheck: NaN },
                { numberToCheck: function () {} },
                { numberToCheck: new Date() },
                { numberToCheck: new RegExp() }
            ];

        validNumbersTestCases.forEach(function (testCase) {
            it('should return true for "' + testCase.numberToCheck + '"', function () {
                expect(numberUtil.isNumeric(testCase.numberToCheck)).to.equal(true);
            });
        });

        invalidNumbersTestCases.forEach(function (testCase) {
            it('should return false for "' + testCase.numberToCheck + '"', function () {
                expect(numberUtil.isNumeric(testCase.numberToCheck)).to.equal(false);
            });
        });

    });

    describe('isInt', function () {

        var validNumbersTestCases = [
                { numberToCheck: -1 },
                { numberToCheck: 0 },
                { numberToCheck: 1 },
                { numberToCheck: 0xFF },
                { numberToCheck: 0x0 },
                { numberToCheck: -0xFF },
                { numberToCheck: 0.0e0 },
                { numberToCheck: 1e0 },
                { numberToCheck: 0e0 },
                { numberToCheck: -1e0 }
            ],

            invalidNumbersTestCases = [
                { numberToCheck: 0.1 },
                { numberToCheck: -0.1 },
                { numberToCheck: 1e-1 },
                { numberToCheck: 1.1e0 },
                { numberToCheck: -1.1e0 },
                { numberToCheck: null },
                { numberToCheck: undefined },
                { numberToCheck: '' },
                { numberToCheck: ' ' },
                { numberToCheck: 'any string' },
                { numberToCheck: '0a' },
                { numberToCheck: 'a0' },
                { numberToCheck: '0a0' },
                { numberToCheck: {} },
                { numberToCheck: { any: 'thing' } },
                { numberToCheck: { any: 1 } },
                { numberToCheck: [] },
                { numberToCheck: [0] },
                { numberToCheck: true },
                { numberToCheck: false },
                { numberToCheck: '\n' },
                { numberToCheck: NaN },
                { numberToCheck: function () {} },
                { numberToCheck: new Date() },
                { numberToCheck: new RegExp() }
            ];

        validNumbersTestCases.forEach(function (testCase) {
            it('should return true for "' + testCase.numberToCheck + '"', function () {
                expect(numberUtil.isInt(testCase.numberToCheck)).to.equal(true);
            });
        });

        invalidNumbersTestCases.forEach(function (testCase) {
            it('should return false for "' + testCase.numberToCheck + '"', function () {
                expect(numberUtil.isInt(testCase.numberToCheck)).to.equal(false);
            });
        });

    });

    describe('isFloat', function () {

        var validNumbersTestCases = [
                { numberToCheck: 0.1 },
                { numberToCheck: -0.1 },
                { numberToCheck: 1e-1 },
                { numberToCheck: 1.1e0 },
                { numberToCheck: -1.1e0 },
                { numberToCheck: Number.MAX_VALUE - 0.1 },
                { numberToCheck: Number.MIN_VALUE - 0.1 }
            ],

            invalidNumbersTestCases = [
                { numberToCheck: -1 },
                { numberToCheck: 0 },
                { numberToCheck: 1 },
                { numberToCheck: 0xFF },
                { numberToCheck: 0x0 },
                { numberToCheck: -0xFF },
                { numberToCheck: 0.0e0 },
                { numberToCheck: 1e0 },
                { numberToCheck: 0e0 },
                { numberToCheck: -1e0 },
                { numberToCheck: null },
                { numberToCheck: undefined },
                { numberToCheck: '' },
                { numberToCheck: ' ' },
                { numberToCheck: 'any string' },
                { numberToCheck: '0a' },
                { numberToCheck: 'a0' },
                { numberToCheck: '0a0' },
                { numberToCheck: {} },
                { numberToCheck: { any: 'thing' } },
                { numberToCheck: { any: 1 } },
                { numberToCheck: [] },
                { numberToCheck: [0] },
                { numberToCheck: true },
                { numberToCheck: false },
                { numberToCheck: '\n' },
                { numberToCheck: NaN },
                { numberToCheck: function () {} },
                { numberToCheck: new Date() },
                { numberToCheck: new RegExp() }
            ];

        validNumbersTestCases.forEach(function (testCase) {
            it('should return true for "' + testCase.numberToCheck + '"', function () {
                expect(numberUtil.isFloat(testCase.numberToCheck)).to.equal(true);
            });
        });

        invalidNumbersTestCases.forEach(function (testCase) {
            it('should return false for "' + testCase.numberToCheck + '"', function () {
                expect(numberUtil.isFloat(testCase.numberToCheck)).to.equal(false);
            });
        });

    });

});
