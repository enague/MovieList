class Search extends React.Component {
	constructor(props) {
		super(props);
		this.state = {

		}

	}

	render() {
		return (
			<div className="search-bar form-inline">
       	 	<input
          		className="form-control"
          		type="text"
          		value="Search..."
        	/>
        	<button className="btn hidden-sm-down"> Search </button>
        	</div> 

		)
	}
}
