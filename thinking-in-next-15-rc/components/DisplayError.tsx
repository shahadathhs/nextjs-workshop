import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertCircle } from 'lucide-react';

type DisplayErrorProps = {
	title?: string;
	error?: string;
	height?: string;
};

export const DisplayError = ({
	title = 'Error',
	error = 'Something went wrong',
	height = 'h-[300px]',
}: DisplayErrorProps) => {
	return (
		<Card>
			<CardHeader>
				<CardTitle>{title}</CardTitle>
			</CardHeader>
			<CardContent className={height}>
				<div className='flex flex-col items-center justify-center h-full'>
					<AlertCircle className='text-red-500' size={48} />
					<p className='text-red-500'>{error}</p>
				</div>
			</CardContent>
		</Card>
	);
};
