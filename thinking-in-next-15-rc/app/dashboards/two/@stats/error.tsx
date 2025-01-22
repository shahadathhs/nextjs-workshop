'use client';

import { DisplayError } from '@/components/DisplayError';

export default function Error() {
	return (
		<DisplayError
			title='Stats Error'
			error='Something went wrong'
			height='h-auto'
		/>
	);
}
