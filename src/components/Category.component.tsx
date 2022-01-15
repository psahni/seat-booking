import React from 'react';

import { ISeatCategory } from '../models/SeatCategory';

type OwnProps = ISeatCategory;
type Props = OwnProps;
type State = {};

const Seat = ({ id, label, book }: {id: string, label: string, book: () => void}) => {
	return (
		<div className='seat' onClick={() => book()} data-id={id}>{label}</div>
	)
}

const Row = ({ seats }: { seats: JSX.Element[]}) => {
	return (
		<div className='row'>
			{ seats }
		</div>
	)
}

class Category extends React.Component<Props, State>  {

	constructor(props: Props) {
		super(props);
		this.book.bind(this);
	}

	book(id: string) {
		console.log('########', id);
	}

/*
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
			const seat = ReactDOMServer.renderToString(<Seat book={this.book} label={label} row_no={row_no}/>);
			rows += seat
			
			if ((i+1) % seats_per_row === 0) {
				rows += ("</div>");
			}
		}
    return ReactHtmlParser(rows);
	}
*/

	renderRows2(category_id: string) {
		let rows = [];
		let seats = [];
		let seat_no = 0;
		let row_no = 0;
		
		const { rows: total_rows, seats_per_row } =  this.props;
		const total_seats = total_rows*seats_per_row;
		
		for (let i = 0; i < total_seats; i++) {
			row_no += (i % seats_per_row) === 0 ? 1: 0;
			seat_no = (i % seats_per_row) === 0 ? 0 : (seat_no + 1);
			
			const label = String.fromCharCode(seat_no+ 65);
			const id = category_id + 'R' + row_no + label;

			const seat = (<Seat key={id} book={() => this.book(id)} label={label} id={id}/>)
			seats.push(seat);
			
			if ((i+1) % seats_per_row === 0) {
				rows.push(<Row key={i+1} seats={seats}/>);
				seats = [];
			}
		}
    return rows;
	}

	render() {
		return (
			<div>
				<span className='category-name'>{ this.props.name }</span>
				<div className="rows">
					{ this.renderRows2(this.props.id) }
				</div>
			</div>
		)
	}
}

export default Category;
 