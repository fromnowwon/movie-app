import { movieType } from './Search'
import { IMAGE_URL } from '../../../../Config'

const SearchResult = (props: movieType):JSX.Element => {
	return (
		<div className="search-result__list flex-grid">
			{/* 포스터 */}
			<div className="movie-poster">
				<img src={ 
					props.image 
					? props.image
					: `${IMAGE_URL}no-image.jpg`
				} />
			</div>
			{/* 정보 */}
			<div className="movie-info">
				<div className="movie-info__detail">
					<ul>
						<li>
							<h3 className="movie-title">
								{ 
									// '<b></b>' 문자열 제거
									props.title?.replace(/<b>/gi,"").replace(/<\/b>/gi,"")
								}
							</h3>
						</li>
						<li>
							<span className="movie-subtitle">
								{ props.subtitle } &nbsp;
							</span>
							<span className="movie-year">
								({ props.pubDate })
							</span>
						</li>
						<li>
							<span className="movie-info__name">감독: </span>
							<span className="movie-director">
								{ 
									props.director
									? props.director?.replace(/[^\w\sㄱ-힣]$/, '')
									: "-"
								}
							</span>
						</li>
						<li>
							<span className="movie-info__name">출연: </span>
							<span className="movie-actor">
								{
									props.actor
									? props.actor?.replace(/[^\w\sㄱ-힣]$/, '')
									: "-"
								}
							</span>
						</li>
						<li>
							<span className="movie-info__name">평점: </span>
							<span className="movie-userRating">
								{ 
									props.userRating !== "0.00" 
									? props.userRating
									: "-"
								}
							</span>
						</li>
					</ul>
				</div>
				<div className="movie-info__more">
					<a href={ props.link } target="_blank">더보기</a>
				</div>
			</div>
		</div>
	)
}

export default SearchResult