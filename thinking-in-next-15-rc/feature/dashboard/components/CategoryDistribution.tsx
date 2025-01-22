'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
	Cell,
	Legend,
	Pie,
	PieChart,
	ResponsiveContainer,
	Tooltip,
} from 'recharts';

type CategoryDistribution = {
	name: string;
	value: number;
};

export const CategoryDistribution = ({
	data,
}: {
	data: CategoryDistribution[];
}) => {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Category Distribution</CardTitle>
			</CardHeader>
			<CardContent className='h-[300px]'>
				<ResponsiveContainer width='100%' height='100%'>
					<PieChart>
						<Pie
							data={data}
							dataKey='value'
							nameKey='name'
							cx='50%'
							cy='50%'
							outerRadius={80}
							fill='hsl(var(--chart-1))'
							label
						>
							{data.map((entry, index) => (
								<Cell
									key={`cell-${index}`}
									fill={`hsl(var(--chart-${index + 1}))`}
								/>
							))}
						</Pie>
						<Tooltip />
						<Legend />
					</PieChart>
				</ResponsiveContainer>
			</CardContent>
		</Card>
	);
};
