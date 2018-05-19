// var MovieListEntry = (props) => (
// 	<div>
// 		<div id='movie'> {props.movieDetail.title} </div>
// 	</div>
// )

class MovieListEntry extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			toggle: true,
	
		};

 	}

	toggleWatch() {
		this.setState(prevState =>({
			toggle:!prevState.toggle
		}));
	}

	// 	if(this.state.toggle) {
	// 		//display watched
	// 		this.setState ({
	// 			watch: 'watched'
	// 		})
	// 	} else {
	// 		//display not watched
	// 		this.setState ({
	// 			watch: 'Watch?'
	// 		})
	// 	}
	// }

	render() {
		return (
			<div>
		 		<div id='movie' > {this.props.movieDetail.title} 
		 		<div onClick={() => {this.toggleWatch()}}>
		 		{this.state.toggle ? 'To Watch' :'Watched'} 
		 		</div>
		 		</div>
    		</div>

		)
	}
}