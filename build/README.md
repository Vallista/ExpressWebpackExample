## Build

Build의 과정은 아래와 같습니다.

````javascript
// 1. npm run build를 입력
// 2. npm run build -> 'NODE_ENV=production node build/build' 가 실행
// 3. build/build 파일이 실행됨.

// 4. 버전 체크
require('./check-versions')();

// 5. 웹팩 API를 가져옴.
const webpack = require('webpack');

// 6. NODE_ENV 설정 체크
const isProduction = process.env.NODE_ENV;

// 7. 에러 바인딩
const webpackErrorBinding = require('./error.js');
let webpackConfig = null;

// 8. production 일 때는 webpack.prod.conf 를 불러와서 웹팩 API 콜 하여 빌드. 
if (isProduction === 'production') {
  webpackConfig = require('./webpack.prod.conf');
  webpack(webpackConfig, webpackErrorBinding);
}

````