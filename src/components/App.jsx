class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			movies: this.props.movies
		}
		this.handleClick= this.handleClick.bind(this);
		this.getMoviesFromDB =this.getMoviesFromDB.bind(this);
	}

	//add button
	addMovie(value) {
		if(value === '') {
			this.handleClick(value);
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
			this.handleClick(value);
		})
		.catch((error)=> {
			console.log(error)
		})
	}
	
	//search button
	handleClick(value) {
		// for(var i = 0; i < this.state.movies.length; i++) {
		// 	if(this.state.movies[i].Title.toUpperCase() === value.toUpperCase()) {
		// 		this.setState({
		// 			movies: [this.state.movies[i]]
		// 		})
		// 		return;

		// 	} else {
		// 		this.setState({
		// 			movies: [{title: 'Movie Not Found -- Please refresh and Try Again!'}]
		// 		})
		// 	}
		// }

		this.getMoviesFromDB(value)

	} 


	
	getMoviesFromDB(value) {	
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
				<h3> Have a movie in mind?</h3>
				<p> Check here to see if we have it in our list! </p>
				<p> If nothing shows up, try adding it to our list above! </p>
				<Search handleClick={this.handleClick.bind(this)} movie= {this.state.movies}/>
				<MovieList movie={this.state.movies}/>
				<div className='newMovies'></div>
				<button className='refresh' onClick={()=> {location.reload()}}>Refresh Page</button>
				<button onClick= {() => {this.onlyWatchedMovies()}}> Watched Movies</button>
				<button onClick= {() => {this.onlyToWatchMovies()}}> Movies To Watch</button>
			</div>	
		)
	}
}

// module.exports = App