# run-jasmine [![Build Status](https://travis-ci.org/zertosh/run-jasmine.svg?branch=master)](https://travis-ci.org/zertosh/run-jasmine)

Prepares and executes jasmine in the current environment, only if jasmine is not defined. This is useful for having self-executing test files.

When your IDE is configured to execute `.js` files through `node` (like with a [Sublime build system](https://stackoverflow.com/questions/14427520/node-js-build-system-in-sublime-text-2)), this allows you quickly run a test without having to configure anything.

## Usage

1. Add this module and `jasmine` as dependencies:

  ```sh
  $ npm install --save-dev jasmine run-jasmine
  ```

2. Then, in your test files, add:

  ```js
  require('run-jasmine')();
  ```

## Example

Say you have `test/verify-test.js`, and it looks like this:

```js
require('run-jasmine')();

describe('verify-test', () => {
  it('works', () => {
    expect(true).toBe(true);
  });
});
```

By calling `run-jasmine` before the specs are defined, you can run this test in two ways:

  1. Through jasmine, with `./node_modules/.bin/jasmine test/verify-test.js`.
  2. Or, by running the script directly, with `node test/verify-test.js`.
