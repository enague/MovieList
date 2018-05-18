
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
		this.setState({
			movies: [{title: value}]
		})
	}

	render() {
		return (
			<div>
				<Search handleClick={this.handleClick.bind(this)} movie= {this.state.movies}/>
				<MovieList movie={this.state.movies}/>
			</div>	
		)
	}
}