import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

export const StatsSkeleton = () => {
	return (
		<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
			{[...Array(4)].map((_, index) => (
				<Card key={index}>
					<CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
						<Skeleton className='h-4 w-[100px]' />
					</CardHeader>
					<CardContent>
						<Skeleton className='h-8 w-[80px] mb-2' />
						<Skeleton className='h-3 w-[120px]' />
					</CardContent>
				</Card>
			))}
		</div>
	);
};
