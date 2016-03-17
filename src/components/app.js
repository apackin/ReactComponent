import React, { Component } from 'react';
import Column from  './column';

/* Class component */
export default class App extends Component {
	constructor(props) {
		super(props);

		this.state = { completeSheet:
			[
				{ title: 'Names', type: 'String', cellVals: ['Assaf','Oscar','Cody','Mike'] },
				{ title: 'Numbers', type: 'Numbers', cellVals: ['555','666','777','888'] },
			]
		}
 
	}


    render() {
		const columns = this.state.completeSheet.map((column, idx) => {
			return <Column title={column.title} values={column.cellVals} key={idx} />
		})

	    return (
		    <div className="col-xs-4">
		      {columns}
		    </div>
	    );
	}

	// setState() {

	// }
}
