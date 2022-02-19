import { useEffect, useState } from "react";
import axios from 'axios';
import SearchResult from "./SearchResult";
import Ranking from "./Ranking";

export interface movieType {
	key: number
	actor: string
	director: string
	image: string
	link: string
	pubDate: string
	subtitle: string
	title: string
	userRating: string
}

const Search = ():JSX.Element => {
	const [Movies, setMovies] = useState([]);
	const [Value, setValue] = useState("");
	
	const fetchData = async () => {
		const searchKeyword = Value;

		try {
			if (searchKeyword === "") {
				setMovies([]);
				setValue("");
			} else {
				const { data } = await axios.get('/api/search', 
					{
						params: {
							query: searchKeyword
						}
					}
				)
				setMovies(data);
				resultTitle();
			}
		} catch (error) {
			let message = 'Unknown Error'
			if (error instanceof Error) message = error.message
			console.log(message);
		}
	}

	const resultTitle = () => {
		const $resultTitle = document.querySelector('.result-title') as HTMLElement
		$resultTitle.innerHTML = `"${Value}"의 검색 결과`
	}

	const keywordChange = (e: { preventDefault: () => void; target: { value: string }; }) => {
		e.preventDefault();
		setValue(e.target.value);
	}

	const submitKeyword = (e: { preventDefault: () => void; }) => {
		e.preventDefault();
		fetchData();
	}

	const validateForm = () => {
		const $form = document.querySelector('form');
		const $input = $form?.querySelectorAll('input');
		
		if ($form) {
			$input?.forEach( input => {
				input.addEventListener('invalid', () => {
					// invalid가 있을 경우 form에 클래스 추가
					$form.classList.add('invalid-form');
				});
			});
		}
	}

	return (
		<section className="search-section">
			<div className="flex-grid flex-grid--wrap">
				<Ranking />
				<div className="search-cont">
					<div className="search-form">
						<h2>영화 검색</h2>
						<form onSubmit={ submitKeyword }>
							<label htmlFor="name" className="form__label">
								<input type="text" id="movie-title" className="form__input" name="movie_title" onChange={ keywordChange } placeholder="영화 제목을 입력해주세요." required />
								<div className="validation-note">영화 제목이 입력되지 않았습니다.</div>
								<div className="btn-box">
									<input className="btn form__submit" type="submit" value="검색" onClick={ validateForm }/>
								</div>
							</label>
						</form>
					</div>
					<div className="search-result">
						<h2 className="result-title">
							{ }
						</h2>
						{
							Movies && 
							Movies.map((movie: movieType, idx: number) => (
								<SearchResult 
									key={ idx }
									actor={ movie.actor }
									director={ movie.director }
									image={ movie.image }
									link={ movie.link }
									pubDate={ movie.pubDate }
									subtitle={ movie.subtitle }
									title={ movie.title }
									userRating={ movie.userRating }
								/>
							)) 
						}
					</div>
				</div>
			</div>
		</section>
	)
}

export default Search