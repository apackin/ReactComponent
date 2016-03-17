import React from 'react';
import Cell from './cell';

const Column = (props) => {
	const cells = props.values.map((val, idx) => {
		return <Cell value={val} key={idx}/>;
	});
	return (
		<div>
			
			<div className="col-xs-4 list-group">
				{props.title}
				{cells}
			</div>
		</div>
	);
};

export default Column;
