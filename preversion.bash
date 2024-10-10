#!/usr/bin/env bash
#
set -euo pipefail

npm run test:es6
npm run lint
FAST= npm test
./node_modules/.bin/attw . --pack
rimraf build
mkdirp build
npm run browserify
npm run test:typings
npm run verifypublishsize
npm run test:chrome
cp es6/expressions.js es6/expressions-ie11.js js/text.js .
sed -E -i 's@require\("\.@require(\"./js@g' text.js
node es6/test-text.js
