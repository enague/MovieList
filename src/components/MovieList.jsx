var MovieList = (props) => (
	<div>
		{props.movie.map((movie) =>
			<MovieListEntry movieDetail={movie}/>
		)}
	</div>
)
