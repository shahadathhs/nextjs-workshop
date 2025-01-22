'use client';

import { Button } from '@/components/ui/button';
import { RefreshCcw } from 'lucide-react';
import { revalidateTag } from 'next/cache';
import { CacheTags } from '@/config/cache-config';

export const RefreshButton = () => {
	const handleClick = () => {
		revalidateTag(CacheTags.dashboard.stats);
		revalidateTag(CacheTags.dashboard.categoryDistribution);
		revalidateTag(CacheTags.dashboard.customerAcquisition);
		revalidateTag(CacheTags.dashboard.monthlyRevenue);
	};

	return (
		<Button variant='outline' size='sm' onClick={handleClick}>
			<RefreshCcw className='mr-2 w-4 h-4' />
			Refresh
		</Button>
	);
};
