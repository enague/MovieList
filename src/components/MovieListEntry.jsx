// var MovieListEntry = (props) => (
// 	<div>
// 		<div id='movie'> {props.movieDetail.title} </div>
// 	</div>
// )

class MovieListEntry extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			toggle: null,
			watch: 'Watch?'
		};

 	}

	toggleWatch() {
		this.setState({
			toggle:!false
		})

		if(this.state.toggle) {
			//display watched
			this.setState ({
				watch: 'watched'
			})
		} else {
			//display not watched
			this.setState ({
				watch: 'Watch?'
			})
		}
	}

	render() {
		return (
			<div>
		 		<div id='movie' onClick={() => {this.toggleWatch()}} > {this.props.movieDetail.title} 
		 		<div>
		 		{this.state.watch} 
		 		</div>
		 		</div>
    		</div>

		)
	}
}