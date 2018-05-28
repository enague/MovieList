class Search extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: ''
		};

	}


	handleInputChange(e) {
		//console.log(e);
		this.setState({
			value:e.target.value
		})
	}

	render() {
		return (
			<div className="search-bar">
       	 	<input
          		className="form-control"
          		type="text"
          		value={this.state.value}
          		onChange={this.handleInputChange.bind(this)}
        	/>
        	<button onClick={() => {this.props.handleClick(this.state.value)}} className="search"> Search </button>
        	</div> 

		)
	}
}
