# Boilerplate - MERN Stack (Essential Ver.)

## Introduction
개발 시 초기 세팅에 소요되는 불필요한 시간을 줄이고자 제작된 boilerplate 코드입니다.
여러 가지 예제 코드를 **TypeScript + SCSS** 언어로 변경하여 커스텀하였습니다.
기본적으로 회원가입, 로그인, 로그아웃 기능이 있습니다.
각자 스타일에 맞게 커스텀해서 사용하길 추천합니다.
<br />
It is a boilerplate code made to reduce unnecessary time required for initial setting during development.
I customized various example codes by changing them to **TypeScript + SCSS** language.
Basically, there are membership, login, and logout functions.
It is recommended to customize and use according to your style.

## Development Environment
- Client: React
- Backend: Node.js, Express.js
- DB: MongoDB

## Get started
루트 디렉토리에서 npm 패키지를 설치해주세요.
<br />
Please install the npm package from the root path.

`npm install`

client 디렉토리에서 npm 패키지를 설치해주세요.
<br />
Please install the npm package from the client path.

`cd client`
<br />
`npm install`

`server>config` 경로에 `dev.js` 파일을 생성하여 아래 코드를 입력해주세요. (본인의 DB가 필요합니다.) `dev.js` 파일은 `.gitignore`에 포함해주세요.
<br />
Please create a `dev.js` file in the `server>config` path and enter the code below. (You need your own DB.) Please include the 'dev.js' file in the '.gitignore' list.

```jsx
module.exports = {
	mongoURI: '본인의 mongoDB URI 입력'
}
```

루트 디렉토리에서 client와 server를 같이 실행해주세요.
<br />
Please run client and server together in the root directory.

`cd ../`
<br />
`npm run dev`

## Tree
```
boilerplate
├── client
│   ├── README.md
│   ├── package-lock.json
│   ├── package.json
│   ├── public
│   │   ├── index.html
│   │   ├── manifest.json
│   │   └── robots.txt
│   ├── src
│   │   ├── _actions (Redux action 관리)
│   │   ├── _reducers (Redux reducer 관리)
│   │   ├── App.scss
│   │   ├── App.tsx (Routing 관련 작업 처리)
│   │   ├── components 
│   │   │   ├── Config.js (환경 변수 등을 관리)
│   │   │   └── views (컴포넌트 관리)
│   │   │       ├── Footer
│   │   │       │   └── Footer.tsx
│   │   │       ├── LandingPage
│   │   │       │   ├── LandingPage.tsx
│   │   │       │   └── Sections
│   │   │       ├── LoginPage
│   │   │       │   └── LoginPage.tsx
│   │   │       ├── NavBar
│   │   │       │   └── NavBar.tsx
│   │   │       └── RegisterPage
│   │   │           └── RegisterPage.tsx
│   │   ├── hoc (Higher Order Component, 유저에 따라 보여지는 페이지가 다르도록 세팅.)
│   │   ├── common.scss (공통 스타일 관리)
│   │   ├── index.scss (리셋 스타일 관리)
│   │   ├── index.tsx
│   │   ├── .env (API 키 등 개인 정보 관리)
│   │   └── utils (재사용 코드 관리)
│   └── tsconfig.json
└── server
    ├── config
    │   ├── dev.js (development 모드에 필요한 정보 관리)
    │   ├── key.js (환경 변수 분기점)
    │   └── prod.js (propduction 모드에 필요한 정보 관리)
    ├── index.js (서버 기본 세팅)
    ├── middleware
    │   └── auth.js (유저 권한 판단)
    ├── models
    │   └── User.js (유저 관련 스키마 등 관리)
    ├── package-lock.json
    └── package.json
```

## Notice
작성되었지만, 사용하지 않은 Reducer가 있습니다. 🙏
<br />
There is a reducer that has been written, but has not been used.

## Reference 🙇‍♂️
https://youtu.be/fgoMqmNKE18 

