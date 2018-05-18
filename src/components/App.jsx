
class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			movies: this.props.movies
		}
	}

	handleClick(value) {
		for(var i = 0; i < this.state.movies.length; i++) {
			if(this.state.movies[i].title.toUpperCase() === value.toUpperCase()) {
				this.setState({
					movies: [this.state.movies[i]]
				})
				return;
			} else {
				this.setState({
					movies: [{title: 'Movie Not Found -- Please refresh and Try Again!'}]
				})
			}
		}
		value = '';
	}

	render() {
		return (
			<div>
				<Search handleClick={this.handleClick.bind(this)} movie= {this.state.movies}/>
				<MovieList movie={this.state.movies}/>
				<button onClick={()=> {location.reload()}}>Refresh Page</button>
			</div>	
		)
	}
}