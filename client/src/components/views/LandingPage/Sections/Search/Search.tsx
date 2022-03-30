import { useState, useRef } from "react";
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
	const [loading, setLoading] = useState(false);
	const formRef = useRef<HTMLFormElement>(null);
	const inputRef = useRef<HTMLInputElement>(null);
	const resultTitleRef = useRef<HTMLHeadingElement>(null);

	const fetchData = async () => {
		const searchKeyword = Value;
		const $resultTitle = document.querySelector('.result-title') as HTMLElement
	
		setLoading(true);
		$resultTitle.innerHTML = "";

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

		setLoading(false);
	}

	const resultTitle = () => {
		const $resultTitle = resultTitleRef.current;

		if ($resultTitle) {
			$resultTitle.innerHTML = `"${Value}"의 검색 결과`;
		}
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
		const $resultTitle = resultTitleRef.current;
		const $form = formRef.current;
		const $input = inputRef.current;

		if ($input && $form && $resultTitle) {
			if ($input.value === "") {
				$input.classList.add('invalid-input');
				$form.classList.add('invalid-form');
				setMovies([]);
				setValue("");
				$resultTitle.innerHTML = '';
			}
		}
	}

	return (
		<section className="search-section">
			<div className="flex-grid flex-grid--wrap">
				<Ranking />
				<div className="search-cont">
					<div className="search-form">
						<h2>영화 검색</h2>
						<form onSubmit={ submitKeyword } ref={ formRef }>
							<label htmlFor="name" className="form__label">
								<input 
									id="movie-title"
									className="form__input"
									ref={ inputRef }
									type="text"
									name="movie_title"
									onChange={ keywordChange } 
									placeholder="영화 제목을 입력해주세요."
									required
								/>
								<div className="validation-note">영화 제목이 입력되지 않았습니다.</div>
								<div className="btn-box">
									<input className="btn form__submit" type="submit" value="검색" onClick={ validateForm }/>
								</div>
							</label>
						</form>
					</div>
					<div className="search-result">
						<h2 className="result-title" ref={ resultTitleRef }></h2>
						{
							loading 
							? (<div className="fallback-message">Laoding...</div>)
							: (
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
							)
						}
					</div>
				</div>
			</div>
		</section>
	)
}

export default Search