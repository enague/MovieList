
class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			movies: this.props.movies
		}
	}

	handleClick(value) {
		console.log('hit from search');
		console.log(value)
		console.log(this.state.movies[0].title)


		for(var i = 0; i <this.state.movies.length; i++) {
			if(this.state.movies[i].title === value) {
				this.setState({
					movies: this.state.movies[i]
				})
			} else {
				this.setState({
					movies: [{title: 'Not Found -- Please Try Again!'}]
				})
			}
		}
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