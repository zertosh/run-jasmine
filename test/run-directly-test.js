'use strict';

const assert = require('assert');

process.on('exit', code => {
  if (code === 0) {
    assert(didRun, 'jasmine should have executed the test');
  }
});

assert(
  typeof jasmine === 'undefined',
  'jasmine should not be preloaded for this test'
);

require('..')();

assert(
  typeof jasmine !== 'undefined',
  'run-jasmine should have loaded jasmine'
);

let didRun = false;
it('this should work', () => {
  expect(true).toBe(true);
  didRun = true;
});
