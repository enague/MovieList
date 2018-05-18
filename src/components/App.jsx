
class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {

		}
	}

	handleClick() {
		console.log('hit from search');
	}

	render() {
		return (
			<div>
				<Search handleClick={this.handleClick.bind(this)} movie= {this.props.movies}/>
				<MovieList movie={this.props.movies}/>
			</div>	
		)
	}
}