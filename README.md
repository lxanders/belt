[![Build Status](https://travis-ci.org/lxanders/belt.svg?branch=master)](https://travis-ci.org/lxanders/belt)
[![NPM version](https://badge.fury.io/js/beltjs.svg)](http://badge.fury.io/js/beltjs)

# beltjs

A lightweight tool belt for basic daily tasks.

## Getting started

- Just install the tool directly [via npm](https://www.npmjs.org/package/beltjs): `npm install beltjs`
- Require it as normal: `var belt = require('beltjs');`. Usage-example: `belt.number.isInt(42);`
- Alternatively you can require specific modules - e.g. the `string` modul for useful functions regarding strings: `var stringUtils = require('beltjs').string;`. Usage-example: `stringUtils.contains(string1, string2);`

## API

Currently the following modules are ready for use. The API is stable for now. Breaking changes will be announced and semver version numbering is used.

- module: `string`
  - `contains`: Checks if a string is contained in another. An optional parameter for case insensitive checking is available.
  - `startsWith`: Checks if a string starts with another. An optional parameter for case insensitive checking is available.
  - `endsWith`: Checks if a string ends with another. An optional parameter for case insensitive checking is available.

- module: `number`
  - `isNumeric`: Checks if the provided object is numeric.
  - `isInt`: Checks if the provided object is an integer. Attention: This method considers e.g. `1.0` as an integer.
  - `isFloat`: Checks if the provided object is a float. Attention: This method considers e.g. `1.0` not as a float value.
  - Note: `isInt` and `isFloat` consider values somewhat like they would be printed. The used example `1.0` will be printed as `1` by node.

Please checkout the source code for more information on how to use this until there is a better API documentation. There are plenty of tests for all the functions.
