const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const config = require("./config/key");
const parsing = require('./fetching.js');

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
