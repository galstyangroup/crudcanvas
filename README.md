# CRUD CANVAS JS BETA

[![Build Status](https://travis-ci.org/flexdinesh/npm-module-boilerplate.svg?branch=master)](https://travis-ci.org/flexdinesh/npm-module-boilerplate) [![dependencies Status](https://david-dm.org/flexdinesh/npm-module-boilerplate/status.svg)](https://david-dm.org/flexdinesh/npm-module-boilerplate) [![devDependencies Status](https://david-dm.org/flexdinesh/npm-module-boilerplate/dev-status.svg)](https://david-dm.org/flexdinesh/npm-module-boilerplate?type=dev) [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

**Create you CRUD Canvas in seconds from JSON url** ✨

** UNDER DEVELOPMENT PLEASE DO NOT USE FOR PRODUCTION **

This module will help you to create an CRUD canvas to perform CRUD operations just from one single JSON URL.

# Features

* **Model** - Write _ES6_ code and _Babel_ will transpile it to ES5 for backwards compatibility
* **Templates** - _Mocha_ with _Istanbul_ coverage
* **Edit templates** - Preconfigured _ESlint_ with _Airbnb_ config

# Commands
- `npm run clean` - Remove `lib/` directory
- `npm test` - Run tests with linting and coverage results.
- `npm test:only` - Run tests without linting or coverage.
- `npm test:watch` - You can even re-run tests on file changes!
- `npm test:prod` - Run tests with minified code.
- `npm run test:examples` - Test written examples on pure JS for better understanding module usage.
- `npm run lint` - Run ESlint with airbnb-config
- `npm run cover` - Get coverage report for your code.
- `npm run build` - Babel will transpile ES6 => ES5 and minify the code.
- `npm run prepublish` - Hook for npm. Do all the checks before publishing your module.

# Installation

npm i crudcanvas

import CrudCanvas from 'crudcanvas'​

let template = `${your.html.template}`


let model = {
​
};

const SampleCrud = new CrudCanvas( 'JSONurl' ,  $[model] , $[template]    )


# License

MIT © Harut Galstian
