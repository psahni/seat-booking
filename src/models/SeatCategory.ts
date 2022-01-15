export interface ISeatCategory  {
	id: string,
	name: string,
	rows: number,
	seats_per_row: number;
}
  
export const SeatsCategories: ISeatCategory[] = [
	{
		id: 'B',
		name: 'Back Seats',
		rows: 8,
		seats_per_row: 5
	},
	{
		id: 'F',
		name: 'Front Seats',
		rows: 8,
		seats_per_row: 5
	}
]
