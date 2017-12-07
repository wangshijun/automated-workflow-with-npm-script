#!/usr/bin/env bash

# remove old coverage reports
rimraf coverage && rimraf .nyc_output

# run test and collect new coverage
nyc --reporter=html npm run test

# achive coverage report by version
mkdir -p coverage_archive/$npm_package_version
cp -r coverage/* coverage_archive/$npm_package_version

# open coverage report for preview
npm-run-all --parallel cover:serve cover:open

