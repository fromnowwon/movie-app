import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Ranking = () => {
	const [Data, setData] = useState([]);

	const fetchRank = async () => {
		try {
			const { data } = await axios.get('/api/rank')
			setData(data)
			
		} catch (error) {
			let message = 'Unknown Error'
			if (error instanceof Error) message = error.message
			console.log(message);
		}
	}

	const newsTicker = (timer: number) => {
		const $rolling = document.querySelector('ul') as HTMLElement;

		window.setInterval(() => {
			$rolling.style.transitionDuration = "400ms";
			$rolling.style.marginTop = "-2em";

			window.setTimeout(() => {
				$rolling.style.transitionDuration = "";
				$rolling.style.marginTop = "";
				$rolling.appendChild($rolling.querySelector("li:first-child") as HTMLElement);
			}, 400)

		}, timer)
	}

	useEffect(() => {
		newsTicker(1500)
	}, [])
	
	useEffect(() => {
		fetchRank()
	}, [])

	useEffect(() => {
		Data &&
		console.log(Data)
	}, [Data])

	return (
		<div className="ranking">
			<div className="ranking__inner">
				<h2>영화 랭킹</h2>
				<div className="ranking__list">
					<div className="ranking__list__inner">
						<ul>
							{
								Data &&
								Data.map((data: { title: string, link: string }, idx) => (
									<li key={ idx } className="flex-grid flex-grid--align-center">
										<span className="num">{ idx+1 }</span>
										<a href={ `https://movie.naver.com/${data.link}` } target="_blank">
											<span className="title">{ data.title }</span>
										</a>
									</li>
								))
							}
						</ul>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Ranking