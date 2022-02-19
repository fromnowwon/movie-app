# Movie search App - MERN Stack

## Introduction
- 영화 검색 기능, 랭킹 정보가 있는 애플리케이션입니다.
- 네이버 OPEN API로 검색 기능을 구현하였습니다. 
- Cheerio 라이브러리를 사용해 크롤링하여 실시간 영화 랭킹을 구현하였습니다.
<br />

- It is an application with movie search functions and ranking information.
- This app has a search function implemented with Naver OPEN API.
- This app implements real-time movie ranking based on data crawled by the Cheerio library.

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
	mongoURI: 'Your mongoDB URI'
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
movie-app
├── client
│   ├── public
│   │   ├── images
│   │   │   └── no-image.jpg
│   │   ├── index.html
│   │   ├── manifest.json
│   │   └── robots.txt
│   ├── src
│   │   ├── components
│   │   │   ├── Config.js (Reuse code management)
│   │   │   └── views
│   │   │       ├── Footer
│   │   │       │   └── Footer.tsx
│   │   │       ├── LandingPage
│   │   │       │   ├── LandingPage.tsx
│   │   │       │   └── Sections
│   │   │       │       └── Search
│   │   │       │           ├── Ranking.tsx
│   │   │       │           ├── Search.tsx
│   │   │       │           └── SearchResult.tsx
│   │   │       ├── NavBar
│   │   │       │   └── NavBar.tsx
│   │   │       └── NotFound
│   │   │           └── NotFound.tsx
│   │   ├── App.scss
│   │   ├── App.tsx
│   │   ├── common.scss
│   │   ├── index.scss
│   │   ├── index.tsx
│   │   └── setupProxy.js (Proxy server setting)
│   ├── package.json
│   └── tsconfig.json
├── Procfile (for Heroku)
├── .env (Environment variable)
├── package.json
└── server
    ├── config
    │   ├── dev.js
    │   ├── key.js (Development environment)
    │   └── prod.js
    ├── fetching.js (for Crawling)
    └── index.js (Server)

```
