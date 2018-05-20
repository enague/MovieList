class Info extends React.Component {
	constructor(props) {
		super(props) 

		
	}

    render() {
        return (
            <div id="results" className="search-results">
	            <div> Year: {this.props.movieDetail.Year}</div>
	            <div> Runtime {this.props.movieDetail.Runtime}</div>
	            <div> Metascore: {this.props.movieDetail.Metascore}</div>
	            <div> imdbRating: {this.props.movieDetail.imdbRating}</div>
            </div>
            
        );
    }
};