'use client';

import { DisplayError } from '@/components/DisplayError';

export default function Error() {
	return (
		<DisplayError
			title='Revenue Error'
			error='Something went wrong'
			height='h-[300px]'
		/>
	);
}
