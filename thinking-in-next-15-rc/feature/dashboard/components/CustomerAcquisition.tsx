'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
	Bar,
	BarChart,
	CartesianGrid,
	ResponsiveContainer,
	Tooltip,
	Legend,
	XAxis,
	YAxis,
} from 'recharts';

export const CustomerAcquisition = ({
	data,
}: {
	data: { month: string; customers: number }[];
}) => {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Customer Acquisition</CardTitle>
			</CardHeader>
			<CardContent className='h-[300px]'>
				<ResponsiveContainer width='100%' height='100%'>
					<BarChart data={data}>
						<CartesianGrid strokeDasharray='3 3' />
						<XAxis dataKey='month' />
						<YAxis />
						<Tooltip />
						<Legend />
						<Bar dataKey='customers' fill='hsl(var(--chart-2))' />
					</BarChart>
				</ResponsiveContainer>
			</CardContent>
		</Card>
	);
};
