import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

export const CategoryDistributionSkeleton = () => {
	return (
		<Card>
			<CardHeader>
				<Skeleton className='h-4 w-[150px]' />
			</CardHeader>
			<CardContent className='h-[300px]'>
				<Skeleton className='w-full h-full' />
			</CardContent>
		</Card>
	);
};
