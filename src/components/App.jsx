
class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			movies: this.props.movies
		}
	}

	addMovie(value) {
		console.log('this hit')
		if(value === '') {
			this.setState({
				movies: [{title: 'Oops I do not think you entered a movie title - Try again!'}]
			})
		} else {
			this.state.movies.push({title: value})
			console.log(this.state.movies)
			//how do you clear the input field after clicking the button?
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
				<h2> Feel free to add movies to our list here! </h2>
				<Add addMovie={this.addMovie.bind(this)}/>
				<h2> Have a movie in mind?</h2>
				<h3> Check here to see if we have it in our list! </h3>
				<Search handleClick={this.handleClick.bind(this)} movie= {this.state.movies}/>
				<MovieList movie={this.state.movies}/>
				<button onClick={()=> {location.reload()}}>Refresh Page</button>
			</div>	
		)
	}
}