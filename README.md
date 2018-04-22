## WebpackExample

WebpackExample은 Webpack에 대해서 어려움을 느끼는 프로그래머들을 위해 만든 예제입니다.

기본적으로 Webpack은 프로젝트 상단에 webpack.config.js를 통해서 설정을 하게 됩니다. 하지만 production에서 들어가는 설정과 development에서 들어가는 설정이 다를 수 밖에 없습니다.

그래서 필요한 것이 webpack의 javascript API 입니다.

이 프로젝트는 webpack의 javascript API를 통해서 분기를 나눠보고 최종적으로 자바스크립트 내에서 index.html에 Element를 추가하고 예제 데이터를 타이핑 하는 데까지 작성되어 있습니다.

이 프로젝트는 아래의 기능들을 포함하고 있습니다 : 

````
- Webpack Javascript API : 웹팩 자바스크립트 API를 통해서 webpack 설정을 로드하고 설정하는 법

- NODE_ENV : NODE_ENV를 사용하여 개발용 빌드, 상용 빌드를 제작 분기 나누기

- Version Check : NPM과 NODE 버전이 호환되는 지 체크하는 방법

- Webpack Merge : Webpack-Merge를 통해서 공통적인 부분을 머지하여 소스코드 관리를 쉽게 하는 법

- CSS Loader : CSS Loader를 사용하여 CSS를 로드하는 방법

- ES6 Babel trans-compiler : Babel Trans-Compiler를 통해서 ES6 문법을 사용할 수 있게 설정하는 법

- DOM control in Javascript : DOM을 Javascript로 새로운 Element를 생성하고 바인딩하여 사용하는 법

- use scripts in package.json : package.json에서 스크립트를 만들어서 사용하는 방법

- Webpack Dev Server : Webpack dev server를 사용하여 실시간으로 코딩하고 확인하는 방법

````

### Installation

````

git clone https://github.com/Vallista/WebpackExample.git

npm install

npm run build // production

npm run start // development (run for webpack-dev-server)

````

### More..

해당 폴더를 가시면 폴더마다 상세한 과정을 적은 README.md 파일이 있습니다. 지금 가서 확인하세요!
