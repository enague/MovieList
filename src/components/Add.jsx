class Add extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: ''
		};

	}


	handleInputChange(e) {
		//console.log(e.target.value);
		e.preventDefault();
		this.setState({
			value:e.target.value
		})
	}

	render() {
		return (
			<div>
       	 	<input
          		className="form-control"
          		type="text"
          		ref="add"
          		value={this.state.value}
          		onChange={this.handleInputChange.bind(this)}
        	/>
        	<button onClick={() => {this.props.addMovie(this.state.value)}} className="btn hidden-sm-down"> Add </button>
        	</div> 

		)
	}
}
