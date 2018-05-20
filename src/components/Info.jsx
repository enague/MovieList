class Info extends React.Component {
	constructor(props) {
		super(props) 
		this.state = {
			toggle: true
		}
	}

	toggleWatch() {
		this.setState(prevState =>({
			toggle:!prevState.toggle
		}));
	}

    render() {
        return (
            <div className="info">
	            <div> Year: {this.props.movieDetail.Year}</div>
	            <div> Runtime {this.props.movieDetail.Runtime}</div>
	            <div> Metascore: {this.props.movieDetail.Metascore}</div>
	            <div> imdbRating: {this.props.movieDetail.imdbRating}</div>
	            <div className='watch' onClick={() => {this.toggleWatch()}}> {this.state.toggle ? 'To Watch' : 'Watched'} </div>
	            <div class="rate">
				    <div className="rate-item">☆</div>
				    <div className="rate-item">☆</div>
				    <div className="rate-item">☆</div>
				    <div className="rate-item">☆</div>
				    <div className="rate-item">☆</div>
				</div>
            </div>
            
        );
    }
};