
class MovieListEntry extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			movieInfo: this.props.movieDetail,
			info: false	
		};
 	}


	showResultsNow() {
		this.setState(prevState=>({
			info: !prevState.info
		}));
	}

	render() {
		return (
			<div>
		 		<div id='movie' onClick={() => {this.showResultsNow()}}> {this.props.movieDetail.title} </div>
		 		<div> {this.state.info ? <Info movieDetail={this.state.movieInfo} /> : null} </div> 	
    		</div>

		)
	}
}

// class Info extends React.Component {
// 	constructor(props) {
// 		super(props) 

		
// 	}

//     render() {
//         return (
//             <div id="results" className="search-results">
// 	            <div> Year: {this.props.movieDetail.Year}</div>
// 	            <div> Runtime {this.props.movieDetail.Runtime}</div>
// 	            <div> Metascore: {this.props.movieDetail.Metascore}</div>
// 	            <div> imdbRating: {this.props.movieDetail.imdbRating}</div>
//             </div>
            
//         );
//     }
// };