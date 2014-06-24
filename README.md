[![Build Status](https://travis-ci.org/lxanders/belt.svg?branch=master)](https://travis-ci.org/lxanders/belt)

# belt

A lightweight tool belt for basic daily tasks.

## Getting started

Just install the tool and require it as normal: `var belt = require('belt');`

Alternatively you can require specific modules - e.g. the `stringUtil` modul for useful functions regarding strings. The modules are located in the `lib` folder.

## API

Currently the following modules are ready for use - a word of warning though: This will most likeley not be a stable API for the moment.

*stringUtil
**contains: Checks if a string is contained in another. An optional parameter for case insensitive checking is available.
**startsWith: Checks if a string starts with another. An optional parameter for case insensitive checking is available.
**endsWith: Checks if a string ends with another. An optional parameter for case insensitive checking is available.
