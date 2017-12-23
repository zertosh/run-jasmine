'use strict';

const assert = require('assert');

process.on('exit', code => {
  if (code === 0) {
    assert(didRun, 'jasmine should have executed the test');
  }
});

assert(
  typeof jasmine !== 'undefined',
  'jasmine should be preloaded for this test'
);

const runJasime = require('..');
assert.equal(runJasime.toString(), function() {});
runJasime();

assert(
  typeof jasmine !== 'undefined',
  'jasmine should still be loaded'
);

let didRun = false;
it('this should work', () => {
  expect(true).toBe(true);
  didRun = true;
});
