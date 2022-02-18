const cheerio = require("cheerio");
const axios = require("axios");

// HTML 가져오기
const getHTML = async () => {
	try {
		return await axios.get(
			"https://movie.naver.com/movie/sdb/rank/rmovie.naver"
		);
	} catch (error) {
		console.log(error);
	}
};

// 파싱
const parsing = async () => {
	// 위에서 추출한 HTML 전체 가져오기
	const html = await getHTML();
	const $ = cheerio.load(html.data);
	const $trs = $("#old_content > .list_ranking > tbody > tr");

	let dataArr = [];

	$trs.each((idx, node) => {
		const title = $(node).find(".tit3 a").text();
		const link = $(node).find(".tit3 a").attr("href");

		if (title === "") {
			return;
		}

		dataArr.push({
			title: title,
			link: link
		});
	});

	return dataArr.slice(0, 10);
};

module.exports = parsing;
