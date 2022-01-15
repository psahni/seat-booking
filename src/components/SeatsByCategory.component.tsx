import React from 'react';
import { ISeatCategory } from '../models/SeatCategory';
import Category from  './Category.component';

interface OwnProps {
	seatsCategories: ISeatCategory[]
}

type Props = OwnProps;
type State = {};

class SeatsByCategory extends React.Component<Props, State> {

	render() {
		const { seatsCategories } = this.props;
		return (
			<React.Fragment>
				{
					seatsCategories.map((seatsCategory) => <Category key={seatsCategory.id} {...seatsCategory}/>)
				}
			</React.Fragment>
		)
	}
}

export default SeatsByCategory;
