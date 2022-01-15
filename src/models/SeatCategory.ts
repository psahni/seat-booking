export interface ISeatCategory  {
	id: number,
	name: string,
	rows: number,
	seats_per_row: number;
}
  
export const SeatsCategories: ISeatCategory[] = [
	{
		id: 1,
		name: 'Back Seats',
		rows: 8,
		seats_per_row: 5
	},
	{
		id: 2,
		name: 'Front Seats',
		rows: 8,
		seats_per_row: 5
	}
]
