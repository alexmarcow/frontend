/// <reference path='../steps.d.ts' />
// Run only this test:
// npx codeceptjs run -p pauseOnFail e2e/general-browsing.e2e.js

/* This file serves as a shoretend example reference on how to write test cases with codecept.js. */

const EnUs = require('../src/translations/en-US.json');

Feature('general-browsing');

Scenario('test something', ({ I }) => {

  I.amOnPage(`/`)
});
