class Info extends React.Component {
	constructor(props) {
		super(props) 
		this.state = {
			toggle: true,
			star1: true,
			star2: true,
			star3: true,
			star4: true,
			star5: true,
		}
	}

	toggleWatch() {
		this.setState(prevState =>({
			toggle:!prevState.toggle
		}));
	}

	rating1() {
		this.setState(prevState => ({
			star1: !prevState.star1
		}))
	}

	rating2() {
		this.setState(prevState => ({
			star2: !prevState.star2
		}))
	}

	rating3() {
		this.setState(prevState => ({
			star3: !prevState.star3
		}))
	}

	rating4() {
		this.setState(prevState => ({
			star4: !prevState.star4
		}))
	}

	rating5() {
		this.setState(prevState => ({
			star5: !prevState.star5
		}))
	}

    render() {
    	var bgColor1 = this.state.star1 ? 'black' : 'yellow';
    	var bgColor2 = this.state.star2 ? 'black' : 'yellow';
    	var bgColor3 = this.state.star3 ? 'black' : 'yellow';
    	var bgColor4 = this.state.star4 ? 'black' : 'yellow';
    	var bgColor5 = this.state.star5 ? 'black' : 'yellow';

        return (
            <div className="info">
	            <div> Year: {this.props.movieDetail.Year}</div>
	            <div> Runtime {this.props.movieDetail.Runtime}</div>
	            <div> Metascore: {this.props.movieDetail.Metascore}</div>
	            <div class="rate">
				    <div style={{color: bgColor1}} onClick= {this.rating1.bind(this)} className="rate-item">☆</div>
				    <div style={{color: bgColor2}} onClick= {this.rating2.bind(this)} className="rate-item">☆</div>
					<div style={{color: bgColor3}} onClick= {this.rating3.bind(this)} className="rate-item">☆</div>
					<div style={{color: bgColor4}} onClick= {this.rating4.bind(this)} className="rate-item">☆</div>
					<div style={{color: bgColor5}} onClick= {this.rating5.bind(this)} className="rate-item">☆</div>
				</div>
	            <div> imdbRating: {this.props.movieDetail.imdbRating}</div>
	            <div className='watch' onClick={() => {this.toggleWatch()}}> {this.state.toggle ? 'To Watch' : 'Watched'} </div>
            </div>
            
        );
    }
};