class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			movies: this.props.movies
		}
		this.handleClick= this.handleClick.bind(this);
		this.getMoviesFromAPI =this.getMoviesFromAPI.bind(this);
	}
	//add button

	addMovie(value) {
		if(value === '') {
			this.setState({
				movies: [{title: 'Oops I do not think you entered a movie title - Try again!'}]
			})
		} 

		// $.ajax({
		// 	type: 'POST',
		// 	url: '/movies',
		// 	data: {value},
		// 	success: (data) => {
		// 		this.handleClick()
		// 		console.log('enters sucess on POST on client')
		// 	},
		// 	error: (error) => {
		// 		console.log('error in client', error)
		// 	}
		// })

		axios.post('/movies', {
			params: {
				value: value
			}
		})
		.then((data)=> {
			console.log('enters sucess on POST client')
			this.handleClick();
		})
		.catch((error)=> {
			console.log(error)
		})
	}
	
	//search button
	handleClick(value) {
		for(var i = 0; i < this.state.movies.length; i++) {
			if(this.state.movies[i].Title.toUpperCase() === value.toUpperCase()) {
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

		this.getMoviesFromAPI(value)

	} 


	
	getMoviesFromAPI(value) {	
		axios.get('/movies', {
			params: {
				value: value
			}
		})
		.then((response)=> {
			console.log('it works', response.data)
			this.setState({
				movies: response.data
			})
		})
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
				<div className='newMovies'></div>
				<button onClick={()=> {location.reload()}}>Refresh Page</button>
				<button onClick= {() => {this.onlyWatchedMovies()}}> Watched Movies</button>
				<button onClick= {() => {this.onlyToWatchMovies()}}> Movies To Watch</button>
			</div>	
		)
	}
}

// module.exports = App