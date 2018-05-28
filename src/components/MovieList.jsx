var MovieList = (props) => (
	<div>
		{props.movie.slice(0,25).map((movie, i) =>
			<MovieListEntry key={i} movieDetail={movie}/>
		)}
	</div>
)
