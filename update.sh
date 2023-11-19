#! /bin/bash

npm run build
git add .
git commit -m "New Version"
git push
npm version minor
npm publish
