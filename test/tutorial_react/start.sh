#!/bin/bash
npm init -y;
npm install --save-dev babel-cli babel-preset-react-app;
#JSXをコンパイル
npx babel -w ./src -d ./ --presets react-app/prod;
