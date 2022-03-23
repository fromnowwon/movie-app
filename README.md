# Movie search App

📎 [Demo](https://nemo-movie-app.herokuapp.com/)

<br/>

![](./public/images/react-movie-app-16_9.gif)

<br/>

## Introduction
- 영화 검색 기능, 랭킹 정보가 있는 애플리케이션입니다.
- 네이버 OPEN API로 검색 기능을 구현하였습니다. 
- Cheerio 라이브러리를 사용해 크롤링하여 실시간 영화 랭킹을 구현하였습니다.

<br/>

## Development Environment
- Client: React
- Backend: Node.js, Express.js
<br/>

## Get started
루트 디렉토리에서 npm 패키지를 설치해주세요.

`npm install`

client 디렉토리에서 npm 패키지를 설치해주세요.

`cd client`
<br />

`npm install`

루트 디렉토리에서 client와 server를 같이 실행해주세요.
<br />

`cd ../`
<br />
`npm run dev`

<br/>

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
├── .env (Managing personal information as environment variables)
├── package.json
└── server
    ├── fetching.js (for Crawling)
    └── index.js (Server)

```
