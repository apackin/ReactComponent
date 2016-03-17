import React, { Component } from 'react';

export default class Cell extends Component {
	constructor (props) {
		super(props);
		this.state = { value: this.props.value };
	}

	render () {
		return (
			<div
		     	value={this.state.value}
		      	onChange={event => this.setState({ value:event.target.value})} contentEditable>
		      	{this.state.value}
		    </div>
		);
	}
}


/* Functional component */
// const Cell = () => {
// 	return (
// 			<input 
// 		     	// value={this.state.term}
// 		      // 	onChange={event => this.setState({ term:event.target.value})} 
// 		      	/>
// 		);
// }

// export default App;
