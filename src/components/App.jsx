
class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		
		}
	}

	render() {
		return (
			<div>
				<Search movie= {this.props.movies}/>
				<MovieList movie={this.props.movies}/>
			</div>	
		)
	}
}