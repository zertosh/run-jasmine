#!/bin/bash

set -e

THIS_DIR="$(cd -P "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT_DIR="$(cd "$THIS_DIR/.." && pwd)"

node "$ROOT_DIR/test/run-directly-test.js"
node "$ROOT_DIR/node_modules/.bin/jasmine" "$ROOT_DIR/test/run-via-jasmine.js"
