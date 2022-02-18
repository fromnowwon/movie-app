const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const config = require("./config/key");
const parsing = require('./fetching.js');
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();


// body-parser option
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cookieParser());

const mongoose = require("mongoose");
const { response } = require("express");
mongoose
	.connect(config.mongoURI)
	.then(() => console.log("MongoDB Connected..."))
	.catch((error) => console.log(error));

// CORS 허용
let corsOptions = {
	origin: 'https://openapi.naver.com',
	credentials: true
}
app.use(cors(corsOptions));

// API 데이터 가져오기
const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET;

console.log(CLIENT_ID);
console.log(CLIENT_SECRET);


app.get('/api/search', (req, res) => {
	const searchKeyword = req.query.query;

	console.log(searchKeyword)
	
	axios.get('https://openapi.naver.com/v1/search/movie.json', 
		{
			params: {
				query: searchKeyword,
				display: 100
			},
			headers: {
				'X-Naver-Client-Id': CLIENT_ID, 
				'X-Naver-Client-Secret': CLIENT_SECRET
			}
		}
	).then((response) => {
		const { data } = response;
		res.send(data.items);
	}).catch((error) => {
		let message = 'Unknown Error'
			if (error instanceof Error) message = error.message
			console.log(message);
	})

})

// 랭킹 크롤러 모듈 가져오기
app.get('/api/rank', (req, res) => {
	parsing().then(response => res.send(response))
})

// production mode
if (process.env.NODE_ENV === "production") {
	app.use(express.static("client/build"));

	app.get("*", (req, res) => {
		res.sendFile(
			path.resolve(__dirname, "../client", "build", "index.html")
		);
	});
}

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
