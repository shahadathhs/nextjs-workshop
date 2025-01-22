'use client';

import {
	CartesianGrid,
	Legend,
	Line,
	LineChart,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
} from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

type MonthlyRevenue = {
	month: string;
	revenue: number;
};

export const MonthlyRevenue = ({
	monthlyRevenue,
}: {
	monthlyRevenue: MonthlyRevenue[];
}) => {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Monthly Revenue</CardTitle>
			</CardHeader>
			<CardContent className='h-[300px]'>
				<ResponsiveContainer width='100%' height='100%'>
					<LineChart data={monthlyRevenue}>
						<CartesianGrid strokeDasharray='3 3' />
						<XAxis dataKey='month' />
						<YAxis />
						<Tooltip />
						<Legend />
						<Line
							type='monotone'
							dataKey='revenue'
							stroke='hsl(var(--chart-1))'
							strokeWidth={2}
						/>
					</LineChart>
				</ResponsiveContainer>
			</CardContent>
		</Card>
	);
};
