import React from 'react';
import ReactHtmlParser from 'react-html-parser';

import { ISeatCategory } from '../models/SeatCategory';

type OwnProps = ISeatCategory;
type Props = OwnProps;
type State = {};

class Category extends React.Component<Props, State>  {
	renderRows() {
		let rows = '';
		let seat_no = 0;
		let row_no = 0;
		
		const { rows: total_rows, seats_per_row } =  this.props;
		const total_seats = total_rows*seats_per_row;
		
		for (let i = 0; i < total_seats; i++) {
			row_no += (i % seats_per_row) === 0 ? 1: 0;
			seat_no = (i % seats_per_row) === 0 ? 0 : (seat_no + 1);
			if ((i+1) % seats_per_row === 1) {
				rows += ("<div class= 'row'>Row " + row_no);
			}
			
			const label = String.fromCharCode(seat_no+ 65);
			rows += (`<div class='seat' label=R${row_no}${label}>${label}</div>`);
			
			if ((i+1) % seats_per_row === 0) {
				rows += ("</div>");
			}
		}
    	return ReactHtmlParser(rows);
	}

	render() {
		return (
			<div>
				<span className='category-name'>{ this.props.name }</span>
				<div className="rows">
					{ this.renderRows() }
				</div>
			</div>
		)
	}
}

export default Category;
 